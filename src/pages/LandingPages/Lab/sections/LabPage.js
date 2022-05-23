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
          <MKBadge variant="contained" color="info" badgeContent="Lab" container sx={{ mb: 2 }} />
          <MKTypography variant="h5" fontWeight="bold">
            연구소
          </MKTypography>
          <MKTypography variant="body2" color="text">
            데이타바이트의 연구 분야 입니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LabPage;
