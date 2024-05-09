import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemCartStart } from '../../action/ShopCartAction';
import CommonUtils from '../../utils/CommonUtils';
import { PiEyeLight } from 'react-icons/pi';
import './ItemProduct.scss';
// độ phân giải ảnh có thể làm vỡ layout
function ItemProduct(props) {
  return (
    <div className={props.type}>
      <div style={{ cursor: 'pointer' }} className="single-product">
        <Link to={`/detail-product/${props.id}`}>
          <div style={{ width: props.width, height: props.height }} className="product-img">
            <img className="img-fluid w-100" src={props.img} alt="" />
            <div className="p_icon">
              <a>
                <i className="ti-eye" />
              </a>
              <a>
                <i className="ti-shopping-cart" />
              </a>
            </div>
          </div>
          <div style={{ width: props.width, height: '150px' }} className="product-btm">
            <a className="d-block">
              <h4>{props.name}</h4>
            </a>
            <div className="mt-3 d-flex align-items-center justify-content-between">
              <div className="mt-3 d-flex flex-column gap-1">
                <span className="mr-4">{CommonUtils.formatter.format(props.discountPrice)}</span>
                <del>{CommonUtils.formatter.format(props.price)}</del>
              </div>
              <div className="mt-3 d-flex align-items-center gap-1">
                <PiEyeLight size={15} color="#9e9e9e" />
                <span style={{ fontSize: '14px', color: '#9e9e9e' }}>{props.view} lượt xem</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemProduct;
