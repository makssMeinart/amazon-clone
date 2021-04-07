import { CarouselData } from "../../data/CarouselData/CarouselData"
import Carousel from "../Carousel/Carousel"
import Categories from "../Categories/Categories"

const Home = () => {
  return (
    <div>
      <Carousel slides={CarouselData} />
      <Categories />
    </div>
  )
}

export default Home