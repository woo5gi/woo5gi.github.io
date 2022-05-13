// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

import Business from "assets/images/Business.jpg";
import Client from "assets/images/Client.jpg";
import Contact from "assets/images/Contact.jpg";
import Product from "assets/images/Product.jpg";

function Current() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <MKBox bgColor="grey-200" py={5} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={10} ml="auto">
            <MKTypography variant="h5" mb={1}>
              주요 현황
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              데이타바이트의 주요 현황입니다.
            </MKTypography>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={Business}
                    name="주요산업"
                    position={{ color: "info", label: "Business" }}
                    description="MLOps 설계 및 IT 인프라 구축, 컨설팅 서비스"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={5}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={Client}
                    name="주요고객"
                    position={{ color: "info", label: "Client" }}
                    description="제조, 금융, 통신, 서비스, 미디어, 공공, 건설 외"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={5}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={Product}
                    name="주요품목"
                    position={{ color: "info", label: "Product" }}
                    description="Server, Data Storage, Virtualization 및 Cloud"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={5}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalTeamCard
                    image={Contact}
                    name="연락처"
                    position={{ color: "info", label: "Contact" }}
                    description="02-6261-0601"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default Current;
