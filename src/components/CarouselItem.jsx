import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <div className="carousel-item__container">
      <img
          className="carousel-item__img"
          src={cover}
          alt={title}
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
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
      </div>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

export default CarouselItem;