import React from 'react';
import './Banner.scss';
import { useCountdown } from './CountDown';
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 m-auto">
            <div id="carouselExampleIndicators" className="carousel slide d-flex align-items-center" style={{ marginTop: '100px', marginLeft: '100px' }} data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner" style={{ width: '100% !important' }}>
                <div className="carousel-item active">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="banner__text">
                      <span>The CHLOE Collection</span>
                      <h1>I don't do fashion. I am fashion</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="banner__text">
                      <span>The CHLOE Collection</span>
                      <h1>On Wednesdays, we wear pink</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="banner__text">
                      <span>The CHLOE Collection</span>
                      <h1>Fashions fade, style is eternal</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
