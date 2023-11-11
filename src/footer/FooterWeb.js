import "../App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import iconBoca from "../static/img/iconBoca.png";
import BlockIcon from '@mui/icons-material/Block';


const FooterWeb = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box
        sx={{ width: "100%", height: "15%" }}
        className="footerWebContainer"
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="footerWebContainer"
        >
          <Grid xs={6} className="footerWebContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "#BCBCBC",
                }}
              ></div>
              <div>
                <p style={{ color: "#FFF", marginLeft: "5px", fontSize: 14 }}>
                  Numero preseleccionado
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: "0px !important",
              }}
            >
		<BlockIcon className="iconButtonImageFooter" style={{color: '#FFF'}}/>
              <div>
                <p style={{ color: "#FFF", marginLeft: "5px", fontSize: 14 }}>
                  Numero Vendido
                </p>
              </div>
            </div>
	  </Grid>

          <Grid item xs={6} className="footerWebContainer">
            <div>2</div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default FooterWeb;
