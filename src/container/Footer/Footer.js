import React from 'react';
import './Footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaPinterest } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import logo from '../../resources/img/footer/logo.png';
import icon1 from '../../resources/img/footer/payment-1.png';
import icon2 from '../../resources/img/footer/payment-2.png';
import icon3 from '../../resources/img/footer/payment-3.png';
import icon4 from '../../resources/img/footer/payment-4.png';
import icon5 from '../../resources/img/footer/payment-5.png';
function Footer(props) {
  return (
    <div>
      <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item bg-01">
                <div className="instagram__text">
                  <AiOutlineInstagram size={40} />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item bg-02">
                <div className="instagram__text">
                  <AiOutlineInstagram size={40} />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item bg-03">
                <div className="instagram__text">
                  <AiOutlineInstagram size={40} />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item bg-04">
                <div className="instagram__text">
                  <AiOutlineInstagram size={40} />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item bg-05">
                <div className="instagram__text">
                  <AiOutlineInstagram size={40} />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item bg-06">
                <div className="instagram__text">
                  <AiOutlineInstagram size={40} />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="./index.html">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <p>Bất cứ ai cũng có thể diện những bộ cánh đẹp nhất và trở nên thật lộng lẫy, nhưng những thứ mọi người mặc trong ngày nghỉ mới thực sự hấp dẫn.</p>
                <div className="footer__payment">
                  <a href="#">
                    <img src={icon1} alt="icon1" />
                  </a>
                  <a href="#">
                    <img src={icon2} alt="icon2" />
                  </a>
                  <a href="#">
                    <img src={icon3} alt="icon3" />
                  </a>
                  <a href="#">
                    <img src={icon4} alt="icon4" />
                  </a>
                  <a href="#">
                    <img src={icon5} alt="icon5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="button" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                  <a href="#">
                    <BiLogoInstagramAlt />
                  </a>
                  <a href="#">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              <div className="footer__copyright__text">
                <p>
                  Copyright © All rights reserved | Đồ án Khóa luận tốt nghiệp 2024 <i className="fa fa-heart" aria-hidden="true" /> by{' '}
                  <a href="https://colorlib.com" target="_blank">
                    Nhóm 07 CLC TV
                  </a>
                </p>
              </div>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
