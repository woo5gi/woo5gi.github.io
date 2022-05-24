// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import BoraWeb from "assets/images/boraweb.png";

function Testimonials() {
  return (
    <MKBox component="section" position="relative" py={{ xs: 6, lg: 12 }}>
      <Container sx={{ maxWidth: "100% !important" }}>
        <Grid container item xs={10} sx={{ mx: "auto" }}>
          <MKBox variant="gradient" bgColor="secondary" borderRadius="lg" width="100%" py={6}>
            <Grid container>
              <Grid item xs={12} md={6} xl={4} sx={{ position: "relative", px: 6 }}>
                <MKBox
                  component="img"
                  src={BoraWeb}
                  alt="image"
                  borderRadius="md"
                  maxWidth="300px"
                  width="100%"
                  position="relative"
                  mt={-12}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                xl={6}
                sx={{
                  position: "relative",
                  px: { xs: 6, md: 2 },
                  mt: { xs: 3, md: 0 },
                  my: { xs: 0, md: "auto" },
                  color: ({ palette: { white } }) => white.main,
                }}
              >
                <Icon fontSize="large">format_quote</Icon>
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="light"
                  mb={2}
                  sx={{ fontSize: "1.35rem" }}
                >
                  조직에서 보유/수집한 문서 뿐만 아니라 웹 링크에 대한 키워드와 관련 토픽 추출, 요약
                  정보를 제공함으로써 일정 시간이 지난 후 다시 자료를 확인하고 싶거나 많은 양의
                  데이터에서 원하는 정보의 빠른 확인 필요할 때 수월하게 데이터를 확인하고 활용할 수
                  있는 컨텐츠 매니저 입니다.
                </MKTypography>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
