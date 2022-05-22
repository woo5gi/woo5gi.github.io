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
              효과적이고 확장 가능한 데이터 아키텍처를 구축에 소요되는 시간과 비용을 절감합니다.
            </MKTypography>
            {/* <MKTypography
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
            </MKTypography> */}
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Grid item xs={12} sm={9} pl={2}>
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
                  Federated Analytics Platform을 사용하여 스마트 데이터로 의사결정을 지원하기 위한
                  고급 분석을 효과적으로 사용합니다.
                  <br />
                  빅데이터 분석 및 AI 모델 교육을 위한 최고의 성능을 갖춘 데이터 처리 플랫폼을
                  지원합니다.
                </MKTypography>
              </MKBox>
              <Grid item xs={12} sm={9} pl={2}>
                <MKTypography variant="h5">프로세스와 규정 관리</MKTypography>
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
                  조직의 프로세스와 규정에 따른 데이터를 처리합니다. 조직의 데이터 과학자가 해당
                  프로세스와 구정 관리 모델을 기반으로 기계학습 모델 구축을 지원합니다.
                </MKTypography>
              </MKBox>
              <Grid item xs={12} sm={9} pl={2}>
                <MKTypography variant="h5">복잡성과 비용의 최소화</MKTypography>
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
                  여러 환경의 데이터 분석 및 AI를 병렬 처리 기능으로 확장성을 극대화 합니다.
                  <br />
                  하이브 또는 스파크와 같은 데이터 웨어하우스 구조를 최적화하고 데이터 레이크에서
                  직접 쿼리를 실행합니다
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
