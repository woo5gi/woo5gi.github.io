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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Discover() {
  return (
    <MKBox component="section" py={12} bgColor="grey-200">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Discover
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              효과적이고 확장 가능한 데이터 아키텍처를 구축하는 데 소요되는 시간과 비용을
              절감합니다.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Grid item xs={12} sm={9}>
                <MKTypography variant="h5">성능 예측</MKTypography>
              </Grid>
              <MKBox display="flex" alignItems="center" p={2}>
                {/* <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">mediation</Icon>
                </MKBox> */}

                <MKTypography variant="body2" color="text" pl={2}>
                  Federated Analytics Platform 을 사용하면 스마트 데이터로 의사 결정을 지원하기 위해
                  고급 분석을 더 쉽게 배포할 수 있습니다.
                  <br />빅 데이터 분석 및 AI 모델 교육을 위해 최고의 성능을 갖춘 데이터 처리
                  플랫폼을 배포할 수 있습니다.
                </MKTypography>
              </MKBox>
              <Grid item xs={12} sm={9}>
                <MKTypography variant="h5">규정 준수 관리</MKTypography>
              </Grid>
              <MKBox display="flex" alignItems="center" p={2}>
                {/* <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">settings_overscan</Icon>
                </MKBox> */}
                <MKTypography variant="body2" color="text" pl={2}>
                  규정 준수를 이해합니다 . 귀하가 규칙을 정의하면 당사 플랫폼이 데이터 규정 준수를
                  처리합니다.
                  <br />
                  데이터 과학자가 규정 준수 모델을 기반으로 기계 학습 모델을 구축할 수 있도록
                  지원합니다.
                </MKTypography>
              </MKBox>
              <Grid item xs={12} sm={9}>
                <MKTypography variant="h5">복잡성과 비용을 줄입니다.</MKTypography>
              </Grid>
              <MKBox display="flex" alignItems="center" p={2}>
                {/* <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">token</Icon>
                </MKBox> */}
                <MKTypography variant="body2" color="text" pl={2}>
                  여러 환경에서 분석 및 AI를 확장하고 이러한 쿼리를 병렬로 실행하여 확장성을
                  극대화합니다.
                  <br />
                  하이브 또는 스파크와 같은 데이터 웨어하우스 구조를 최적화하고 데이터 레이크에서
                  직접 쿼리를 실행합니다.
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Discover;
