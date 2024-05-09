import React, { useEffect, useState } from 'react';
import ItemProduct from '../Product/ItemProduct';
import HeaderContent from '../Content/HeaderContent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductFeature.scss';
import { getProductFeatureService } from '../../services/userService';
function ProductFeature(props) {
  console.log('🚀 ~ ProductFeature ~ props:', props);
  let settings = {
    // dots: false,
    // Infinity: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="feature_product_area section_gap_bottom_custom">
      <div className="container-fluid ">
        <HeaderContent mainContent={props.title} infoContent="Bạn sẽ không thất vọng khi lựa chọn">
          {' '}
        </HeaderContent>

        <div className="row box-productFeature mx-auto" style={{ width: '100%' }}>
          <Slider {...settings}>
            {props.data &&
              props.data.length > 3 &&
              props.data.map((item, index) => {
                return (
                  <ItemProduct
                    id={item.id}
                    key={index}
                    width={350}
                    height={350}
                    type="col-lg-4 col-md-6"
                    name={item.name}
                    view={item.view}
                    img={item.productDetail[0].productImage[0].image}
                    price={item.productDetail[0].originalPrice}
                    discountPrice={item.productDetail[0].discountPrice}
                  ></ItemProduct>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default ProductFeature;
