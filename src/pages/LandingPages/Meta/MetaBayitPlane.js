// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ColoredBackgroundCard from "examples/Cards/ColoredBackgroundCard";

function MetaBayitPlane() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          textAlign="center"
          mx="auto"
          mb={3}
        >
          <MKTypography
            variant="body2"
            color="info"
            fontWeight="bold"
            textTransform="uppercase"
            textGradient
          >
            Our Work
          </MKTypography>
          <MKTypography variant="h4">MetaBayit.world 는?</MKTypography>
        </Grid>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              color="dark"
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg"
              // label="Productivity"
              title="Metaverse"
              description="메타버스 또는 확장 가상 세계는 가상, 초월을 의미하는 '메타'와 세계, 우주를 의미하는 '유니버스'를 합성한 신조어로 새로운 세상을 열어갑니다. 
              "
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/applications",
              //   label: "get started",
              // }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              color="dark"
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg"
              // label="Design"
              title="XR: eXtended Reality"
              description="확장현실(XR, eXtended Reality)은 가상현실(VR, Virtual Reality)과 증강현실(Augmented Reality), 혼합현실(MR, Mixed Reality) 기술을 아우르는 기술 및 서비스를 의미하여 새로운 경험을 제공합니다."
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/applications",
              //   label: "get started",
              // }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              color="dark"
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/umbrellas.jpg"
              // label="Support"
              title="Blockchain"
              description="블록체인(blockchain)은 분산 컴퓨팅 기술 기반의 데이터 위변조 방지 기술이다. 이로 인해 탈 중앙화의 새로운 문화를 제안합니다."
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/applications",
              //   label: "get started",
              // }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MetaBayitPlane;
