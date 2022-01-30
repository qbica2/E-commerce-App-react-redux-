import React from 'react';
import Header from '../../components/Header'
import Catagories from '../../components/Catagories'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { nextCarousel, backCarousel, selectCarousel } from "../../redux/CarouselSlice"

function LandingPage() {

    const value = useSelector(state => state.carousel.value)

    const dispatch = useDispatch();

    const handleBack = () => {
        if (value === 0) {
            return false;
        }
        dispatch(backCarousel())
    }

    const handleNext = () => {
        if (value === 3) {
            return false
        }
        dispatch(nextCarousel())
    }

    const handleSelect = (id) => {

        dispatch(selectCarousel(id))
    }

    return (
        <div className="App">
        <Header />
        <Catagories />
        <div className="carousel-container">
            <div className="carousel-left-right">
                <ArrowBackIosIcon onClick={handleBack} />
            </div>
            {
                value === 0 && <div className="carousel-middle">
                    <div className="carousel-img-container">
                        <img src="https://images.hepsiburada.net/banners/s/0/800-400/bannerImage2059_20220111150507.png/format:webp" alt="first" className="carousel-img" />
                        <div>
                            <button onClick={(e) => handleSelect(e.target.id)} id="0" className="img-btn selected"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="1" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="2" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="3" className="img-btn"></button>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et aliquid soluta quisquam quos doloremque! Minus, odit laborum! Placeat officia molestiae magnam? Dolorem aliquid id exercitationem! Minima cumque commodi nulla.</p>
                    </div>
                </div>
            }
            {
                value === 1 && <div className="carousel-middle">
                    <div className="carousel-img-container">
                        <img src="https://images.hepsiburada.net/banners/s/0/800-400/bannerImage2147_20210913124153.png/format:webp" alt="second" className="carousel-img" />
                        <div>
                            <button onClick={(e) => handleSelect(e.target.id)} id="0" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="1" className="img-btn selected"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="2" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="3" className="img-btn"></button>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam quo distinctio ipsa, ullam officia accusamus dolore sit voluptatum pariatur iure ducimus praesentium nesciunt nemo dolorum unde minima earum nostrum!</p>
                    </div>
                </div>
            }
            {
                value === 2 && <div className="carousel-middle">
                    <div className="carousel-img-container">
                        <img src="https://images.hepsiburada.net/banners/s/0/800-400/bannerImage2116_20220125132237.png/format:webp" alt="second" className="carousel-img" />
                        <div>
                            <button onClick={(e) => handleSelect(e.target.id)} id="0" className="img-btn "></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="1" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="2" className="img-btn selected"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="3" className="img-btn"></button>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore perferendis magni in. Labore consequuntur soluta incidunt blanditiis iste, natus, a ipsa rerum molestias, assumenda nulla est facere aliquid cumque.</p>
                    </div>
                </div>
            }
            {
                value === 3 && <div className="carousel-middle">
                    <div className="carousel-img-container">
                        <img src="https://images.hepsiburada.net/banners/s/0/800-400/bannerImage2086_20220121171313.png/format:webp" alt="second" className="carousel-img" />
                        <div>
                            <button onClick={(e) => handleSelect(e.target.id)} id="0" className="img-btn "></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="1" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="2" className="img-btn"></button>
                            <button onClick={(e) => handleSelect(e.target.id)} id="3" className="img-btn selected"></button>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate iste culpa aut eaque ratione incidunt fugiat possimus, nobis molestias suscipit vero corporis maxime error beatae obcaecati animi eligendi veritatis officia.</p>
                    </div>
                </div>
            }
            <div className="carousel-left-right">
                <ArrowForwardIosIcon onClick={handleNext} />
            </div>
        </div>
        </div>

    )
}

export default LandingPage;
