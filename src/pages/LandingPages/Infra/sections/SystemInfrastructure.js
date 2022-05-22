// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKTypography from "components/MKTypography";

import systemInfrastructure from "assets/images/SystemInfrastructure.jpg";

function SystemInfrastructure() {
  return (
    <MKBox component="section" py={12} bgColor="grey-200">
      <Container>
        <MKTypography variant="h5" mb={1}>
          System Infrastructure
        </MKTypography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    // icon="public"
                    title="하드웨어"
                    description="서버, 스토리지, 백업 및 네트워크 장비 등"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    // icon="payments"
                    title="솔루션"
                    description="가상화 솔루션 및 통합 운영 시스템"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    // icon="apps"
                    title="유지보수 서비스"
                    description="시스템 환경에 대한 체계적인 통합유지보수"
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
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={systemInfrastructure}
              title="System Infrastructure"
              description="고객의 요구사항에 맞는 최적의 하드웨어와 솔루션을 제안하고 구축에서부터 유지보수 서비스까지 종합 서비스를 제공합니다."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                // label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SystemInfrastructure;
