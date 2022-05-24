// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard2";

function AI2() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <MKTypography variant="h4" my={1}>
            우리의 목표는?
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            모델 개발을 편리하게 하고, 운영을 자동화 하는 것에 초점을 맞추고 있습니다.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "primary", label: "house" }}
              title="Development"
              description="손쉬운 모델 개발"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={3} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "info", label: "house" }}
              title="Operation"
              description="빠른 모델 운영 반영"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={3} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "warning", label: "house" }}
              title="Automation"
              description="모델 관리를 통한 예측 품질 향상"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={3} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "warning", label: "house" }}
              title="Improved platform"
              description="자동화를 통한 인적 오류 최소화"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AI2;
