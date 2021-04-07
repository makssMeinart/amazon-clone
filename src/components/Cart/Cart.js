import styled from "styled-components"
import CartItem from "./CartItem"

const Cart = () => {
  return (
    <Container>
      {/* Shopping Cart Items */}
      <CartContainer>
        <CartTop>
          <CartTitle>Shopping Cart</CartTitle>
          <CartPrice>Price</CartPrice>
        </CartTop>
        <CartContent>
          <CartItem />
          {/* Subtotal */}
          <Subtotal>
            <SubtotalItems>Subtotal (1 Item ) </SubtotalItems>
            <SubtotalPrice> $16.99</SubtotalPrice>
          </Subtotal>
        </CartContent>
      </CartContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
`
const CartContainer = styled.div`
  background: white;
  width: 73%;
  min-height: 340px;
  margin: 1.9rem 1rem;
  padding: 0 1.5rem;
`
const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #ddd;
`
const CartContent = styled.div``
const CartTitle = styled.h2`
  font-size: 1.75rem;
  color: #0f1111;
  font-weight: 400;
  margin: 1.1rem 0;
`
const CartPrice = styled.p`
  color: #5b5959;
  margin: 0;
  padding-bottom: 0.1rem;
  font-size: 0.8rem;
  padding-right: 2px;
`
const Subtotal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0.2rem;
  padding-bottom: 3.7rem;
`
const SubtotalItems = styled.div`
  font-size: 1.12rem;
  color: #0f1111;
`
const SubtotalPrice = styled.p`
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
  margin-left: 0.3rem;
`

export default Cart
