// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import SimplePricingCard from "examples/Cards/SimplePricingCard";

function Feature() {
  return (
    <MKBox component="section" py={{ xs: 6, lg: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={12} sx={{ textAlign: "center", my: 1, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h4" mb={1}>
              주요 기능
            </MKTypography>
            <MKTypography variant="body1" mb={2} color="text">
              SLE/SLF 확장자 변조 및 대용량 파일검사, 실행파일 차단, 정확한 CVE 코드 표시 기능을
              지원
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              color="dark"
              title="확장자 변조 탐지, 차단"
              // description="Free access for 2 members"
              // price={{ value: "$199", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={["위/변조를 사전에 탐지하여 악성코드를 탐지 및 차단"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              color="dark"
              title="수동검사 및 대용량파일 지원"
              // description="Free access for 200 members"
              // price={{ value: "$299", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={[
                "관리자 및 사용자는 의심스러운 파일을 수동으로 업로드하여 악성코드 감염 여부 확인",
                "검사파일 사이즈 설정 가능 (용량 크기 제한 Limit 해제 가능)",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              // variant="gradient"
              color="dark"
              title="실행파일 차단"
              // description="Free access for 200 members"
              // price={{ value: "$499", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={[
                "실행파일 차단 기능 제공",
                "단, 관리자가 허용한 파일 또는 디지털 서명된 실행파일만 릴리스 가능",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              color="dark"
              title="CVE 코드 기반 진단"
              // description="Free access for all members"
              // price={{ value: "$899", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={["파일의 Exlpoit(취약점) 분석 후 정확한 CVE코드를 표시"]}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Feature;
