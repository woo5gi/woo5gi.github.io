// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Target() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <MKBox bgColor="white" py={5} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={10} ml="auto">
            <MKTypography variant="h5" mb={1}>
              MLOps의 목표는?
            </MKTypography>
            <MKTypography variant="body2" color="text">
              모델 개발을 편리하게 하고 운영을 자동화하는 것에 초점
            </MKTypography>
            <br />
            <Grid item xs={12} lg={12}>
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={6}>
                  <MKBox mb={5}>
                    <DefaultInfoCard title="Development" description="손쉬운 모델 개발" />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={5}>
                    <DefaultInfoCard title="Operation" description="빠른 모델 운영 반영" />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={{ xs: 5, md: 0 }}>
                    <DefaultInfoCard
                      title="Automation"
                      description="모델 관리를 통한 예측 품질 향상"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={{ xs: 5, md: 0 }}>
                    <DefaultInfoCard
                      title="Improved platform"
                      description="자동화를 통한 인적 오류 최소화"
                    />
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default Target;
