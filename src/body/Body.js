import "../App.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";

const BodyWeb = () => {
  const getNumbers = async () => {
    try {
      const url = "http://127.0.0.1:8000/getdata";
      let response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const n = 100;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <>
      <div className="containerCardNumbers">
        {arr.map((item, key) => (
          <Button className="buttonNumber" variant="contained">
            {Number(item + 1)}
          </Button>
        ))}
      </div>
    </>
  );
};
export default BodyWeb;
