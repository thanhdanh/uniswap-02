// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./libraries/Safemath.sol";

interface IUniswap {
    function WETH() external pure returns (address);

    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
}

interface IERC20 {
    function transferFrom(address from, address to, uint value) external returns (bool);
    function approve(address spender, uint value) external returns (bool);
}

contract MyDefiContract {
    using SafeMath for uint;
    
    IUniswap uniswap;
    mapping(address => uint) public balanceOf;

    event WithdrawETH(address indexed to, uint value);
    
    constructor(address _uniswap) {
        uniswap = IUniswap(_uniswap);
    }

    function swapTokensForExactTokens(
        address token,
        uint amountIn,
        uint amountOutMin,
        uint deadline
    ) external {
        IERC20(token).transferFrom(msg.sender, address(this), amountIn);
        address[] memory path = new address[](2);
        path[0] = token;
        path[1] = uniswap.WETH();
        IERC20(token).approve(address(uniswap), amountIn);
        uint[] memory amounts = uniswap.swapTokensForExactETH(
            amountIn, 
            amountOutMin,
            path, 
            address(this), 
            deadline
        );
        balanceOf[msg.sender] = balanceOf[msg.sender].add(amounts[amounts.length - 1]);
    }

    function withdrawETH() payable external {
        require(balanceOf[msg.sender] > 0, "Insufficient balance");
        uint amount = balanceOf[msg.sender];
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(amount);

        address payable to = payable(msg.sender);
        to.transfer(amount);
        emit WithdrawETH(msg.sender, amount);
    }
}