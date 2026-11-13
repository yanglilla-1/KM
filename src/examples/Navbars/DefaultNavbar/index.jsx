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

import { Fragment, useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Kit 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";
import companyLogo from "assets/images/logo_km.png";

function DefaultNavbar({
  brand = "계명종합중기",
  routes,
  transparent = false,
  light = false,
  action = false,
  sticky = false,
  relative = false,
  center = false,
}) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid sx={{ py: 1, px: 1.5 }} key={name} container spacing={3}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid size={{ xs: 12 / columns }} key={gridKey} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <MKTypography
                      sx={{ display: "block", py: 1, px: 0.5, mt: index !== 0 ? 2 : 0 }}

                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {col.name}
                    </MKTypography>
                    {col.collapse.map((item) => (
                      <MKTypography
                        key={item.name}
                        component={item.route ? Link : item.href ? MuiLink : "span"}
                        to={item.route}
                        href={item.href}
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noreferrer" : undefined}

                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"

                        sx={[
                          { minWidth: "11.25rem", display: "flex", alignItems: "center", gap: 1, py: 0.625, px: 2 },
                          ({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                            borderRadius: borderRadius.md,
                            cursor: item.route || item.href ? "pointer" : "default",
                            transition: "all 300ms linear",

                            "&:hover":
                              item.route || item.href
                                ? {
                                    backgroundColor: grey[200],
                                    color: dark.main,
                                  }
                                : {},
                          }),
                        ]}
                      >
                        {item.icon}
                        {item.name}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <MKTypography
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}

            variant="button"
            textTransform="capitalize"

            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}

            sx={[
              {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: item.description ? "14rem" : "12rem",
                py: item.description ? 1 : 0.625,
                px: 2,
              },
              ({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                borderRadius: borderRadius.md,
                cursor: "pointer",
                transition: "all 300ms linear",

                "&:hover": {
                  backgroundColor: grey[200],
                  color: dark.main,

                  "& *": {
                    color: dark.main,
                  },
                },
              }),
            ]}
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <MKBox>
                {item.name}
                <MKTypography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={[{ display: "block" }, { transition: "all 300ms linear" }]}
                >
                  {item.description}
                </MKTypography>
              </MKBox>
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                sx={[
                  { fontSize: "small" },
                  { fontWeight: "normal", verticalAlign: "middle", mr: -0.5 },
                ]}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </MKTypography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox borderRadius="lg">
            <MKTypography variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <MKBox sx={{ p: 2, mt: 2 }} shadow="lg" borderRadius="lg">
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: "_blank",
                  rel: "noreferrer",
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <MKTypography
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}

                    variant="button"
                    textTransform="capitalize"

                    color={item.description ? "dark" : "text"}
                    fontWeight={item.description ? "bold" : "regular"}

                    sx={[
                      {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minWidth: item.description ? "14rem" : "12rem",
                        py: item.description ? 1 : 0.625,
                        px: 2,
                      },
                      ({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",

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
                    {item.description ? (
                      <MKBox>
                        {item.icon}
                        {item.name}
                        <MKTypography
                          variant="button"
                          color="text"
                          fontWeight="regular"
                          sx={[{ display: "block" }, { transition: "all 300ms linear" }]}
                        >
                          {item.description}
                        </MKTypography>
                      </MKBox>
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        sx={[
                          { fontSize: "small" },
                          { fontWeight: "normal", verticalAlign: "middle", mr: -0.5 },
                        ]}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </MKTypography>
                );
              });
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox sx={{ ml: 2.5, mt: -2.5 }} borderRadius="lg">
            <MKBox sx={{ py: 1.5, px: 1, mt: 2 }} shadow="lg" borderRadius="lg">
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}

        sx={[
          {
            py: 1,
            px: { xs: 1.5, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 },
            my: relative ? 0 : 2,
            mx: relative ? 0 : { xs: 1, sm: 3 },
            width: relative ? "100%" : { xs: "calc(100% - 16px)", sm: "calc(100% - 48px)" },
            position: relative ? "relative" : "absolute",
            left: 0,
            zIndex: 3,
          },
          ({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
            backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          }),
        ]}
      >
        <MKBox
          sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <MKBox
            sx={{
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              py: transparent ? 1.5 : 0.75,
              pl: relative || transparent ? 0 : { xs: 0, lg: 1 },
            }}
            component={Link}
            to="/"

            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          >
            <MKTypography
              variant="button"
              fontWeight="bold"
              sx={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 1 }}
              color={light ? "white" : "dark"}
            >
              <MKBox
                component="img"
                src={companyLogo}
                alt=""
                width={32}
                height={32}
                sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 }, objectFit: "contain", flexShrink: 0 }}
              />
              {brand}
            </MKTypography>
          </MKBox>
          <MKBox
            sx={{ display: { xs: "none", lg: "flex" }, ml: "auto", mr: center ? "auto" : 0 }}
            color="inherit"
          >
            {renderNavbarItems}
          </MKBox>
          <MKBox sx={{ ml: { xs: "auto", lg: 0 } }}>
            {action &&
              (action.type === "internal" ? (
                <MKButton
                  component={Link}
                  to={action.route}
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="medium"
                  sx={{ px: { xs: 1, sm: 1.5 }, gap: 0.5, minHeight: 48, fontSize: "1.125rem", whiteSpace: "nowrap" }}
                >
                  {action.label === "견적전화" && (
                    <PhoneIcon aria-hidden="true" sx={{ fontSize: "20px !important", color: "inherit", flexShrink: 0 }} />
                  )}
                  {action.label}
                </MKButton>
              ) : (
                <MKButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="medium"
                  sx={{ px: { xs: 1, sm: 1.5 }, gap: 0.5, minHeight: 48, fontSize: "1.125rem", whiteSpace: "nowrap" }}
                >
                  {action.label === "견적전화" && (
                    <PhoneIcon aria-hidden="true" sx={{ fontSize: "20px !important", color: "inherit", flexShrink: 0 }} />
                  )}
                  {action.label}
                </MKButton>
              ))}
          </MKBox>
          <IconButton
            aria-label={mobileNavbar ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={Boolean(mobileNavbar)}
            onClick={openMobileNavbar}
            sx={{
              display: { xs: "inline-flex", lg: "none" },
              width: 48,
              height: 48,
              flexShrink: 0,
              color: light ? "#ffffff !important" : "#344767 !important",
            }}
          >
            <Icon sx={{ fontSize: 28, color: light ? "#ffffff !important" : "#344767 !important" }}>{mobileNavbar ? "close" : "menu"}</Icon>
          </IconButton>
        </MKBox>
        <MKBox
          sx={{ px: transparent ? 2 : 0 }}
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;




