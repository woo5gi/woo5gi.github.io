// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logoCT from "assets/images/logo-ct-dark.png";
import logoCT from "assets/images/favicon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Databayit",
    image: logoCT,
    route: "/",
  },
  socials: [],
  menus: [
    {
      name: "Call us now",
      items: [
        {
          name: "Office TEL.+ 82 2 6261 0601",
          href: "https://www.creative-tim.com/templates/premium",
        },
        {
          name: "‌Office FAX.+ 82 2 6951 1845",
          href: "https://www.creative-tim.com/templates/premium",
        },
      ],
    },
    {
      name: "Come visit us",
      items: [
        {
          name: "서울시 용산구 한강대로 366 트윈시티 남산 7층 04323 ",
          href: "https://iradesign.io/",
        },
      ],
    },
    {
      name: "Send a message",
      items: [
        { name: "영업 : aj.kwak@databayit.com", href: "https://www.creative-tim.com/contact-us" },
        {
          name: "기술 : kh.yoon@databayit.com",
          href: "https://www.creative-tim.com/knowledge-center",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Databayit
      </MKTypography>
      .
    </MKTypography>
  ),
};
