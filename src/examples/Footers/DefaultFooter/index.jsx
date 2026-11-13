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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox
      component="footer"
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ mb: 1 }}>
            <MKBox>
              <Link to={brand.route || "/presentation"}>
                <MKBox
                  sx={{ width: "3rem", mb: 2 }}
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  sx={{ mr: key === socials.length - 1 ? 0 : 2.5 }}
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid size={{ xs: 12, sm: 6, md: 2 }} key={title} sx={{ mb: 1, minWidth: 0 }}>
              <MKTypography
                sx={{ display: "block", mb: 1 }}

                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {title}
              </MKTypography>
              <MKBox component="ul" sx={[{ p: 0, m: 0 }, { listStyle: "none" }]}>
                {items.map(({ name, route, href }) => (
                  <MKBox
                    sx={{ p: 0, m: 0, mb: 0.75, lineHeight: 1.7, overflowWrap: "anywhere" }}
                    key={name}
                    component="li"
                  >
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : route ? (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography variant="button" fontWeight="regular" color="text">
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid
            size={{ xs: 12 }}
            sx={{
              pt: 3,
              mt: 1,
              borderTop: "1px solid",
              borderColor: "grey.200",
              textAlign: { xs: "left", md: "center" },
              wordBreak: "keep-all",
            }}
          >
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
