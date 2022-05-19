// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import "./index.css";

function Header({ label, title, description, cards, video }) {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          // backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          //   `${linearGradient(
          //     rgba(gradients.dark.main, 0.8),
          //     rgba(gradients.dark.state, 0.8)
          //   )}, url(${image})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* src="/video/Metaverse.mp4"  */}
        <div className="bg">
          <video src={video} muted autoPlay loop />
          <div className="text">
            <p>MetaBayit.world</p>
            <p>새로운 세상, 경험, 그리고 문화</p>
          </div>
        </div>

        {/* <video minHeight="75vh" width="100%" src={video} loop autoPlay muted /> */}
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            alignItems="flex-start"
            flexDirection="column"
            sx={{ px: { xs: 1, lg: 0 } }}
          >
            <MKTypography variant="h4" color="white">
              {label}
            </MKTypography>
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {description}
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
        <Grid container spacing={2}>
          {cards.map(({ variant, color, icon, title: cardTitle, description: cardDescription }) => (
            <Grid key={icon} item xs={12} sm={6} lg={4}>
              <FilledInfoCard
                variant={variant}
                color={color}
                icon={icon}
                title={cardTitle}
                description={cardDescription}
                action={{
                  type: "internal",
                  route: "/pages/company/about-us",
                  label: "More about us",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  // image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  video: PropTypes.string.isRequired,
};

export default Header;
