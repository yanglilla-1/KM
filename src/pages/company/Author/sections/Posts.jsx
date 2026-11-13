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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/naver.jpg";
import post2 from "assets/images/km.jpg";

function Places() {
  return (
    <MKBox sx={{ py: 0 }} component="section">
      <Container>
        <Grid container sx={{ width: "100%" }}>
          <MKTypography sx={{ mb: 5 }} variant="h1">
            견적문의
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TransparentBlogCard
              image={post1}
              title="네이버 지도(플레이스)로 이동"
              description={
                <>
                  <MKTypography variant="body2" fontWeight="bold" color="text">
                    네이버 예약으로 이용 가능합니다.
                  </MKTypography>
                </>
              }
              action={{
                type: "external",
                route: "https://naver.me/GwpTrrVK",
                color: "info",
                label: "이동하기",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
            <TransparentBlogCard
              image={post2}
              title="전화걸기"
              description={
                <MKTypography variant="body2" fontWeight="bold" color="text">
                  누르시면 바로 전화연결 가능하십니다.
                </MKTypography>
              }
              action={{
                type: "internal",
                route: "/tel",
                color: "info",
                label: "이동하기",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
