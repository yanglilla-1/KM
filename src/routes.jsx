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

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

import Icon from "@mui/material/Icon";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SvgIcon from "@mui/material/SvgIcon";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const socialIconStyle = { fontSize: "22px !important", flexShrink: 0 };

const routes = [
  {
    name: "정보",
    icon: <Icon>info</Icon>,
    columns: 1,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "회사정보",
        collapse: [
          {
            name: "회사정보",
            icon: <BusinessIcon aria-hidden="true" sx={{ ...socialIconStyle, color: "#344767" }} />,
            route: "/pages/company/aboutUs",
          },
          {
            name: "찾아오시는길",
            icon: (
              <LocationOnIcon aria-hidden="true" sx={{ ...socialIconStyle, color: "#1a73e8" }} />
            ),
            route: "/pages/company/FindUs",
          },
          {
            name: "견적문의",
            icon: (
              <SupportAgentIcon aria-hidden="true" sx={{ ...socialIconStyle, color: "#2e7d32" }} />
            ),
            route: "/pages/company/author",
          },
        ],
      },
    ],
  },
  {
    name: "SNS",
    icon: <Icon>apps</Icon>,
    columns: 1,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "SNS (사이트로 바로 연결됩니다)",
        collapse: [
          {
            name: "블로그 바로가기",
            icon: (
              <Icon aria-hidden="true" sx={{ color: "#03a94d", fontSize: "22px !important" }}>
                article
              </Icon>
            ),
            href: "https://blog.naver.com/olo3848059l",
            target: "_blank",
          },
          {
            name: "인스타 바로가기",
            icon: (
              <InstagramIcon aria-hidden="true" sx={{ ...socialIconStyle, color: "#c13584" }} />
            ),
            href: "https://www.instagram.com/barbourket_tv/",
            target: "_blank",
          },
          {
            name: "스레드 바로가기",
            icon: (
              <AlternateEmailIcon
                aria-hidden="true"
                sx={{ ...socialIconStyle, color: "#181818" }}
              />
            ),
            href: "https://www.threads.com/@barbourket_tv",
            target: "_blank",
          },
          {
            name: "유튜브 (공사중)",
            icon: <YouTubeIcon aria-hidden="true" sx={{ ...socialIconStyle, color: "#ff0000" }} />,
          },
          {
            name: "카카오톡 바로가기",
            icon: (
              <SvgIcon aria-hidden="true" viewBox="0 0 24 24" sx={socialIconStyle}>
                <rect width="24" height="24" rx="5" fill="#FEE500" />
                <path
                  d="M12 4.5c-5 0-9 3.1-9 7 0 2.5 1.7 4.7 4.3 5.9l-.9 3.2 3.8-2.2c.6.1 1.2.1 1.8.1 5 0 9-3.1 9-7s-4-7-9-7Z"
                  fill="#3C1E1E"
                />
                <text
                  x="12"
                  y="13.5"
                  textAnchor="middle"
                  fill="#FEE500"
                  fontFamily="Arial, sans-serif"
                  fontWeight="800"
                  fontSize="6.2"
                  letterSpacing="-.3"
                >
                  TALK
                </text>
              </SvgIcon>
            ),
            href: "https://pf.kakao.com/_dsixjxj",
            target: "_blank",
          },
        ],
      },
    ],
  },
];

export default routes;
