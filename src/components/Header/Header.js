import styled from "styled-components"
import SearchIcon from "@material-ui/icons/Search"
import {RiShoppingCartLine} from "react-icons/ri";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation"
import { Link } from "react-router-dom"
// FiShoppingCart

const Header = () => {
  return (
    <Container>
      <HeaderTop>
        <HeaderLogo>
          <Link to="/">
            <img
              src={
                "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
              }
            />
          </Link>
        </HeaderLogo>

        <HeaderOptionLocation>
          <NotListedLocationIcon />
          <OptionLineWrapper>
            <OptionLineOne>Deliver to</OptionLineOne>
            <OptionLineTwo>Latvia</OptionLineTwo>
          </OptionLineWrapper>
        </HeaderOptionLocation>

        <HeaderSearch>
          <HeaderSearchInput />
          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>

        <HeaderNavList>
          <HeaderOption>
            <OptionLineOne>Hello, Sign in</OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>
          </HeaderOption>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          {/* Add Link on that */}
          <HeaderOptionCart>
            <Link to="/cart">
              <RiShoppingCartLine/>
              <CartCount>1</CartCount>
              <CartTitle>
                Cart
              </CartTitle>
            </Link>
          </HeaderOptionCart>
        </HeaderNavList>
      </HeaderTop>
      <HeaderBottom></HeaderBottom>
    </Container>
  )
}

const HeaderTop = styled.div`
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderBottom = styled.div`
  height: 40px;
  background-color: #232f3e;
`

const Container = styled.div``

// Header Logo
const HeaderLogo = styled.div`
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 5px 0 5px 13px;
  padding-left: 0.3rem;
  padding-right: 0.7rem;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    border: 1px solid white;
  }

  img {
    padding-top: 5px;
    width: 95px;
  }
`

const HeaderOptionLocation = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 0.1rem;
  padding-right: 0.5rem;
  margin: 5px 0;
  margin-right: 0.6rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    border: 1px solid white;
  }
`
const OptionLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const OptionLineOne = styled.div`
  font-size: 12px;
  opacity: 0.8;
`
const OptionLineTwo = styled.div`
  font-size: 14px;
  font-weight: 700;
`

const HeaderSearch = styled.form`
  display: flex;
  flex-grow: 1;
  border-radius: 7.5px;
  border: 3px solid transparent;
  margin-right: 0.5rem;

  :focus-within {
    border: 3px solid #FF9900;
  }
`
const HeaderSearchInput = styled.input`
  width: 100%;
  font-size: 15px;
  line-height: 1.1;
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;

  :focus {
    outline: none;
  }
`
const HeaderSearchIconContainer = styled.div`
  width: 50px;
  height: 40px;
  background-color: #febd69;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #febd55;
  }

  svg {
    font-size: 1.7rem;
    color: #333333;
  }
`

const HeaderNavList = styled.div`
  display: flex;
  color: white;
`
const HeaderOption = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    border: 1px solid white;
  }
`

const HeaderOptionCart = styled.div`
  height: 48px;
  padding: 0 0.4rem;
  margin-right: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  border: 1px solid transparent;
  border-radius: 2px;

  :hover {
    border: 1px solid white;
  }
  
  a {
    height: 48px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }

  svg {
    font-size: 2rem;
  }

`
const CartTitle = styled.div`
  font-size: .8rem;
  font-weight: 900;
  align-self: flex-end;
  padding-bottom: 7px;
`
const CartCount = styled.div`
  color: #f08804;
  font-size: 1.2rem;
  font-weight: 900;
  padding-left: 0.3rem;
  position: absolute;
  top: 6px;
  right: 15px;
  z-index: 1;
  line-height: 1;
`

// Don't TOUCH
export default Header
