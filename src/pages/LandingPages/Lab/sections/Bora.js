// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// import Mlops from "assets/images/mlops.png";

function Bora() {
  return (
    <MKBox component="section" py={{ xs: 6, lg: 12 }} bgColor="grey-200">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              콘텐츠 매니저
            </MKTypography>
            <MKTypography variant="body1" color="text" pl={2}>
              ✘ 개인이 수집한 웹 링크나 보유한 PDF 파일 등 소장하고 있는 데이터에 대한 키워드와 요약
              정보를 제공
            </MKTypography>
            <MKTypography variant="body1" color="text" pl={2}>
              ✘ 이로부터 일정 시간이 흐른 뒤 축적된 다량의 자료의 빠른 확인이 필요할 때 수월하게
              데이터 확인 및 활용 보조
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Grid item xs={12} sm={9} pl={2}>
                <MKTypography variant="h5">데이터 요약 및 다중 문서 정리</MKTypography>
              </Grid>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  ✔ 사용자가 수집한 데이터(웹 링크, PDF 문서 등)를 기반으로 요약 데이터를 제공
                  <br /> → 사용자가 원문을 직접 확인하지 않고도 그 정보에 대해 쉽게 접근 가능
                </MKTypography>
              </MKBox>
              <Grid item xs={12} sm={9} pl={2}>
                <MKTypography variant="h5">데이터 미리보기</MKTypography>
              </Grid>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  ✔ 스크롤 다운과 같은 효과를 적용한 데이터 미리보기 제공
                  <br />
                  → 원본을 확인하지 않고도 대략적인 이미지로 데이터 확인 가능
                  <br />
                  ✔ 세부 내용의 확인이 필요한 경우, <br />
                  별도의 설치 없이 본문 내용을 확인할 수 있는 뷰어(viewer) 제공 또는 원본 페이지
                  연결
                </MKTypography>
              </MKBox>
              <Grid item xs={12} sm={9} pl={2}>
                <MKTypography variant="h5">키워드 추출 및 사용자 히스토리 분석</MKTypography>
              </Grid>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  ✔ 사용자가 보유 중인 데이터의 종류와 키워드를 미리 제공함으로써, 자신의 키워드를
                  평소에 인지 가능
                  <br />
                  ✔ 검색어가 떠오르지 않거나 잊고 있던 키워드를 미리 상기시켜 줌으로써 , 좀 더
                  효율적이고 원활한 검색 환경 제공
                  <br />
                  ✔ 사용자가 보유하고 있지 않은 관련 자료들을 추천해주는 시스템을 마련
                  <br /> → 동일 카테고리에서 미처 확인하지 못한 자료 검색 지원
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Bora;
