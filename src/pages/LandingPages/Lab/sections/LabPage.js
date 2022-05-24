// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

function LabPage() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="secondary"
            badgeContent="Lab"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h4" fontWeight="bold">
            딥러닝 기반 컨텐츠 관리
          </MKTypography>
          <MKTypography variant="body1" color="text">
            자연어 처리 엔진(Natural Language Processing Engine)을 기술의 컨텐츠 요약 및 토픽
            모델링을 활용한 조직내 컨텐츠를 효율적으로 관리 합니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LabPage;
