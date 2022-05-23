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
import systemInfrastructure from "assets/images/SystemInfrastructure.jpg";

function ApplicationTwo() {
  return (
    <MKBox component="section" py={{ xs: 6, lg: 10 }} bgColor="grey-200">
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
          <MKTypography variant="h4">System Infrastructure</MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
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
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="하드웨어">서버, 스토리지, 백업 및 네트워크 장비 등</ListItem>
            <ListItem title="솔루션">가상화 솔루션 및 통합 운영 시스템</ListItem>
            <ListItem title="유지보수 서비스">시스템 환경에 대한 체계적인 통합유지보수</ListItem>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ApplicationTwo;
