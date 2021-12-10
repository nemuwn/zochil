import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container } from "@mui/material";

const HeaderLayout = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  width: 100%;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${(props) => props.bgColor ?? "transparent"};
  height: 74px;

  transition: all 0.5s ease;

  text-align: center;
`;

const NavbarLogo = styled.div`
  float: left;

  line-height: 50px;
  padding-top: 20px;
  padding-bottom: 0;
  padding-left: 15px;
  padding-right: 15px;
`;

const NavbarMenu = styled.div`
  display: block !important;
`;

const NavUl = styled.ul`
  display: flex;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 30px;

  li {
    font-size: 16px;
    float: left;
    display: block;
    position: relative;
    margin: 0 10px;
  }
  a {
    color: ${(props) => props.bgColor ?? "#fff"};
    /* hsla(0, 0%, 100%, 0.5); */

    display: block;
    text-decoration: none;
    font-size: 13px;
    background-color: transparent !important;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    transition: all 0.5s;
    font-family: "Nunito", sans-serif;

    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
  }

  a:hover {
    color: white;
  }
`;

const NavbarSocial = styled.div`
  float: right;

  line-height: 68px;

  a {
    padding-left: 2px;
    padding-right: 2px;
  }

  /* .btn-icon {
    background-color: DodgerBlue;
    border: dodgerblue;
    border-radius: 50%;
    color: white;
  } */
`;

export const Header = () => {
  const [color, setColor] = useState();
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderLayout bgColor={color ? "#fff" : "transparent"}>
      <Container>
        <NavbarLogo>
          <a href="zochil.mn">
            <img
              src={
                color
                  ? "https://zochil.mn/static/media/logo-dark.b63f6276.png"
                  : "https://zochil.mn/static/media/logo-light.2ceff53b.png"
              }
              height="40"
              alt=""
            />
          </a>
        </NavbarLogo>
        <NavbarMenu bgColor={color ? "#000" : "#fff"}>
          <NavUl>
            <li>
              <a
                style={color ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Борлуулах
              </a>
            </li>
            <li>
              <a
                style={color ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Автоматжуулах
              </a>
            </li>
            <li>
              <a
                style={color ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Зөвлгөө авах
              </a>
            </li>
            <li>
              <a
                style={color ? { color: "black" } : { color: "white" }}
                href="#"
              >
                Холбогдох
              </a>
            </li>
          </NavUl>
        </NavbarMenu>
        <NavbarSocial>
          <NavUl>
            <li>
              <a href="https://facebook.com" className="btn btn-icon">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="btn btn-icon">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="btn btn-icon">
                <TwitterIcon />
              </a>
            </li>
          </NavUl>
        </NavbarSocial>
      </Container>
    </HeaderLayout>
  );
};
