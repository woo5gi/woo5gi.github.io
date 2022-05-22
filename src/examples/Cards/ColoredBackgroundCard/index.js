// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function ColoredBackgroundCard({ color, image, label, title, description }) {
  return (
    <Card
      sx={({
        palette: { gradients },
        functions: { rgba, linearGradient },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.9),
          rgba(gradients[color] ? gradients[color].state : gradients.info.state, 0.9)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
        height: "100%",
        display: "grid",
        placeItems: "center",
      })}
    >
      <MKBox textAlign="center" p={3} my={12}>
        {label && (
          <MKTypography
            display="block"
            variant="caption"
            color={color === "light" ? "text" : "white"}
            textTransform="uppercase"
            opacity={0.8}
            fontWeight="bold"
            mb={2}
          >
            {label}
          </MKTypography>
        )}
        <MKTypography variant="h4" color={color === "light" ? "dark" : "white"}>
          {title}
        </MKTypography>
        <MKTypography
          variant="body2"
          color={color === "light" ? "text" : "white"}
          opacity={0.8}
          mb={3}
        >
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Setting default values for the props of ColoredBackgroundCard
ColoredBackgroundCard.defaultProps = {
  color: "info",
  label: "",
};

// Typechecking props for the ColoredBackgroundCard
ColoredBackgroundCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

export default ColoredBackgroundCard;
