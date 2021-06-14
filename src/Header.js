import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AmazonLogo from "./amazon-logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Container>
      <HeaderLogo>
       <Link to="/">
       <img src={AmazonLogo} />
       </Link>
      </HeaderLogo>
      <HeaderSectionDeliver>
        <LocationOnIcon />
        <HeaderOption>
          <HeaderSectionOptionOne>Deliver to </HeaderSectionOptionOne>
          <HeaderSectionOptionTwo>France</HeaderSectionOptionTwo>
        </HeaderOption>
      </HeaderSectionDeliver>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>
      </HeaderSearch>

      <HeaderNavItem>
        <HeaderOption>
          <HeaderSectionOptionOne>Hello , Ali</HeaderSectionOptionOne>
          <HeaderSectionOptionTwo>Accounts & List</HeaderSectionOptionTwo>
        </HeaderOption>

        <HeaderOption>
          <HeaderSectionOptionOne>Returns</HeaderSectionOptionOne>
          <HeaderSectionOptionTwo>& Orders</HeaderSectionOptionTwo>
        </HeaderOption>
      </HeaderNavItem>

      <HeaderCart>
        <Link to="/cart">
          <HeaderCartIcon>
            <ShoppingBasketIcon />
          </HeaderCartIcon>
          <HeaderCartCount>4</HeaderCartCount>
        </Link>
      </HeaderCart>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #232f3f;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
    cursor: pointer;
    vertical-align: middle;
  }
`;
const HeaderSectionDeliver = styled.div`
  padding: 0 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderSectionOptionOne = styled.div``;
const HeaderSectionOptionTwo = styled.div`
  font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 4px;
  height: 45px;
  overflow: hidden;
  margin-right: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
`;
const HeaderSearchIcon = styled.div`
  width: 45px;
  background-color: #febd69;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
`;

const HeaderNavItem = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px;
`;
const HeaderCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    margin-right: 11px;
    color: #fff;
    text-decoration:none;
  }
`;
const HeaderCartIcon = styled.div`
  padding-right: 9px;
`;
const HeaderCartCount = styled.div`
  padding-right: 9px;
  color: #febd69;
  font-weight: 700px;
`;
