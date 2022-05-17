/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://databayit.com/
* Copyright 2021 Databayit (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// import Mlops from "assets/images/mlops.png";
// Images
import BoraImg from "assets/images/bora.png";

function Bora() {
  return (
    <MKBox component="section" py={12} bgColor="white">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} xl={12} position="relative">
            <MKBox
              component="img"
              src={BoraImg}
              alt="image"
              maxWidth="90%"
              width="100%"
              borderRadius="lg"
              shadow="xl"
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Bora;
