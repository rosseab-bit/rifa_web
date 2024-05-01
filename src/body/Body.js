import "./BodyStyle.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ImgXRed from "../static/img/x_red.png";
import Button from "@mui/material/Button";
import iconBoca from "../static/img/iconBoca.png";
import iconNumLock from "../static/img/numLock.png";
import BlockIcon from '@mui/icons-material/Block';
import ClearIcon from '@mui/icons-material/Clear';
const BodyWeb = () => {
  const [dataNumber, setDataNumber] = useState();
  const [updateComponent, setUpdateComponent] = useState(0);
  const getNumbers = async () => {
    try {
      const url = "http://192.168.0.161:8000/getdata";
      let response = await axios.get(url);
      //let data = await response.json();
      let arrNumber = response.data.data;
      setDataNumber(arrNumber);
    } catch (error) {
      console.error(error);
    }
  };
  const n = 100;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  const numberSelected = async (number) => {
    if (number?.status === "available") {
      console.log("seleccionaste el numero: ", number);
      try {
        const url = "http://192.168.0.161:8000/putdata";
        let response = await axios.post(url, { number_selected: number.number});
        //let data = await response.json();
        let arrNumber = response.data.data;
      } catch (error) {
        console.error(error);
      }
      getNumbers();
      setUpdateComponent(updateComponent + 1);
    }
      getNumbers();
      setUpdateComponent(updateComponent + 1);
  };

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <>
      <div className="contenedor-numbers">
        {dataNumber?.map((item, key) => (
          <>
            {item.status === "available" && (
              <Button
                className="buttonBlock"
                variant="contained"
                onClick={() => numberSelected(item)}
	    >
		<p>
                {item.number}
		</p>
              </Button>
            )}
            {item?.status === "block" && (
              <Button
                className="buttonBlock"
                variant="contained"
                onClick={() => numberSelected(item)}
              >
		<ClearIcon className="iconButtonImage"/>
              </Button>
            )}
            {item?.status === "pending" && (
              <Button
                className="buttonPending"
                variant="contained"
                onClick={() => numberSelected(item)}
	    >
		<p>
                {item.number}
		</p>
              </Button>
            )}
          </>
        ))}
      </div>
    </>
  );
};
export default BodyWeb;
