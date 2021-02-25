import React, { useState } from "react";
import styled from "styled-components";
import back1 from "../Images/back1.jpg";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import Unsplash from "../Api/Unsplash";
const Banner = () => {
  const [data, setData] = useState();
  const { fun } = useSelector((state) => state.PexelReducer);

  const handleInput = (e) => {
    setData(e.target.value);
  };
  const getImage = async () => {
    return await Unsplash.get("/search/photos", {
      params: {
        query: data,
        page: Math.random() * 100,
        per_page: 30,
        orientation: "landscape",
      },
    });
  };
  const dispatch = useDispatch();
  const handleSub = (e) => {
    e.preventDefault();
    getImage().then((res) => {
      let results = res.data.results;
      dispatch({ type: "SET_DATA", payload: results });
    });
  };
  return (
    <form action="" onSubmit={handleSub}>
      <Wrapper>
        <WrapperContainer>
          <WrapperContent>
            <h1>
              The best free stock photos & videos shared by talented creators.
            </h1>
            <InputSearch>
              <input
                type="text"
                placeholder="Search for free photos"
                onChange={handleInput}
                value={data}
              />
              <SearchOutlinedIcon />
            </InputSearch>
            <Suggest>
              <span>Suggested:</span>
              <p>blogger technology contact blogging desk typing more</p>
            </Suggest>
          </WrapperContent>
        </WrapperContainer>
      </Wrapper>
    </form>
  );
};

export default Banner;
const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;
const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background: url(${back1}) no-repeat;
  color: #fff;
  background-size: 100% 100%;
  position: absolute;
  height: 600px;
  width: 100%;
  left: 0;
  top: 0;

  object-fit: contain;
`;
const InputSearch = styled.div`
  /* margin-left: 20px; */
  width: 70%;
  border: 1px solid #232a34;
  border-radius: 10px;
  color: gray;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 12px 15px;
  & > input {
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    /* font-weight: 400; */
  }
  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;
const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding: 0px 20px;
  & > h1 {
    width: 70%;
    line-height: 50px;
    @media screen and (max-width: 850px) {
      width: 100%;
    }
  }
`;
const Suggest = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-right: 10px;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  & > p {
    font-weight: 400;
    color: #bff0d8;
  }
`;
