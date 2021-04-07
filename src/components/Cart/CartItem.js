import styled from "styled-components"

const CartItem = () => {
  return (
    <Item>
      <ItemContent>
        <ItemImg>
          <img src="https://m.media-amazon.com/images/I/61UarELLTtL._AC_AA180_.jpg"></img>
        </ItemImg>
        <ItemInfoContainer>
          <ItemName>
            Cable Matters USB C to DisplayPort 1.4 Cable (USB-C to DisplayPort
            Cable, USB C to DP Cable) Supporting 8K 60Hz in Black 6 ft -
            Thunderbolt 3 Port Compatible with MacBook Pro, Dell XPS 13 and More
          </ItemName>
          <ItemStock>In Stock</ItemStock>
          <ItemButtonsContainer>
            <ItemQuantity>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
            </ItemQuantity>
            <ItemDelete>Delete</ItemDelete>
          </ItemButtonsContainer>
        </ItemInfoContainer>
        <ItemPriceContainer>
          <ItemPrice>$16.99</ItemPrice>
        </ItemPriceContainer>
      </ItemContent>
    </Item>
  )
}


const Item = styled.div``
const ItemContent = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`
const ItemImg = styled.div`
  margin-right: .2rem;
`
const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`
const ItemName = styled.div`
  font-size: 1.12rem;
  font-weight: 700;
  color: #007185;
  width: 80%;
  padding-top: .7rem;
`
const ItemStock = styled.div`
  font-size: .75rem;
  color: #007600;
  flex-grow: 1;
  padding-top: .2rem;
`
const ItemButtonsContainer = styled.div`
  display: flex;
`
const ItemQuantity = styled.select``
const ItemDelete = styled.div`
  font-size: .75rem;
  color: #007185;
`
const ItemPriceContainer = styled.div``
const ItemPrice = styled.p`
  font-size: 1.12rem;
  font-weight: 700;
  margin: .8rem 0 0 0;
`



export default CartItem