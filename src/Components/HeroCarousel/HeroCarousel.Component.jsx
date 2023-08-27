import React, { useState } from 'react'
import HeroSlider from "react-slick";
import { NextArrow } from './Arrows.Component';

const HeroCarousel = () => {

const [images , setImages] = useState([
  {
    "adult": false,
    "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      14,
      10749
    ],
    "id": 976573,
    "original_language": "en",
    "original_title": "Elemental",
    "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    "popularity": 3167.104,
    "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    "release_date": "2023-06-14",
    "title": "Elemental",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 1452
  },
  {
    "adult": false,
    "backdrop_path": "/na442LUrWkQMxSmrQUPtaw3T3nn.jpg",
    "genre_ids": [
      28,
      878,
      27
    ],
    "id": 615656,
    "original_language": "en",
    "original_title": "Meg 2: The Trench",
    "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    "popularity": 2319.709,
    "poster_path": "/FQHtuf2zc8suMFE28RyvFt3FJN.jpg",
    "release_date": "2023-08-02",
    "title": "Meg 2: The Trench",
    "video": false,
    "vote_average": 7,
    "vote_count": 724
  },
  
]);

  const settingLG =  {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
     speed: 500,
     slideToScroll: 1,
     nextArrow: <NextArrow/>,
     prevArrow: <prevArrow/> ,
  };

  const settings = {
     arrows : true,
     slidesToShow: 1,
     infinite: true,
     speed: 500,
     slideToScroll: 1,
  }

  return (
    <>
       <div className = "lg:hidden">
        <HeroSlider {...settings}>
          {
            images.map((images) => (
              <div className='w-full h-56 md:h-80 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
                alt="Hero Banner"
                className='w-full h-full rounded-md object-cover' />
              </div>
            ))
          }
        </HeroSlider>
       </div>
       <div className='hidden lg:block'>
       <HeroSlider {...settingLG}>
          {
            images.map((images) => (
              <div className='w-full h-96 px-2 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
                alt="Hero Banner"
                className='w-full h-full rounded-md object-cover' />
              </div>
            ))
          }
        </HeroSlider>
       </div>
    </>
  )
}

export default HeroCarousel;