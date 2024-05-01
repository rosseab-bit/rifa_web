import "./FooterStyle.css";
import "../App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import iconBoca from "../static/img/iconBoca.png";
import BlockIcon from "@mui/icons-material/Block";

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
        <div
          className="footerWebContainer"
        >
          <div className="col1-footer">
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
              <BlockIcon
                className="iconButtonImageFooter"
                style={{ color: "#FFF" }}
              />
              <div>
                <p style={{ color: "#FFF", marginLeft: "5px", fontSize: 14 }}>
                  Numero Vendido
                </p>
              </div>
            </div>
          </div>

          <div className="col2-footer">
            <div>2</div>
          </div>
        </div>
    </>
  );
};
export default FooterWeb;
