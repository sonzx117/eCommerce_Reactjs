import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addItemCartStart } from '../../action/ShopCartAction';
import './InfoDetailProduct.scss';
import CommonUtils from '../../utils/CommonUtils';
function InfoDetailProduct(props) {
  let { dataProduct } = props;
  console.log('🚀 ~ InfoDetailProduct ~ dataProduct:', dataProduct);
  let [arrDetail, setarrDetail] = useState([]);
  const [productDetail, setproductDetail] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [imgPreview, setimgPreview] = useState('');
  const [activeLinkId, setactiveLinkId] = useState('');
  const [quantity, setquantity] = useState('');
  const [quantityProduct, setquantityProduct] = useState(1);
  useEffect(() => {
    let { productDetail } = dataProduct ? dataProduct : [];

    if (productDetail) {
      setproductDetail(productDetail);

      setarrDetail(productDetail[0]);
      setactiveLinkId(productDetail[0].productDetailSize[0].id);
      setquantity(productDetail[0].productDetailSize[0].stock);

      props.sendDataFromInforDetail(productDetail[0].productDetailSize[0]);
    }
  }, [props.dataProduct]);

  let handleSelectDetail = (event) => {
    setarrDetail(productDetail[event.target.value]);
    if (productDetail[event.target.value] && productDetail[event.target.value].productDetailSize.length > 0) {
      setactiveLinkId(productDetail[event.target.value].productDetailSize[0].id);
      setquantity(productDetail[event.target.value].productDetailSize[0].stock);
      props.sendDataFromInforDetail(productDetail[event.target.value].productDetailSize[0]);
    }
  };
  let openPreviewImage = (url) => {
    setimgPreview(url);
    setisOpen(true);
  };
  let handleClickBoxSize = (data) => {
    setactiveLinkId(data.id);
    setquantity(data.stock);
    props.sendDataFromInforDetail(data);
  };
  const dispatch = useDispatch();
  let handleAddShopCart = () => {
    if (props.userId ) {
      if (quantity > 0)
      {
        dispatch(
          addItemCartStart({
            userId: props.userId,
            productdetailsizeId: activeLinkId,
            quantity: quantityProduct,
          })
        );
        toast.success('Đã thêm sản phẩm vào giỏ hàng');
      }
      else {
        toast.error('Sản phẩm đã hết hàng');
      }
    }
    else {
      toast.error('Đăng nhập để thêm vào giỏ hàng');
    }
  };
  const hethang = <p className='text-red-500'>Hết hàng</p>
  return (
    <div className="row s_product_inner">
      <div className="col-lg-6">
        <div className="s_product_img">
          <div id="carouselExampleIndicators" className="carousel slide d-flex flex-column" data-ride="carousel">
            <div className="d-flex flex-column" style={{ position: 'relative' }}>
              <ol className="carousel-indicators d-flex flex-column w-100" style={{ position: 'absolute', top: '360px', left: '-64px' }}>
                {arrDetail &&
                  arrDetail.productImage &&
                  arrDetail.productImage.length > 0 &&
                  arrDetail.productImage.map((item, index) => {
                    if (index === 0) {
                      return (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className="active">
                          <img height="60px" className="w-100" src={item.image} alt="" />
                        </li>
                      );
                    } else {
                      return (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className="">
                          <img height="60px" className="w-100" src={item.image} alt="" />
                        </li>
                      );
                    }
                  })}
              </ol>
            </div>
            <div className="carousel-inner">
              {arrDetail &&
                arrDetail.productImage &&
                arrDetail.productImage.length > 0 &&
                arrDetail.productImage.map((item, index) => {
                  if (index === 0) {
                    return (
                      <div key={index} onClick={() => openPreviewImage(item.image)} style={{ cursor: 'pointer' }} className="carousel-item active">
                        <img className="d-block w-100" src={item.image} alt="Ảnh bị lỗi" />
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} onClick={() => openPreviewImage(item.image)} style={{ cursor: 'pointer' }} className="carousel-item ">
                        <img className="d-block w-100" src={item.image} alt="Ảnh bị lỗi" />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="s_product_text">
          <h3>
            {dataProduct.name}
            <br />
            <span style={{ fontSize: '14px', color: '#444444' }}>Thương hiệu: {dataProduct && dataProduct.brandData ? dataProduct.brandData.value : ''}</span>
          </h3>
          <h2>{CommonUtils.formatter.format(arrDetail.discountPrice)}</h2>
          <ul className="list">
            <li>
              <a className="active" href="#">
                <span>Loại</span> : {dataProduct && dataProduct.categoryData ? dataProduct.categoryData.value : 'No category'}
              </a>
            </li>
            <li>
              <div className='checkslots'>
                <span>Trạng thái</span> : <span style={quantity > 0 ? {color: 'green', fontWeight: 'normal'} : {color: 'red', fontWeight:'normal'}}>{ quantity > 0 ? `Còn Hàng` : `Hết Hàng` }</span>
              </div>
            </li>
            <li>
              <div className="box-size">
                <a href="#">
                  {' '}
                  <span>Size</span>
                </a>
                {arrDetail &&
                  arrDetail.productDetailSize &&
                  arrDetail.productDetailSize.length > 0 &&
                  arrDetail.productDetailSize.map((item, index) => {
                    return (
                      <div onClick={() => handleClickBoxSize(item)} key={index} className={item.id === activeLinkId ? 'product-size active' : 'product-size'}>
                        {item.sizeData.value}
                      </div>
                    );
                  })}
              </div>
            </li>
            <li>
              <a href="#">{quantity} sản phẩm có sẵn</a>
            </li>
          </ul>
          <p>{arrDetail.description}</p>
          <div style={{ display: 'flex' }}>
            <div className="product_count">
              <label htmlFor="qty">Số lượng</label>
              {/* <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" /> */}
              <input type="number" value={quantityProduct} onChange={(event) => setquantityProduct(event.target.value)} min="1" />
            </div>
            <div className="form-group">
              <label style={{ fontSize: '14px', color: '#797979', fontFamily: '"Roboto",sans-serif', marginLeft: '16px' }} htmlFor="type">
                Loại sản phẩm
              </label>
              <select onChange={(event) => handleSelectDetail(event)} className="sorting" name="type" style={{ outline: 'none', border: '1px solid #eee', marginLeft: '16px' }}>
                {dataProduct &&
                  productDetail &&
                  productDetail.length > 0 &&
                  productDetail.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item.nameDetail}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="card_area">
            <a className="main_btn" onClick={() => handleAddShopCart()}>
              Thêm vào giỏ
            </a>
            <a className="icon_btn" href="#">
              <i className="lnr lnr lnr-heart" />
            </a>
          </div>
        </div>
      </div>
      {isOpen === true && <Lightbox mainSrc={imgPreview} onCloseRequest={() => setisOpen(false)} />}
    </div>
  );
}

export default InfoDetailProduct;
