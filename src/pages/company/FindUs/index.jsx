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
import footerRoutes from "footer.routes";

// About Us page sections
import Information from "pages/company/FindUs/sections/Information";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
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
        transparent
        light
      />
      <MKBox
        sx={[
          { minHeight: "36vh", width: "100%", pb: 6 },
          {
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            height: "auto",
            pt: { xs: 14, md: 14 },
          },
        ]}
      >
        <Container>
          <Grid
            size={{ xs: 12, lg: 8 }}
            container

            sx={[
              { justifyContent: "center", alignItems: "center", flexDirection: "column" },
              { mx: "auto", textAlign: "center", mt: 0 },
            ]}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              찾아오시는길
            </MKTypography>
            <MKTypography sx={{ mt: 1, mb: 3 }} variant="body1" color="white" opacity={1}>
              찾기 어려우시면 전화주십시오!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: { xs: 0, md: 2 },
          mx: { xs: 2, lg: 3 },
          mt: { xs: -3, md: -5 },
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          // Fix map/container collapse on mobile by forcing a minimum height
          minHeight: { xs: 480, md: "auto" },
          overflow: "hidden",
        }}
      >
        <Information />
      </Card>
      <MKBox sx={{ pt: 6, px: 1, mt: 6 }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
