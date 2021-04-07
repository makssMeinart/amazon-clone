import styled from "styled-components"
import { Link, Route } from "react-router-dom"
import Header from "../Header/Header"

const Categories = () => {
  return (
    <Container>
      {/* CategoriesCard */}
      <CategoriesCard>
        <CategoriesTitle>Beauty picks</CategoriesTitle>
        <CategoriesImg>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"></img>
        </CategoriesImg>
        <CategoriesBottom>
          <CategoriesShopNow>Shop Now</CategoriesShopNow>
        </CategoriesBottom>
      </CategoriesCard>

      <CategoriesCard>
        <CategoriesTitle>AmazonBasics</CategoriesTitle>
        <CategoriesImg>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"></img>
        </CategoriesImg>
        <CategoriesBottom>
          <CategoriesShopNow>Shop Now</CategoriesShopNow>
        </CategoriesBottom>
      </CategoriesCard>

      <CategoriesCard>
        <CategoriesTitle>Easy returns</CategoriesTitle>
        <CategoriesImg>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"></img>
        </CategoriesImg>
        <CategoriesBottom>
          <CategoriesShopNow>Shop Now</CategoriesShopNow>
        </CategoriesBottom>
      </CategoriesCard>

      {/* Signin Block */}
      <CategoriesSigninBlock>
        <CategoriesSignin>
          <CategoriesSigninTitle>
            Sign in for the best experience
          </CategoriesSigninTitle>
            <Link to="/login">
              <CategoriesSigninBtn>Signin Securily</CategoriesSigninBtn>
            </Link>
        </CategoriesSignin>
        <Shipping>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"></img>
        </Shipping>
      </CategoriesSigninBlock>

      <CategoriesCard>
        <CategoriesTitle>Shop top categories</CategoriesTitle>
        <CategoriesImg>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"></img>
        </CategoriesImg>
        <CategoriesBottom>
          <CategoriesShopNow>Shop Now</CategoriesShopNow>
        </CategoriesBottom>
      </CategoriesCard>

      <CategoriesCard>
        <CategoriesTitle>Computers & Accessories</CategoriesTitle>
        <CategoriesImg>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"></img>
        </CategoriesImg>
        <CategoriesBottom>
          <CategoriesShopNow>Shop Now</CategoriesShopNow>
        </CategoriesBottom>
      </CategoriesCard>

      <CategoriesCard>
        <CategoriesTitle>Get fit at home</CategoriesTitle>
        <CategoriesImg>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"></img>
        </CategoriesImg>
        <CategoriesBottom>
          <CategoriesShopNow>Shop Now</CategoriesShopNow>
        </CategoriesBottom>
      </CategoriesCard>

      <CategoriesMultiple>
        <CategoriesTitle>Shop by Categories</CategoriesTitle>
        <CategoriesOptionContainer>
          <CategoriesOption>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.png"></img>
            <OptionTitle>Computers & Accessories</OptionTitle>
          </CategoriesOption>

          <CategoriesOption>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.png"></img>
            <OptionTitle>Video Games</OptionTitle>
          </CategoriesOption>

          <CategoriesOption>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.png"></img>
            <OptionTitle>Baby</OptionTitle>
          </CategoriesOption>

          <CategoriesOption>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.png"></img>
            <OptionTitle>Toys & Games</OptionTitle>
          </CategoriesOption>
        </CategoriesOptionContainer>
        <CategoriesShopNow>Shop Now</CategoriesShopNow>
      </CategoriesMultiple>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 420px 420px;
  backdrop-filter: blur(50px);
  grid-gap: 0px;
  margin-top: 25px;
  padding: 0 25px 25px 25px;
  grid-gap: 20px;
`
// Categories Card
const CategoriesCard = styled.div`
  background: white;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CategoriesTitle = styled.h2`
  color: #0f1111;
  font-size: 1.3rem;
  margin: 0;
  padding-bottom: 0.8rem;
  font-weight: 900;
`
const CategoriesImg = styled.div`
  overflow: hidden;
  flex-grow: 1;

  img {
    height: 100%;
  }
`
const CategoriesBottom = styled.div``
const CategoriesShopNow = styled.div`
  font-size: 0.8rem;
  color: #007185;
  padding-top: 1rem;
  text-aligc: left;
`

// Categories Signin
const CategoriesSigninBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CategoriesSignin = styled.div`
  max-height: 150px;
  background-color: white;
  padding: 1.2rem;
  padding-bottom: 1.9rem;
`
const CategoriesSigninTitle = styled.div`
  font-size: 1.3rem;
  width: 70%;
  line-height: 1.3;
  font-weight: 900;
  padding-bottom: 1rem;
  color: #0f1111;
`
const CategoriesSigninBtn = styled.div`
  font-size: 0.8rem;
  color: #111;
  padding: 0.4rem 0;
  border-radius: 3px;
  background-image: linear-gradient(to bottom, #f7dc9b, #f4d17c, #f1c65b);
  border: 1px solid #555;
  text-align: center;
`

const Shipping = styled.div`
  line-height: 0;
  text-align: center;
  height: 250px;

  img {
    width: 95%;
    height: 100%;
  }
`

// Categories Multiple Choise
const CategoriesMultiple = styled.div`
  background: white;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
`
const CategoriesOptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.7px;
  padding-bottom: 3.25rem;
`
const CategoriesOption = styled.div`
  width: 49.5%;
  height: 129px;
  background: #f2fafb;
  text-align: center;

  img {
    mix-blend-mode: multiply;
    padding-top: 0.5rem;
  }
`
const OptionTitle = styled.div`
  font-size: 0.75rem;
  width: 70%;
  margin: 0 auto;
  line-height: 1.5;
`

export default Categories
