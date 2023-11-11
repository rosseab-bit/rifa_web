import "../App.css";
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
      <header className="backgroundHead">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            xs={6}
            style={{
              backgroundColor: "rgba(0, 99, 255, 0.3)",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: "0px !important",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  jstifyContent: "center",
                }}
              >
                <p
                  style={{
                    color: "#FFF",
                    marginLeft: "5px",
                    fontSize: 14,
                    marginTop: 20,
                    textAlign: "center",
                  }}
                >
                  {dataConfig?.length > 0
                    ? dataConfig[0]?.abaout
                    : `Loading...`}
                </p>
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            style={{
              backgroundColor: "rgba(0, 99, 255, 0.3)",
              borderRadius: 5,
            }}
          >
            {dataConfig && (
              <div>
                {dataConfig[0]?.awards?.split(",").map((item, key) => (
                  <p
                    style={{
                      color: "#FFF",
                      marginLeft: "5px",
                      fontSize: 10,
                      marginLeft: 50,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </header>
    </>
  );
};
export default HeadWeb;
