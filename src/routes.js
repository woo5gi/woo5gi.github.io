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
import MetaBayit from "layouts/pages/landing-pages/MetaBayit";

const routes = [
  {
    name: "회사소개",
    icon: <BusinessIcon />,
    columns: 1,
    rowsPerColumn: 2,
    route: "/",
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
            route: "/Bigdata",
            component: <Bigdata />,
          },
          {
            name: "Infra",
            route: "/Infra",
            component: <Infra />,
          },
          {
            name: "Security",
            route: "/Security",
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
    route: "/Lab",
    collapse: [
      {
        name: "연구소",
        collapse: [
          {
            name: "연구개발",
            route: "/Lab",
            component: <Lab />,
          },
          {
            name: "MetaBayit.world",
            route: "/MetaBayit",
            component: <MetaBayit />,
          },
        ],
      },
    ],
  },
];

export default routes;
