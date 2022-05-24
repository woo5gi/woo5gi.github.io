// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import analytic from "assets/images/analytic-ability.png";

function Technology() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <MKBox bgColor="grey-200" py={5} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={6} ml="auto" maxWidth="1300px !important">
            <MKTypography variant="h4" mb={1}>
              전문가의 악성코드 분석 패턴 자동화 솔루션
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={3}>
              악성코드 분석 시 전문가가 이용 하는 근원적인 분석기법을 자동화하여 마치 전문 분석가가
              분석을 하듯 진행합니다. 특히, 상세 분석에 이용되는 여러 가지 고급 수동 분석 패턴을
              알고리즘화하여 행위 진단을 넘어선 정밀 진단 으로 오탐과 미탐을 최소화 하고 진단 시간을
              대폭 감소 시킵니다.
            </MKTypography>
          </Grid>
          <Grid item xs={12} xl={4} position="relative">
            <MKBox
              component="img"
              src={analytic}
              alt="image"
              maxWidth="18.75rem"
              width="100%"
              borderRadius="lg"
              shadow="xl"
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default Technology;
