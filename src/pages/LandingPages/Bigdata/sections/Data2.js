// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard2";

function Data2() {
  return (
    <MKBox component="section" py={12} bgColor="grey-200">
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
            데이터 작업 방식의 정의
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            데이터의 민감한 정보를 보호하면서 조직의 목적에 필요한 데이터 작업 방식을 정의한 통합
            분석 및 AI 활용을 지원합니다.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "primary", label: "house" }}
              title="파이프라인 및 모델을 구축"
              description="파이프라인 및 모델을 구축하기 위한 로우 코드 UI"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={6} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "info", label: "house" }}
              title="AI 및 MLOps"
              description="추가 기능으로서의 AI 및 MLOps"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Data2;
