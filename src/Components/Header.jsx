import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Avatar, Button } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import Unsplash from "../Api/Unsplash";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getImage = async () => {
    return await Unsplash.get("/search/photos", {
      params: {
        query: input,
        page: Math.random() * 100,
        per_page: 30,
        orientation: "landscape",
      },
    });
  };

  // console.log(pages);
  const handleSub = (e) => {
    e.preventDefault();
    getImage().then((res) => {
      let results = res.data.results;
      dispatch({ type: "SET_DATA", payload: results });
    });
  };

  const showBack = () => {
    if (window.scrollY >= 150) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", showBack);

  return (
    <form onSubmit={handleSub}>
      <Wrapper style={{ background: nav ? "#232a34" : "" }}>
        <LeftWrapper>
          <Logo>
            <img src={logo} alt="" />
            <p>Pexels</p>
          </Logo>
          {nav ? (
            <InputSearch>
              <input
                type="text"
                placeholder="Search for free photos"
                onChange={handleInput}
                value={input}
              />
              <SearchOutlinedIcon />
            </InputSearch>
          ) : (
            ""
          )}
        </LeftWrapper>
        <Content>
          <ul>
            <li>Explore</li>
            <li>License</li>
            <li>
              <NotificationsNoneOutlinedIcon
                style={{ height: "25px", width: "25px", paddingTop: "10px" }}
              />
            </li>

            <li style={{ paddingTop: "5px" }}>
              <Avatar style={{ height: "30px", width: "30px" }} />
              <ExpandMoreOutlinedIcon />
            </li>
            <li style={{ marginTop: "5px" }}>
              <Button
                variant="outlined"
                style={{ color: "#fff", background: "#05A081" }}
              >
                Upload
              </Button>
            </li>
            <li>
              <AppsOutlinedIcon
                style={{ height: "30px", width: "30px", marginTop: "5px" }}
              />
            </li>
          </ul>
        </Content>
      </Wrapper>
    </form>
  );
};

export default Header;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 66px;
  z-index: 100;
  /* background-color: {
    nav?#232a34: "";
  } */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputSearch = styled.div`
  /* display: none; */
  margin-left: 20px;
  width: 100%;
  border: 1px solid #232a34;
  border-radius: 10px;
  color: gray;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 12px 17px;
  min-width: 250px;
  & > input {
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    /* font-weight: 400; */
  }
`;
const Logo = styled.div`
  height: 66px;

  display: flex;
  align-items: center;
  margin-left: 20px;
  & > img {
    border-radius: 10px;
    height: 40px;
    margin-right: 15px;
  }
  & > p {
    font-weight: 500;
    font-size: 19px;
    color: #fff;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;
const Content = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > li {
      list-style: none;
      margin-right: 28px;
      transition: 0.4s;
      font-weight: 500;
      :hover {
        color: #9b9b9b;
      }
    }
    & > :nth-child(4) {
      display: flex;
      align-items: center;
    }
    & > :nth-child(1) {
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
    & > :nth-child(2) {
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
    & > :nth-child(4) {
      @media screen and (max-width: 678px) {
        display: none;
      }
    }
    & > :nth-child(5) {
      @media screen and (max-width: 678px) {
        display: none;
      }
    }
    & > :nth-child(3) {
      @media screen and (max-width: 678px) {
        margin-right: 10px;
        margin-left: 0px;
      }
    }
    & > :last-child {
      display: none;
      :hover {
        color: #ebebeb;
      }
      @media screen and (max-width: 678px) {
        display: contents;
      }
    }
  }
`;
