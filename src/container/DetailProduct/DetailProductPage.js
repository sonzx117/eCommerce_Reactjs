import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetailProductByIdService, getProductRecommendService } from '../../services/userService';
import ImgDetailProduct from '../../component/Product/ImgDetailProduct';
import InfoDetailProduct from '../../component/Product/InfoDetailProduct';
import CommentProduct from '../../component/Product/CommentProduct';
import ProfileProduct from '../../component/Product/ProfileProduct';
import ReviewProduct from '../../component/Product/ReviewProduct';
import DescriptionProduct from '../../component/Product/DescriptionProduct';
import NewProductFeature from '../../component/HomeFeature/NewProductFeature';
import ProductFeature from '../../component/HomeFeature/ProductFeature';
import './DetailProduct.scss';
function DetailProductPage(props) {
  const [dataProduct, setDataProduct] = useState({});
  const [dataDetailSize, setdataDetailSize] = useState({});
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [dataProductRecommend, setdataProductRecommend] = useState([]);
  useEffect(async () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      fetchProductFeature(userData.id);
      setUser(userData);
    }

    window.scrollTo(0, 0);

    fetchDetailProduct();
  }, [id]);
  let sendDataFromInforDetail = (data) => {
    setdataDetailSize(data);
  };
  let fetchDetailProduct = async () => {
    let res = await getDetailProductByIdService(id);
    if (res && res.errCode === 0) {
      setDataProduct(res.data);
    }
  };
  let fetchProductFeature = async (userId) => {
    let res = await getProductRecommendService({
      limit: 20,
      userId: userId,
    });
    if (res && res.errCode === 0) {
      setdataProductRecommend(res.data);
    }
  };

  console.log('🚀 ~ DetailProductPage ~ dataProduct:', dataProduct);
  return (
    <div>
      <section className="banner_area bg-banner">
        <div className="banner_inner overlay d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Chi tiết sản phẩm</h2>
                <p>Thông số chi tiết về sản phẩm</p>
              </div>
              <div className="page_link">
                <Link to={'/'}>Trang chủ</Link>
                <Link to={'/shop'}>Cửa hàng</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="product_image_area">
        <div className="container">
          <InfoDetailProduct userId={user && user.id ? user.id : ''} dataProduct={dataProduct} sendDataFromInforDetail={sendDataFromInforDetail}>
            {' '}
          </InfoDetailProduct>
        </div>
      </div>
      <section className="product_description_area">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                Thông số chi tiết
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                Mô tả chi tiết
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">
                Đánh giá
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <ProfileProduct data={dataDetailSize} />
            </div>
            <div className="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
              <DescriptionProduct data={dataProduct.contentHTML} />
            </div>

            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
              <ReviewProduct />
            </div>
          </div>
        </div>
        {user && dataProductRecommend && dataProductRecommend.length > 0 && <ProductFeature title={'Sản phẩm bạn quan tâm'} data={dataProductRecommend}></ProductFeature>}
      </section>
    </div>
  );
}

export default DetailProductPage;
