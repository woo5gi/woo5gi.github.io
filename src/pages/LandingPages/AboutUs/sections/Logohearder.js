// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
import Logoimg from "assets/images/logo.png";

function Logohearder() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -10 }} textAlign="center">
            <MKAvatar src={Logoimg} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Logohearder;
