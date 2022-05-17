// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SimpleInfoCard from "examples/Cards/SimpleInfoCard";

function Target() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <MKBox bgColor="white" py={5} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            mx="auto"
            textAlign="center"
            pb={6}
          >
            <MKTypography variant="h5" mb={1}>
              우리의 목표는?
            </MKTypography>
            <MKTypography variant="body2" color="text">
              모델 개발을 편리하게 하고, 운영을 자동화 하는 것에 초점을 맞추고 있습니다. 모델 개발을
              편리하게 하고
            </MKTypography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <SimpleInfoCard
                color="primary"
                icon="person"
                title="Development"
                description="손쉬운 모델 개발"
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <SimpleInfoCard
                icon="support_agent"
                title="Operation"
                description="빠른 모델 운영 반영"
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <SimpleInfoCard
                color="warning"
                icon="update"
                title="Automation"
                description="T모델 관리를 통한 예측 품질 향상"
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <SimpleInfoCard
                color="warning"
                icon="update"
                title="Improved platform"
                description="T자동화를 통한 인적 오류 최소화"
                direction="center"
              />
            </Grid>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default Target;
