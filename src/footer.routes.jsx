// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo_km.png";

export default {
  brand: {
    name: "계명종합중기",
    image: logoCT,
    route: "/presentation",
  },
  socials: [],
  menus: [
    {
      name: "대표자명",
      items: [{ name: "성성현" }],
    },
    {
      name: "전화번호",
      items: [
        { name: "010-3848-0591", route: "/tel" },
        { name: "055-757-1087", route: "/tel" },
      ],
    },
    {
      name: "사업자번호",
      items: [{ name: "7081800400" }],
    },
    {
      name: "오픈소스 이용안내",
      items: [
        { name: "이용 약관", href: "https://www.creative-tim.com/terms" },
        { name: "개인정보 처리방침", href: "https://www.creative-tim.com/privacy" },
        { name: "라이선스 (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      © {new Date().getFullYear()} 계명종합중기 | 오픈소스 기반: Material Kit by {""}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
    </MKTypography>
  ),
};
