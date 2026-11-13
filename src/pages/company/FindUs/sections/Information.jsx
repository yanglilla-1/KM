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
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";

function Information() {
  return (
    <MKBox sx={{ py: { xs: 3, md: 6 } }} component="section">
      <Container>
        <Grid sx={{ alignItems: "center" }} container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <MKBox sx={{ overflow: "hidden" }} borderRadius="lg">
              <MKBox sx={{ p: { xs: 3, md: 5 }, textAlign: "center", bgcolor: "grey.100" }}>
                <MKTypography variant="h4" sx={{ mb: 2 }}>계명종합중기 위치 안내</MKTypography>
                <MKTypography variant="body2" sx={{ mb: 3 }}>경남 진주시 도동천로 276</MKTypography>
                <MKButton component="a" href="https://map.kakao.com/link/search/경남%20진주시%20도동천로%20276" target="_blank" rel="noopener noreferrer" color="info">
                  카카오맵에서 위치 보기
                </MKButton>
              </MKBox>
              <MKBox
                borderRadius="md"
                sx={[
                  { mt: 2, p: { xs: 2, md: 3 } },
                  {
                    backgroundColor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  },
                ]}
              >
                <MKTypography variant="h5" fontWeight="bold" gutterBottom>
                  찾아오시는 길 안내
                </MKTypography>

                <MKTypography variant="body2" color="text" fontWeight="medium">
                  경상남도 진주시에 위치해 있으며, 찾아오실 때 어려움이 있으시면 언제든 전화 주세요.
                </MKTypography>

                <MKBox sx={{ mt: 1.5 }}>
                  <MKTypography variant="button" color="dark" fontWeight="bold">
                    도로명
                  </MKTypography>
                  <MKTypography variant="body2" color="text" fontWeight="medium">
                    경남 진주시 도동천로 276, 상가동 3층 301호 (하대동, 현대아파트)
                  </MKTypography>
                </MKBox>

                <MKBox sx={{ mt: 0.75 }}>
                  <MKTypography variant="button" color="dark" fontWeight="bold">
                    우편번호 / 지번
                  </MKTypography>
                  <MKTypography variant="body2" color="text" fontWeight="medium">
                    (우) 52765, 경남 진주시 하대동 101, 상가동 3층 301호 (하대동, 현대아파트)
                  </MKTypography>
                </MKBox>

                <MKBox
                  sx={{
                    mt: 3,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  <MKButton
                    component={Link} // ✅ 리액트 라우터용 링크 버튼
                    to="/tel"
                    color="info"
                  >
                    전화하기
                  </MKButton>

                  <MKButton
                    variant="outlined"
                    color="dark"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "경남 진주시 도동천로 276 현대이파트 상가 3층 301호"
                      )
                    }
                  >
                    도로명주소 복사
                  </MKButton>
                  <MKButton
                    variant="outlined"
                    color="dark"
                    onClick={() => navigator.clipboard.writeText("경남 진주시 하대동 101")}
                  >
                    지번주소 복사
                  </MKButton>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

