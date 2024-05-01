import "../App.css";
import "./HeadStyles.css";
import { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

const HeadWeb = () => {
  const [dataConfig, setDataConfig] = useState();
  const [renderComponent, setRenderComponent] = useState(0);
  const getConfig = async () => {
    try {
      const url = "http://192.168.0.161:8000/getconfig";
      let response = await axios.get(url);
      let configData = response.data.data;
      setDataConfig(configData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConfig();
  }, []);
  useEffect(() => {
    setRenderComponent(renderComponent + 1);
  }, [dataConfig]);

  if (dataConfig?.length <= 0) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <>
      <header className="contenedor">
        <div className="col1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              {dataConfig?.length > 0 ? dataConfig[0]?.abaout : `Loading...`}
            </p>
          </div>
        </div>

        {dataConfig && (
          <div className="col2">
            {dataConfig[0]?.awards?.split(",").map((item, key) => (
              <p>{item}</p>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
export default HeadWeb;
