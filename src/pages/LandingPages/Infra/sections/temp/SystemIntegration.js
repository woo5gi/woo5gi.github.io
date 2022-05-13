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

import systemIntegration from "assets/images/SystemIntegration.jpg";

function SystemIntegration() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={systemIntegration}
              title="System Integration"
              description="고객의 구축 목적에 맞는 신규 시스템 및 개선을 위한 프로젝트 제안, 관리 및 운영 서비스를 제공합니다."
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
                    title="신규 프로젝트의 시스템 아키텍처 구성"
                    // description="신규 프로젝트의 시스템 아키텍처 구성"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="프로젝트 제안서 및 프로젝트 관리"
                    // description="프로젝트 제안서 및 프로젝트 관리"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="협업환경 구축 및 품질 관리"
                    // description="협업환경 구축 및 품질 관리"
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

export default SystemIntegration;
