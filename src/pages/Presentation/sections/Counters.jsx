/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// 🔧 상단 import 추가!
import MKTypography from "components/MKTypography";

function Counters() {
  return (
    <MKBox sx={{ py: 3 }} component="section">
      <Container>
        <Grid container spacing={3}>
          {/* 진주 중심 소개 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <MKTypography sx={{ textAlign: "center" }} variant="h3" color="info">
              굴삭기/포크레인, 중장비 임대
            </MKTypography>
            <MKTypography sx={{ textAlign: "center" }} variant="h5">
              진주·사천·의령·하동·함안 등 경남 전지역 <br></br>
              굴삭기/포크레인 및 중장비 임대 전문 업체
            </MKTypography>
          </Grid>

          {/* 포크레인 주력 소개 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <MKTypography sx={{ textAlign: "center" }} variant="h3" color="info">
              계명종합중기
            </MKTypography>
            <MKTypography sx={{ textAlign: "center" }} variant="h5">
              계명종합중기만의 현장 맞춤형 장비 투입
            </MKTypography>
          </Grid>

          {/* 젊은 기사 강조 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <MKTypography sx={{ textAlign: "center" }} variant="h3" color="info">
              젊고 유능한 기사
            </MKTypography>
            <MKTypography sx={{ textAlign: "center" }} variant="h5">
              대표 직접 운영 경험과 책임감으로 현장 대응
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
