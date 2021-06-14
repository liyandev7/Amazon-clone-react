import React from "react";
import styled from "styled-components";
function Product() {
  return (
    <Container>
      <ProductTitle>
        Wage Pro Universal Gaming Headset - Black/Blue (WMAGY-N116)
      </ProductTitle>
      <ProductPrice>$49.99</ProductPrice>
      <ProductStars>⭐⭐⭐⭐⭐</ProductStars>
      <ProductImages>
        <img
          src={
            "https://m.media-amazon.com/images/I/71JCju620eS._AC_UY327_FMwebp_QL65_.jpg"
          }
        />
      </ProductImages>
      <ActionSection>
        <ProductButtonAddCart>Add To Cart</ProductButtonAddCart>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  flex: 1;
  min-height: 300px;
  z-index: 100;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.span`
  color: #0f1111;
  font-weight: 800;
  font-size: 14px;
`;
const ProductPrice = styled.p`
  margin: 10px 0;
  font-weight: bold;
  color: #333;
  font-size: 16px;
`;
const ProductStars = styled.div``;
const ProductImages = styled.div`
  margin-top: 15px;
  img {
    max-width: 200px;
    object-fit: contain;
  }
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
`;
const ProductButtonAddCart = styled.button`
  border: none;
  text-align: center;
  border-radius: 4px;
  background-color: #f90;
  color: white;
  font-weight: 600;
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin-top: 15px;
`;
