// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

function Databayit() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
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
            badgeContent="Databayit"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h5" fontWeight="bold">
            주식회사 데이타바이트 는?
          </MKTypography>
          <MKTypography variant="body2" color="text">
            데이타바이트(Data Bayit)의 Bayit는 히브리어로 집, 터전을 의미하여 지속적인 힘을 내기
            위한 원동력을 제공하는 장소입니다. 데이터 사이언스의 중요성이 높아지는 시대의 모든
            정보에 생명력을 불어넣어 가치를 창출하기 위한 종합 IT 정보 기술을 제공하며 데이터
            사이언스와 인공지능을 활용하여 운영상의 다향한 도전 과제를 해결합니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Databayit;
