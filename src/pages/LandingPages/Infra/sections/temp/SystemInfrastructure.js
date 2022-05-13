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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import systemInfrastructure from "assets/images/SystemInfrastructure.jpg";

function SystemInfrastructure() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={systemInfrastructure}
              title="System Infrastructure"
              description="고객의 요구사항에 맞는 최적의 하드웨어와 솔루션을 제안하고 구축에서부터 유지보수 서비스까지 종합 서비스를 제공합니다."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="하드웨어"
                    description="서버, 스토리지, 백업 및 네트워크 장비 등"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="솔루션 "
                    description="가상화 솔루션 및 통합 운영 시스템"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="유지보수 서비스"
                    description="다양한 전산장비와 시스템환경에 대하여 체계적으로 통합유지보수 서비스를 제공합니다."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SystemInfrastructure;
