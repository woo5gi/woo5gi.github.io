// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Current from "pages/LandingPages/AboutUs/sections/Current";
import Databayit from "pages/LandingPages/AboutUs/sections/Databayit";
import Logohearder from "pages/LandingPages/AboutUs/sections/Logohearder";
import Target from "pages/LandingPages/AboutUs/sections/Target";
import MLOpsPage from "pages/LandingPages/AboutUs/sections/MLOpsPage";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://databayit.com/",
        //   label: "Metabayit",
        //   color: "default",
        // }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h4"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              ???????????? MLOps ????????? ?????? ??????
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1} mb={3}>
              ????????? ???????????? ??????????????? ???????????? ????????? ???????????? ???????????? ????????? ????????? ????????????
              ????????? ????????????, ???????????? ??? AI ????????? ?????? ????????? ???????????? MLOps(Machin Learning
              Operation, ???????????? ??????) ????????? ???????????????.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        maxWidth="1130px !important"
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Logohearder />
        <Databayit />
        <MLOpsPage />
        <Target />
        <Current />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
