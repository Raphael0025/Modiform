import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { SliderCard } from 'Components'
import { useCart } from 'Context/CartContext';

const SliderWrapper = ({data, slides, setWidth}) => {
    const settings = {
        dots: false,
        speed: 500,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: slides,
        variableWidth: setWidth
    }
    const { addToCart } = useCart();

    return (
        <div className='container p-1'>
            <Slider {...settings}>
            {data.map((item, indx) => (
                <SliderCard data={item} id={indx} addToCart={addToCart} />
            ))}
            </Slider>
        </div>
    )
}

export default SliderWrapper