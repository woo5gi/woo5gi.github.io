// @mui material components
// import Icon from "@mui/material/Icon";
import BusinessIcon from "@mui/icons-material/Business";
import CreateIcon from "@mui/icons-material/Create";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Lab from "layouts/pages/landing-pages/lab";
import Bigdata from "layouts/pages/landing-pages/Bigdata";
import Infra from "layouts/pages/landing-pages/Infra";
import Security from "layouts/pages/landing-pages/Security";
import Meta from "layouts/pages/landing-pages/Meta";

const routes = [
  {
    name: "회사소개",
    icon: <BusinessIcon />,
    columns: 1,
    rowsPerColumn: 2,
    route: "/main",
    component: <AboutUs />,
  },
  {
    name: "사업분야",
    icon: <ShoppingBagIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "사업분야",
        collapse: [
          {
            name: "Bigdata & Ai",
            route: "/page/bigdata",
            component: <Bigdata />,
          },
          {
            name: "Infra",
            route: "/page/infra",
            component: <Infra />,
          },
          {
            name: "Security",
            route: "/page/security",
            component: <Security />,
          },
        ],
      },
    ],
  },
  {
    name: "연구소",
    icon: <CreateIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "연구소",
        collapse: [
          {
            name: "연구개발",
            route: "/page/lab",
            component: <Lab />,
          },
          {
            name: "MetaBayit.world",
            route: "/page/metabayit",
            component: <Meta />,
          },
        ],
      },
    ],
  },
];

export default routes;
