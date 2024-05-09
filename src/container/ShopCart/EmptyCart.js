import React from 'react';
import emptycart from '../../resources/img/cart/emptycartgreen.png';
import { NavLink } from 'react-router-dom';
const EmptyCart = () => {
    return (
      <div className='container-cart'>
      <div className='cart-empty'>
      <img src={emptycart} alt="empty-cart" className='image-cart'/>
      <h4 style={{color:'#00b300'}}>Giỏ hàng của bạn đang trống</h4>
      <NavLink
        to="/shop"
        exact={true}
        className="btn-cart"
      >
        Tiếp tục mua sắm
      </NavLink>
      </div>
  </div>
    );
};

export default EmptyCart;