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
import consulting from "assets/images/Consulting.jpg";

function Consulting() {
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
          <MKTypography variant="h4">Consulting</MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
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
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="시스템 아키텍처">시스템 아키텍처 설계 및 계획 수립</ListItem>
            <ListItem title="성능 분석 및 개선">IT 시스템 성능 분석 및 개선 방안 제시</ListItem>
            <ListItem title="Cloud 인프라 아키텍처">Cloud 인프라 아키텍처 설계</ListItem>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Consulting;
