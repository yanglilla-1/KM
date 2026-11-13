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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

// Author page sections

import Posts from "pages/company/Author/sections/Posts";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/Support.jpg";

function Author() {
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
      <MKBox bgColor="white">
        <MKBox
          sx={[
            { minHeight: { xs: "15rem", md: "24rem" }, width: "100%" },
            {
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            },
          ]}
        />
        <Card
          sx={{
            p: 0,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 10,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox sx={{ pt: { xs: 4, md: 6 } }} />
          <Posts />
        </Card>
      </MKBox>
      <MKBox sx={{ pt: 6, px: 1, mt: 6 }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Author;
