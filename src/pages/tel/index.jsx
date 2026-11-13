import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import km1 from "assets/images/km1.jpg";

const PHONE_DISPLAY = "010-3848-0591";
const TEL_URI = "tel:01038480591";
const LINKTREE = "https://www.kmheavy.kr";

export default function TelPage() {
  const [isMobile] = useState(
    () => typeof navigator !== "undefined" && /iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent)
  );
  useEffect(() => {
    document.title = "계명종합중기 전화걸기";

    // 모바일 브라우저에서만 전화 앱 열기

    let timerId;
    if (isMobile) {
      // 바로 전화 시도 후 3초 뒤 링크 이동
      window.location.href = TEL_URI;
      timerId = setTimeout(() => {
        window.location.href = LINKTREE;
      }, 3000);
    }
    return () => timerId && clearTimeout(timerId);
  }, [isMobile]);

  return (
    <MKBox
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <MKBox sx={{ position: "absolute", top: 8, width: "100%", zIndex: 10 }}>
        <DefaultNavbar
          routes={routes}
          action={{ type: "internal", route: "/tel", label: "견적전화", color: "info" }}
        />
      </MKBox>
      <Container component="main" maxWidth="md" sx={{ pt: { xs: 14, md: 18 }, pb: 8, flex: 1 }}>
        <Card sx={{ p: { xs: 3, md: 5 }, textAlign: "center", borderRadius: 3 }}>
          <MKTypography variant="h3" component="h1" sx={{ mb: 2 }}>
            견적전화
          </MKTypography>
          <MKTypography variant="body1" color="text" sx={{ mb: 3 }}>
            계명종합중기 장비 임대 및 작업 문의
          </MKTypography>
          <MKBox sx={{ display: "grid", gap: 2, width: "100%", maxWidth: 360, mx: "auto", mb: 3 }}>
            {[
              { label: "견적전화 · 휴대폰", number: PHONE_DISPLAY, href: TEL_URI },
              { label: "사무실 전화", number: "055-757-1087", href: "tel:0557571087" },
            ].map(({ label, number, href }) => (
              <MKButton
                key={href}
                component="a"
                href={href}
                variant="outlined"
                color="info"
                aria-label={`${label} ${number} 전화하기`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.75,
                  px: 1.5,
                  py: 2,
                  borderRadius: 3,
                  backgroundColor: "#edf5ff",
                  borderColor: "#c9dfff",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#dcecff", borderColor: "#2185f5" },
                  "&:focus-visible": { outline: "3px solid #2185f5", outlineOffset: 3 },
                }}
              >
                <MKTypography component="span" variant="body2" color="text">
                  {label}
                </MKTypography>
                <MKBox component="span" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: "1.35rem" }} />
                  <MKTypography
                    component="span"
                    color="info"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1.35rem", sm: "1.8rem" }, whiteSpace: "nowrap" }}
                  >
                    {number}
                  </MKTypography>
                </MKBox>
              </MKButton>
            ))}
          </MKBox>
          <MKTypography variant="body2" color="text" sx={{ mb: 3, wordBreak: "keep-all" }}>
            <MKBox component="span" sx={{ display: { xs: "inline", md: "none" } }}>
              자동으로 전화 연결이 되지 않을 경우 위 버튼을 눌러 주세요.
            </MKBox>
            <MKBox component="span" sx={{ display: { xs: "none", md: "inline" } }}>
              컴퓨터 사용자는 직접 전화 부탁드립니다.
            </MKBox>
          </MKTypography>
          <MKBox
            component="a"
            href={LINKTREE}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "block", mt: 4 }}
          >
            <MKBox
              component="img"
              src={km1}
              alt="계명종합중기 로고"
              borderRadius="lg"
              sx={{ display: "block", width: "100%", height: "auto", boxShadow: "md" }}
            />
          </MKBox>
        </Card>
      </Container>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  );
}
