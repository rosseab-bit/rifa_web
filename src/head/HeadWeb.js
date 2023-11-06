import '../App.css';
import { useContext, useState } from 'react';
import Grid from "@mui/material/Grid";


const HeadWeb = () => {
  return (
    <>
    <header className="backgroundHead">
      <Grid
          container
          rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid xs={6} style={{backgroundColor: 'rgba(0, 99, 255, 0.6)', borderRadius: 10}}>
            
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: "0px !important",
              }}
            >
              <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', jstifyContent: 'center'}}>
                <p style={{ color: "#FFF", marginLeft: "5px", fontSize: 14, marginTop: 30 }}>
                 Ayudanos a viajar a Rio 
                </p>
              </div>
            </div>
	  </Grid>

          <Grid item xs={6} style={{backgroundColor: 'rgba(0, 99, 255, 0.6)', borderRadius: 10}}>
	    <div>
                <p style={{ color: "#FFF", marginLeft: "5px", fontSize: 14, marginLeft: 50 }}>
                1x $1000 
                </p>
                <p style={{ color: "#FFF", marginLeft: "5px", fontSize: 14, marginLeft: 50 }}>
                2x $1500 
                </p>
	    </div>
          </Grid>
        </Grid>

    </header>
    </>
  );
}
export default HeadWeb;
