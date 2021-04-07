import { useState } from "react"
import { CarouselData } from "../../data/CarouselData/CarouselData"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0)
  const length = slides.length - 1

  // Check that CarouselData is available and the ammout of slides ain't 0
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? (current = length) : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length ? (current = 0) : current + 1)
  }

  // This will render the img that matches the current
  return (
    // The main Carousel Container
    <CarouselContainer>
      {/* Banner link */}
      <Link to="/cart">
        {/* Banner Container */}
        <CarouselItemWrapper>
          {/* Images  */}
          {CarouselData.map((slide, index) => {
            if (index === current) {
              return <img src={slide.img} className="active" key={index} />
            }
          })}
        </CarouselItemWrapper>
      </Link>
      {/* Next / Prev */}
      <BsChevronLeft onClick={prevSlide} className="sliderPrevSlide" />
      <BsChevronRight onClick={nextSlide} className="sliderNextSlide" />
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  height: 225px;
  postion: relative;
  display: flex;

  // Disable mouseSelect 
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  img {
    position: absolute;
    height: 600px;
    width: 100%;
    z-index: -1;
    pointer-events: none;
  }

  svg {
    position: absolute;
    height: 100%;
    width: 40px;
    height: inherit;
    cursor: pointer;
  }

  a {
    height: inherit;
    width: 100%;
  }
`
const CarouselItemWrapper = styled.div``

export default Carousel
