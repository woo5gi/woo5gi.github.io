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
          href: "https://www.databayit.com/",
        },
        {
          name: "‌Office FAX.+ 82 2 6951 1845",
          href: "https://www.databayit.com/",
        },
      ],
    },
    {
      name: "Come visit us",
      items: [
        {
          name: "서울시 용산구 한강대로 366",
          href: "https://www.databayit.com/",
        },
        {
          name: "트윈시티 남산 7층 04323 ",
          href: "https://www.databayit.com/",
        },
      ],
    },
    {
      name: "Send a message",
      items: [
        { name: "영업 : aj.kwak@databayit.com", href: "https://www.databayit.com/" },
        {
          name: "기술 : kh.yoon@databayit.com",
          href: "https://www.databayit.com/",
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
