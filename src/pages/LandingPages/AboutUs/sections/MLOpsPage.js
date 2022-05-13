// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import Mlops from "assets/images/mlops.png";

function MLOpsPage() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 1 }}>
      <MKBox bgColor="grey-200" py={5} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={6} ml="auto">
            <MKTypography variant="h5" mb={1}>
              MLOps란 무엇인가?
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              MLOps는 단어 그대로 크게 모델을 개발하는 모델 개발(Model dev) 단계와 학습한 모델을
              활용하는 모델 운영(Model Ops) 단계가 있습니다. 모델 개발 단계에서는 데이터 수집 및
              전처리, 모델 구축 및 학습, 모델 평가 등이 있고 운영 단계에서는 생성한 모델을 배포하여
              예측을 하고 그 결과를 받아 모델 및 시스템 성능을 모니터링하여 필요 시 재학습하는
              단계가 있습니다. 사실 각 단계들은 명확히 구별되지 않고 유기적으로 연결되며 한번으로
              끝나는 것이 아니라 지속적으로 순환(cycle)되는 특징이 있습니다. 그리고 MLOps는 특정
              오픈소스 제품이나 서비스가 아닌 방법론에 가깝다고 생각합니다. MLOps의 방법을 따라
              기계학습 프로젝트에서 발생하는 문제점들을 최소화하고 비즈니스 가치 창출을 최대화하는
              것이 MLOps의 최종 목표라 할 수 있습니다.
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
