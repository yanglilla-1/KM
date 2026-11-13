/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MKBox sx={{ maxHeight: "60vh", overflowY: "auto" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox sx={{ px: 2 }} key={item.name}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      sx={{ display: "block", py: 1, px: 0.5 }}

                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        component={el.route ? Link : el.href ? MuiLink : "span"}
                        to={el.route}
                        href={el.href}
                        target={el.href ? "_blank" : undefined}
                        rel={el.href ? "noreferrer" : undefined}

                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"

                        sx={[
                          { display: "flex", alignItems: "center", gap: 1, py: 1.5, px: 1.5, fontSize: "1.125rem" },
                          ({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                            borderRadius: borderRadius.md,
                            cursor: el.route || el.href ? "pointer" : "default",
                            transition: "all 300ms linear",

                            "&:hover":
                              el.route || el.href
                                ? {
                                    backgroundColor: grey[200],
                                    color: dark.main,
                                  }
                                : {},
                          }),
                        ]}
                      >
                        {el.icon}
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}

                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={[
                      { display: "block" },
                      ({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",
                        py: 1,
                        px: 1.625,

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: dark.main,

                          "& *": {
                            color: dark.main,
                          },
                        },
                      }),
                    ]}
                  >
                    <MKTypography
                      sx={{ display: "block" }}

                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={[{ display: "block" }, { transition: "all 300ms linear" }]}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox sx={{ width: "100%", my: 2 }}>{renderNavbarItems}</MKBox>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;


