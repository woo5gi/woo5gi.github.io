import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultBlogCard({ image, category, title, description, raised, action }) {
  const imageTemplate = (
    <>
      <MKBox
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={
          raised
            ? {
                backgroundImage: `url(${image})`,
                transform: "scale(0.94)",
                filter: "blur(12px)",
                backgroundSize: "cover",
              }
            : {}
        }
      />
    </>
  );

  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={raised ? -3 : 2}>
        {action.type === "internal" ? (
          <Link to={action.route}>{imageTemplate}</Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            {imageTemplate}
          </MuiLink>
        )}
      </MKBox>
      <MKBox p={3}>
        {category && (
          <MKTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
            sx={{ display: "block" }}
          >
            {category.label}
          </MKTypography>
        )}
        {action.type === "internal" ? (
          <Link to={action.route}>
            <MKTypography
              variant="h5"
              textTransform="capitalize"
              my={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MKTypography
              variant="h5"
              textTransform="capitalize"
              mt={2}
              mb={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <MKTypography variant="body2" component="p" color="text">
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  raised: true,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  raised: PropTypes.bool,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
