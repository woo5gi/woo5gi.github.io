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
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import cloud from "assets/images/Cloud.jpg";

function Cloud() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={cloud}
              title="Cloud"
              description="Private & Public 및 Hybrid 클라우드 환경 구축 과 가상화 인프라 구축 서비스를 제공합니다."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={3}>
                <FilledInfoCard
                  variant="gradient"
                  color="info"
                  icon="flag"
                  title="하드웨어"
                  description="서버, 스토리지, 백업 및 네트워크 장비 등"
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                    label: "Let's start",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <FilledInfoCard
                  color="info"
                  icon="precision_manufacturing"
                  title="솔루션"
                  description="가상화 솔루션 및 통합 운영 시스템"
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                    label: "Read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <FilledInfoCard
                  color="info"
                  icon="apps"
                  title="유지보수 서비스"
                  description="다양한 전산장비와 시스템환경에 대하여 체계적으로 통합유지보수 서비스를 제공합니다."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                    label: "Read more",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Cloud;
