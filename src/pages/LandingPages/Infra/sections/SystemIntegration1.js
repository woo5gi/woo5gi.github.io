// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// HelpCenter page components
import ListItem from "pages/LandingPages/Infra/sections/ListItem";

// Images
import systemIntegration from "assets/images/SystemIntegration.jpg";

function SystemIntegration() {
  return (
    <MKBox component="section" py={{ xs: 6, lg: 10 }}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={5}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h4">System Integration</MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={systemIntegration}
              title="System Infrastructure"
              description="고객의 구축 목적에 맞는 신규 시스템 및 개선을 위한 프로젝트 제안, 관리 및 운영 서비스를 제공합니다."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                // label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="아키텍처">신규 프로젝트의 시스템 아키텍처 구성</ListItem>
            <ListItem title="프로젝트">프로젝트 제안서 및 프로젝트 관리</ListItem>
            <ListItem title="품질관리">협업환경 구축 및 품질 관리</ListItem>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SystemIntegration;
