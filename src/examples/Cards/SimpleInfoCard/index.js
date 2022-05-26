// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function SimpleInfoCard({
  // color, icon,
  title,
  description,
  direction,
}) {
  let alignment = "flex-start";

  if (direction === "center") {
    alignment = "center";
  } else if (direction === "right") {
    alignment = "flex-end";
  }

  return (
    <MKBox
      display="flex"
      flexDirection="column"
      alignItems={alignment}
      textAlign={direction}
      p={direction === "center" ? 2 : 0}
      lineHeight={1}
    >
      {/* <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3rem"
        height="3rem"
        borderRadius="xl"
        variant="gradient"
        color="white"
        bgColor={color}
        coloredShadow={color}
      >
        {typeof icon === "string" ? <Icon fontSize="small">{icon}</Icon> : icon}
      </MKBox> */}
      <MKTypography display="block" variant="5" fontWeight="bold" mt={1.8} mb={1}>
        {title}
      </MKTypography>
      <MKTypography display="block" variant="body2" color="text">
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the SimpleInfoCard
SimpleInfoCard.defaultProps = {
  // color: "info",
  direction: "left",
};

// Typechecking props for the SimpleInfoCard
SimpleInfoCard.propTypes = {
  // color: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "info",
  //   "success",
  //   "warning",
  //   "error",
  //   "light",
  //   "dark",
  // ]),
  // icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
};

export default SimpleInfoCard;
