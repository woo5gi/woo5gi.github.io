// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Images
import analytic from "assets/images/analytic-ability.png";

function Technology() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={analytic}
              category={{ color: "primary", label: "house" }}
              title="전문가의 악성코드 분석 패턴 자동화 솔루션
              "
              description="악성코드 분석 시 전문가가 이용하는 근원적인 분석기법을 자동화하여 마치 전문 분석가가 분석을 하듯 진행합니다.
              특히, 상세 분석에 이용되는 여러 가지 고급 수동 분석 패턴을 알고리즘화하여행위 진단을 넘어선 정밀 진단으로 오탐과 미탐을 최소화하고 진단 시간을 대폭 감소시킵니다.
              "
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Technology;
