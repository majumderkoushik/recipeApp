import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Category.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const CategoryList = ({ categories }) => {
  const [autoplay, setAutoplay] = useState(true);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleSlideClick = () => {
    // Toggle the autoplay status on slide click
    setAutoplay((prevAutoplay) => !prevAutoplay);
  };

  return (
    <div className='section-wrapper bg-whitesmoke py-8 mx-auto'>
      <div className='container '>
        <div className='sc-title text-center text-2xl font-bold mb-4'>Explore Categories</div>
        <Slider {...sliderSettings}>
          {categories.map((category) => {
            const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

            return (
              <Link
                to={`/meal/category/${title}`}
                className='category-item overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105'
                key={id}
                onClick={handleSlideClick}
              >
                <div className='category-item-img  c-box'>
                  <img src={thumbnail} alt={title} className='w-full h-full object-cover' />
                  <div className='category-item-title absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-center p-2'>
                    <h3 className='text-xl font-bold text-black'>{title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};


  export default CategoryList