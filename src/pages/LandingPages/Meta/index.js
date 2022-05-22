// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import MetaBayitPlane from "pages/LandingPages/Meta/MetaBayitPlane";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import Meta from "assets/images/Metaverse.mp4";

import "./index.css";

// Images
// import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        // minHeight="75vh"
        width="100%"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div className="bg">
          <video src={Meta} muted autoPlay loop />
          <div className="text">
            <MKTypography variant="body2" color="white" opacity={0.8} mt={1} mb={3}>
              MetaBayit.world
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8} mt={1} mb={3}>
              새로운 세상, 경험, 그리고 문화
            </MKTypography>
          </div>
        </div>
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
        <MetaBayitPlane />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
