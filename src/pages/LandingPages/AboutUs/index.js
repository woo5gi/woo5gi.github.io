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
import Target1 from "pages/LandingPages/AboutUs/sections/Target1";
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
              성공적인 MLOps 설계와 운영 지원
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8} mt={1} mb={3}>
              데이터 사이언스 프로젝트를 수행하여 조직과 비지니스 리더들이 장기적 가치를 창출하고
              데이터 사이언스, 머신러닝 및 AI를 주도를 위한 고객의 성공적인 MLOps(Machin Learning
              Operation, 머신런닝 운영) 설계를 지원합니다.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
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
        <Target1 />
        <Current />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
