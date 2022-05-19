// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
import Logoimg from "assets/images/logo.png";

function Logohearder() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={Logoimg} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Logohearder;
