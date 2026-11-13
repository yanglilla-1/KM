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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/built_index.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox
      borderRadius="xl"

      sx={[
        { display: "flex", alignItems: "center", my: 2, py: 6 },
        {
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.65),
              rgba(gradients.dark.state, 0.65)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      ]}
    >
      <Container>
        <Grid container sx={{ flexDirection: "column", width: "100%", ml: 0, gap: 1 }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            믿을 수 있는 장비 파트너
          </MKTypography>
          <MKTypography sx={{ mb: 1 }} variant="h1" color="white">
            포크레인 중심 현장 운영
          </MKTypography>
          <MKTypography sx={{ mb: 2 }} variant="body1" color="white" opacity={0.9}>
            굴삭기, 바브캣, 덤프트럭 등 다양한 장비를 직접 보유하고 있으며
            <br />
            경남 전지역 및 거제, 거창, 고성, 김해, 남해, 밀양, 사천, 산청,
            <br />
            양산, 의령, 진주, 창녕, 창원, 통영, 하동, 함안, 함양, 합천 등
            <br />
            굴삭기 포크레인 중장비 임대 서비스를 제공합니다.
            <br />
            경남내 읍·면·동 현장에도 신속 대응이 가능합니다.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
