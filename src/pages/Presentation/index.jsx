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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import OfficePhone from "pages/Presentation/components/OfficePhone";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/banner.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/tel",
          label: "견적전화",
          color: "info",
        }}
        sticky
      />
      <MKBox
        sx={[
          {
            minHeight: { xs: "auto", md: "calc(90vh - 50px)" },
            width: "100%",
            pt: { xs: 18, md: 0 },
            pb: { xs: 12, md: 0 },
          },
          {
            backgroundImage: `linear-gradient(rgba(12, 24, 38, 0.38), rgba(12, 24, 38, 0.48)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          },
        ]}
      >
        <Container>
          <Grid
            sx={{
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "100%", lg: "58.333333%" },
              mx: "auto",
            }}
            container
          >
            <MKTypography
              variant="h1"
              color="white"

              sx={[
                { mt: { xs: 0, md: -6 }, mb: 2, textAlign: "center" },
                ({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                }),
              ]}
            >
              계명종합중기{" "}
            </MKTypography>
            <MKTypography
              sx={{ textAlign: "center", px: { xs: 0, lg: 7 }, mt: 1 }}
              variant="body1"
              color="white"
            >
              {"건설업무, 굴삭공사, 철거공사, 단가공사, 나대지정리, 등 임대문의"} <br />
              {"(굴삭기, 바브캣, 덤프트럭, 사다리차, 콤프레샤, 철근 절단기, 레이저 수평기)"}
            </MKTypography>
            <OfficePhone />
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: { xs: -4, md: -8 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <MKBox sx={{ my: { xs: 3, md: 10 } }} />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="call"
                title="전화"
                description={
                  <MKTypography color="" sx={{ opacity: 0.8, fontSize: "1.125rem" }}>
                    010-3848-0591
                  </MKTypography>
                }
                action={{
                  type: "internal",
                  route: "/tel",
                  label: "견적전화",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <FilledInfoCard
                color="dark"
                icon="info"
                title="회사"
                description={
                  <MKTypography color="text" sx={{ opacity: 1.0, fontSize: "1.125rem" }}>
                    장비 / 회사 소개
                  </MKTypography>
                }
                action={{
                  type: "external",
                  route: "/pages/company/aboutUs",
                  label: "페이지로 이동",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="map"
                title="위치"
                description={
                  <MKTypography color="" sx={{ opacity: 0.8, fontSize: "1.125rem" }}>
                    진주시 도동천로276 현대이파트 상가 3층 301호
                  </MKTypography>
                }
                action={{
                  type: "internal",
                  route: "/pages/company/FindUs",
                  label: "지도로 이동",
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <Testimonials />
        <Download />
      </Card>
      <MKBox sx={{ pt: 5, px: 1, mt: 5 }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
