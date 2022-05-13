/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import HP from "assets/images/HP.png";
import DellServer from "assets/images/DellServer.png";
import xFusion from "assets/images/xFusion.png";
// import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Server
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={HP}
              title="HP"
              description="컴퓨팅 요구사항을 충족하고 데이터 센터 효율성을 개선하는 모든 규모의 비즈니스에 적합한 서버 입니다."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={DellServer}
              title="Dell Server"
              description="Dell Technologies 서버 제품군은 편리함과 안정적인 퍼포먼스를 보장하는 최적의 환경을 제공합니다."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CenteredBlogCard
              image={xFusion}
              title="xFusion"
              description="클라우드 서비스 인프라 등 대규모 시스템 구성에 적합한 서버입니다."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
