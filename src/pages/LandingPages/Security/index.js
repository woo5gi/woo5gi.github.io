// @mui material components
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

// Author page sections
import SecurityPage from "pages/LandingPages/Security/sections/SecurityPage";
import Technology from "pages/LandingPages/Security/sections/Technology";
import Feature from "pages/LandingPages/Security/sections/Feature";
import Features from "pages/LandingPages/Security/sections/Features";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

function Security() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://databayit.com/",
        //   label: "Metabayit",
        //   color: "info",
        // }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <SecurityPage />
          <Technology />
          <Feature />
          <Features />
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Security;
