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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

function Security() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Security"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h5" fontWeight="bold">
            Power the Data-Driven Securities
          </MKTypography>
          <MKTypography variant="body2" color="text">
            시큐레터의 차세대 APT솔루션을 활용하여 기존 솔루션에서 접근하기 어려운 Assembly 언어
            레벨로 리버스 엔지니어링을 진행하여 패킹, 인코딩, 난독화 되어 있는 악성코드를 해체,
            분석합니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Security;
