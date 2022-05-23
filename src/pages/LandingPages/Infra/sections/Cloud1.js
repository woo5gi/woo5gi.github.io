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
import cloud from "assets/images/Cloud.jpg";

function Cloud() {
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
          <MKTypography variant="h4">Cloud</MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={cloud}
              title="Cloud"
              description="Private & Public 및 Hybrid 클라우드 환경 구축 과 가상화 인프라 구축 서비스를 제공합니다."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                // label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="CSP">CSP (Cloud Service Provider) 선정</ListItem>
            <ListItem title="인프라 시스템">Hybrid 인프라 시스템 구축</ListItem>
            <ListItem title="가상화 시스템 구축">
              시가상화 시스템 구축 (VMware, HCI) 및 유지보수
            </ListItem>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Cloud;
