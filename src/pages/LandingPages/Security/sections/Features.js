// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images

function Features() {
  return (
    <MKBox component="section" py={{ xs: 6, lg: 12 }} bgColor="grey-200">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={12} sx={{ textAlign: "center", my: 1, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h4" mb={1}>
              알려지지 않은 새로운 패턴까지 감지하고 차단하는 것, 바로 기술의 차이입니다.
            </MKTypography>
            <MKTypography variant="body2" mb={2}>
              핵심 리버스 엔지니어링 기술을 통해 Exploit을 진단함으로써 악성코드를 효과적으로 탐지
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={atlassian} alt="atlassian" width="12%" />}
              title="고도화된 APT 공격 형태"
              description="가상회피기술 탐지 및 차단"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={asana} alt="asana" width="12%" />}
              title="Non-Pe(비실행형)"
              description="파일 전문 진단 분석 엔진 탑재"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={shopify} alt="shopify" width="12%" />}
              title="전문 악성코드 분석"
              description="전문가의 분석기법 자동화"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={invision} alt="invision" width="12%" />}
              title="멀티 분석 엔지 지원"
              description="(시그니처 기반 및 평판 분석)"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={slack} alt="slack" width="12%" />}
              title="어셈블리 코드 레벨 분석으로 
              빠른 진단 속도"
              description="(기존 APT 솔루션대비 5배 이상 빠른 진단속도)"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={webdev} alt="webdev" width="12%" />}
              title="CVC코드 기반 진단 수행"
              description="악성코드 분석결과 CVC코드로 취약점 기반 분석 정보 제공"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={webdev} alt="webdev" width="12%" />}
              title="행위진단을 넘어선 정밀진단으로 오탐과 미탐 최소화"
              description="(상세분석 이용되는 고급 수동분석 기법을 알고리즘화)"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={webdev} alt="webdev" width="12%" />}
              title="최다 진단 엔진 알고리즘"
              description="최다 진단 엔진 알고리즘을 통해(Unknown)제로데이 공격 최소화"
              small
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} mb={3}>
            <DefaultInfoCard
              // icon={<MKBox component="img" src={webdev} alt="webdev" width="12%" />}
              title="독자적인 진단방법"
              description="독자적인 진단방법으로 진단 회피 기술 무해화"
              small
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Features;
