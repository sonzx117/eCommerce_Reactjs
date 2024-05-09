import React, { useEffect, useState } from 'react';
import './Discount.scss';
import discount from '../../resources/img/banner/discount.jpg';
// import { useCountdown } from './CountDown';

const COUNTDOWN_TARGET = new Date('2024-06-31T23:59:59');

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};
const Discount = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <section className="discount">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="discount__pic">
              <img src={discount} alt="discount" />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="discount__text">
              <div className="discount__text__title">
                <span>Discount</span>
                <h2>Summer 2024</h2>
                <h5>
                  <span>Sale</span> 50%
                </h5>
              </div>
              <div className="discount__countdown" id="countdown-time">
                <div className="countdown__item">
                  <span>{timeLeft.days}</span>
                  <p>Days</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.days}</span>
                  <p>Hour</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.minutes}</span>
                  <p>Min</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.seconds}</span>
                  <p>Sec</p>
                </div>
              </div>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
