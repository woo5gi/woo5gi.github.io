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
import StorageHP from "assets/images/StorageHP.png";
import StorageDelEMC from "assets/images/StorageDelEMC.png";
import StorageNetApp from "assets/images/StorageNetApp.png";
import StorageSDS from "assets/images/StorageSDS.png";
// import post4 from "assets/images/examples/blog2.jpg";

function DataStorage() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Data Storage
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={StorageHP}
              title="HP"
              description="비정형 데이터를 위한 대용량 및 Cloud Native 스토리지를 제공합니다."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={StorageDelEMC}
              title="DellEMC"
              description="자동화, 데이터 단순화 및 통합, 생산성 및 확장성 개선, IT 인프라 간소화"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={StorageNetApp}
              title="NetApp"
              description="클라우드에 최적화된 고객 신뢰도 1위의 유니파이드 스토리지 플랫폼"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={StorageSDS}
              title="Software Defined Storage"
              description="원하는 스토리지 환경을 구성할 수 있는 대용량 소프트웨어 정의 스토리지"
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

export default DataStorage;
