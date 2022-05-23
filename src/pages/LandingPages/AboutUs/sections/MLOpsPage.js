// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import Mlops from "assets/images/mlops.png";

function MLOpsPage() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <MKBox bgColor="grey-200" py={5} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={6} ml="auto" maxWidth="1300px !important">
            <MKTypography variant="h5" mb={1}>
              MLOps: ML&DL Model Development and Operation
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              MLOps는 ML&DL 모델 적용을 위한 모델 개발 및 학습 단계와 추론 및 예측을 모델 운영 단계
              전반에 대한 생애주기 관리의 표준화 및 간소화 이론입니다. 데이터 수집 및 전처리, 모델
              구축 및 학습, 모델 평가 이후 준비된 모델을 운영 단계에 배포하여 추론 및 예측에
              활용하고, 다시 그 결과를 확인하여 시스템 성능을 모니터링 후 필요에 따른 재학습을
              진행합니다. 이러한 여러 모델 개발과 상용 환경 배포는 많은 조직에 새로운 업무에
              속합니다. 하지만 많은 의존성과, 여러 언어를 사용하는 이해 관계자, 때로는 소프트웨어
              개발에 대한 이해가 부족한 데이터 과학자 등 모델 생애주기를 관리하기 어려운 이유들이
              있습니다. MLOps는 DevOps의 개념에서 많은 부분을 차용하여 팀 간 협업과 의사소통을
              강화하여 모델의 생애주기에 대한 지속적인 개발, 테스트, 배포를 지원합니다.
            </MKTypography>
          </Grid>
          <Grid item xs={12} xl={4} position="relative">
            <MKBox
              component="img"
              src={Mlops}
              alt="image"
              maxWidth="18.75rem"
              width="100%"
              borderRadius="lg"
              shadow="xl"
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default MLOpsPage;
