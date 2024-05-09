import React, { useEffect, useState } from 'react';
import '../../index.css';
import './HomeBanner.scss';
import { Link } from 'react-router-dom';
function HomeBanner(props) {
  return (
    <div className="home_banner_area mb-40">
      {/* class home_banner_area trong file style.css chứa background banner  */}
      <div className="box-banner" style={{ backgroundImage: `url(${props.image})`, backgroundPosition: 'center' }}></div>
    </div>
  );
}

export default HomeBanner;
