import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
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
  useEffect(() => {
    document.title = "계명종합중기 전화걸기";

    // 모바일 브라우저에서만 전화 앱 열기
    const isMobile = /iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent);
    let timerId;
    if (isMobile) {
      // 바로 전화 시도 후 3초 뒤 링크 이동
      window.location.href = TEL_URI;
      timerId = setTimeout(() => {
        window.location.href = LINKTREE;
      }, 3000);
    }
    return () => timerId && clearTimeout(timerId);
  }, []);

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
          <MKTypography
            component="a"
            href={TEL_URI}
            color="info"
            fontWeight="bold"
            sx={{
              display: "inline-block",
              fontSize: { xs: "1.75rem", sm: "2.5rem" },
              whiteSpace: "nowrap",
              mb: 2,
            }}
          >
            {PHONE_DISPLAY}
          </MKTypography>
          <MKTypography variant="body2" color="text" sx={{ mb: 3, wordBreak: "keep-all" }}>
            자동으로 전화 연결이 되지 않을 경우 아래 버튼을 눌러 주세요.
          </MKTypography>
          <MKBox
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1.5,
              justifyContent: "center",
            }}
          >
            <MKButton
              component="a"
              href={TEL_URI}
              variant="gradient"
              color="info"
              size="large"
              startIcon={<PhoneIcon />}
            >
              전화 걸기
            </MKButton>
            <MKButton
              component={Link}
              to="/presentation"
              variant="outlined"
              color="info"
              size="large"
              startIcon={<HomeIcon />}
            >
              홈페이지 열기
            </MKButton>
          </MKBox>
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
