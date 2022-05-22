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
import MKTypography from "components/MKTypography";

// import Mlops from "assets/images/mlops.png";
// Images
import BoraImg from "assets/images/bora.png";

function Bora() {
  return (
    <MKBox component="section" py={{ xs: 0, md: 12 }} bgColor="white">
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <MKTypography variant="h4" mb={1}>
            주제별 학습 모델 훈련 및
          </MKTypography>
          <MKTypography variant="body2" color="text">
            조직의 보유/수집된 데이터에 대한 MLOps 적용에서 특정 분야에 특화된 주제별 모델을
            구성하여 기존 데이터 사일로 및 데이터 레이크에 대한 보다 정확한 추론 결과 도출을 위한
            환경 구축
          </MKTypography>
        </Grid>
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
