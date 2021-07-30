import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
  <div className="carousel-item">
    <div className="carousel-item__container">
      <img
          alt=""
          className="carousel-item__img"
          src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="carousel-item__details">
          <div>
              <img
                alt="Play Icon"
                className="carousel-item__details--img"
                src={playIcon}
              />
              <img
                alt="Plus Icon"
                className="carousel-item__details--img"
                src={plusIcon}
              />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>
  </div>
);

export default CarouselItem;