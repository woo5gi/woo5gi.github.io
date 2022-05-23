// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import SimplePricingCard from "examples/Cards/SimplePricingCard";

function Feature() {
  return (
    <MKBox component="section" py={{ xs: 0, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={12} sx={{ textAlign: "center", my: 1, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h4" mb={1}>
              System Infrastructure
            </MKTypography>
            <MKTypography variant="body2" mb={2}>
              고객의 요구사항에 맞는 최적의 하드웨어와 솔루션을 제안하고 구축에서부터 유지보수
              서비스까지 종합 서비스를 제공합니다.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={6} lg={4}>
            <SimplePricingCard
              color="dark"
              title="하드웨어"
              // description="Free access for 2 members"
              // price={{ value: "$199", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={["서버, 스토리지, 백업 및 네트워크 장비 등"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <SimplePricingCard
              color="dark"
              title="솔루션"
              // description="Free access for 200 members"
              // price={{ value: "$299", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={["가상화 솔루션 및 통합 운영 시스템"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <SimplePricingCard
              // variant="gradient"
              color="dark"
              title="유지보수 서비스"
              // description="Free access for 200 members"
              // price={{ value: "$499", type: "year" }}
              // action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={["시스템 환경에 대한 체계적인 통합유지보수"]}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Feature;
