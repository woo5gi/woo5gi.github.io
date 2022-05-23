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

function InfraPage() {
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
          <MKBadge variant="contained" color="info" badgeContent="Infra" container sx={{ mb: 2 }} />
          <MKTypography variant="h5" fontWeight="bold">
            Implement the Data-Driven Infrastructures
          </MKTypography>
          <MKTypography variant="body2" color="text">
            조직 인프라 구축에 필요한 종합 IT정보 기술을 제공하여 효율적인 시스템 구성과 운영
            지원으로 다양한 도전 과제를 해결합니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InfraPage;
