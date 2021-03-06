// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function AI() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <Stack>
              {/* <Grid item xs={12} sm={9}>
                <MKTypography variant="h5">성능 예측</MKTypography>
              </Grid> */}
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  ✘ 조직의 프로세스, 규정 준수 및 성능 요구사항을 충족한 AI 및 ML 어플리케이션 실행
                </MKTypography>
              </MKBox>
              {/* <Grid item xs={12} sm={9}>
                <MKTypography variant="h5">규정 준수 관리</MKTypography>
              </Grid> */}
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  ✘ 연합 데이터 처리 엔진 (Federated Data Processing Engine) 활용
                </MKTypography>
              </MKBox>
              {/* <Grid item xs={12} sm={9}>
                <MKTypography variant="h5">복잡성과 비용을 줄입니다.</MKTypography>
              </Grid> */}
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  ✘ 주요 데이터 프레임워크와 통합 분석
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <MKTypography variant="h3" my={1}>
              의사 결정을 위한 AI
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              신뢰할 수 있는 빠른 데이터 처리를 위한 AI를 제공하여 더 나은 결정을 내릴 수 있게
              합니다.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AI;
