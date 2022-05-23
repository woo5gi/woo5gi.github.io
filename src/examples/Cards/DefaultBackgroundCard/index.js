// react-router-dom components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function DefaultBackgroundCard({ image, title, description }) {
  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { black },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(black.main, 0.5),
          rgba(black.main, 0.5)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
      })}
    >
      <MKBox textAlign="center" pt={12} pb={3} px={3}>
        <MKTypography variant="h3" color="white" pb={5}>
          {title}
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Setting default values for the props of DefaultBackgroundCard

// Typechecking props for the DefaultBackgroundCard
DefaultBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

export default DefaultBackgroundCard;
