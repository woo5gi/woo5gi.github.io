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
            의사 결정을 위한 AI
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            신뢰할 수 있는 빠른 데이터 처리를 위한 AI를 제공하여 더 나은 결정을 내릴 수 있게 합니다.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "primary", label: "house" }}
              title="1. "
              description="조직의 프로세스, 규정 준수 및 성능 요구사항을 충족한 AI 및 ML 어플리케이션 실행"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "info", label: "house" }}
              title="2. "
              description="연합 데이터 처리 엔진 (Federated Data Processing Engine) 활용"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              // category={{ color: "warning", label: "house" }}
              title="3. "
              description="주요 데이터 프레임워크와 통합 분석ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AI2;
