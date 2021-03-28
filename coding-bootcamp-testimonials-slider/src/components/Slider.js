import React from 'react';
import styled from 'styled-components';
import slides from '../data/data';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Slide from './Slide';

const Slider = () => {
    const [active, setActive] = React.useState(1);

    const checkSlide = (slide) => {
        if (slide < 0) {
            return slides.length - 1;
        }
        if (slide > slides.length - 1) {
            return 0;
        }
        return slide;
    };

    const nextSlide = () => {
        setActive((old) => {
            let newActive = old + 1;
            return checkSlide(newActive);
        });
    };

    const prevSlide = () => {
        setActive((old) => {
            let newActive = old - 1;
            return checkSlide(newActive);
        });
    };
    return (
        <Wrapper>
            {slides.map((slide) => {
                return <Slide key={slide.id} {...slide} active={active} />;
            })}
            <div className='nav-container'>
                <button className='previous round' onClick={prevSlide}>
                    &#8249;
                </button>
                <button className='next round' onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;
    width: 90%;
    max-width: 1024px;

    height: 100%;
    max-height: 500px;
    .nav-container {
        position: absolute;
        bottom: -25px;
        right: 300px;
        button {
            text-decoration: none;
            border: none;
            display: inline-block;
            padding: 12px 20px;
            color: var(--dark-blue);
            font-size: 1.5rem;
            font-weight: 700;
            box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
        button:hover {
            background-color: var(--dark-blue);
            color: white;
        }
        .previous {
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
        }

        .next {
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
        }
    }

    .active {
        opacity: 1;
    }

    @media (max-width: 639px) {
        max-height: 100vh;
        .nav-container {
            top: 420px;
            left: 0;
            right: 0;
            width: 100%;
            text-align: center;
            margin: auto;
        }
    }
`;

export default Slider;
