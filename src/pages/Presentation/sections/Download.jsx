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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Images
import bgImage from "assets/images/km.jpg";

function Download() {
  return (
    <MKBox sx={{ py: { xs: 0, sm: 1 } }} component="section">
      <MKBox borderRadius="xl" sx={[{ position: "relative" }, { overflow: "hidden" }]}>
        <Container sx={{ py: { xs: 8, md: 5 }, display: "flex", justifyContent: "center" }}>
          <MKBox
            component="img"
            src={bgImage}
            alt="main-banner"
            sx={{ width: "100%", maxWidth: "1000px", borderRadius: "xl" }}
          />
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
