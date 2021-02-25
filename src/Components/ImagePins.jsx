import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import water from "../Images/water.jpg";
import unsplash from "../Api/Unsplash";
import { useDispatch, useSelector } from "react-redux";
import Unsplash from "../Api/Unsplash";

const ImagePins = () => {
  const { data } = useSelector((state) => state.PexelReducer);
  console.log(data);
  const [pages, setPages] = useState(1);
  const [res, setRes] = useState([]);
  const dispatch = useDispatch();
  const getImage = async (term) => {
    return await Unsplash.get("/search/photos", {
      params: {
        query: term,
        page: Math.random() * 100,
        per_page: 30,
        orientation: "landscape",
      },
    });
  };
  const newPins = () => {
    let promises = [];
    let pinData = [];
    let pins = [
      "Tokyo",
      "ocean",
      "river",
      "mountain",
      "cricket",
      "volley",
      "baseball",
      "computers",
      "fruits",
      "tiger",
      "elephants",
    ];
    pins.forEach((pin) => {
      promises.push(
        getImage(pin).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          dispatch({ type: "SET_DATA", payload: pinData });
          console.log(pinData);
        })
      );
    });
    Promise.all(promises).then(() => {
      setRes(pinData);
    });
  };
  useEffect(() => {
    newPins();
    console.log(res);
  }, []);

  return (
    <ImagePin>
      <h1 style={{ textAlign: "left", paddingLeft: "20px" }}>
        Free Stock Photos
      </h1>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        {data.map((info) => (
          <IMG key={info.id}>
            <img src={info.urls.regular} alt={info.alt_description} />
          </IMG>
        ))}
      </Grid>
    </ImagePin>
  );
};

export default ImagePins;
const ImagePin = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;
const IMG = styled.div`
  margin: 10px;
  overflow: hidden;
  border-radius: 16px;
  height: 300px;
  width: 280px;
  & > img {
    height: 300px;
    width: 280px;
    object-fit: cover;
    border-radius: 16px;
    transition: 4s;
    filter: brightness(80%);
    cursor: zoom-in;
    :hover {
      transform: scale(2);
      filter: brightness(100%);
    }
  }
`;
