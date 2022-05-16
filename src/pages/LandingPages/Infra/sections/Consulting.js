// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKTypography from "components/MKTypography";

import consulting from "assets/images/Consulting.jpg";

function Consulting() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <MKTypography variant="h5" mb={1}>
          Consulting 분야
        </MKTypography>
        <br />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4}>
            <CenteredBlogCard
              image={consulting}
              title="Consulting"
              description="최적의 IT 시스템 구축을 위한 컨설팅 서비스를 제공합니다."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                // label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    // icon="public"
                    title="시스템 아키텍처"
                    description="시스템 아키텍처 설계 및 계획 수립"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    // icon="payments"
                    title="성능 분석 및 개선"
                    description="IT 시스템 성능 분석 및 개선 방안 제시"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    // icon="apps"
                    title="Cloud 인프라 아키텍처"
                    description="Cloud 인프라 아키텍처 설계"
                  />
                </MKBox>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    // icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Consulting;
