/*
=========================================================
* Material Kit 2 React - AboutUs (Custom)
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import info1 from "assets/images/info/info1.jpg";
import info2 from "assets/images/info/info2.jpg";
import info3 from "assets/images/info/info3.jpg";
import info4 from "assets/images/info/info4.jpg";
import info5 from "assets/images/info/info5.jpg";
import info6 from "assets/images/info/info6.jpg";
import info7 from "assets/images/info/info7.jpg";
import info8 from "assets/images/info/info8.jpg";
import info9 from "assets/images/info/info9.jpg";

function AboutUs() {
  const gallery = [info1, info2, info3, info4, info5, info6, info7, info8, info9];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  return (
    <MKBox sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* 상단 네비 */}
      <MKBox sx={{ position: "fixed", top: "0.5rem", width: "100%", zIndex: 10 }}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/tel",
            label: "견적전화",
            color: "info",
          }}
        />
      </MKBox>

      {/* 본문 */}
      <MKBox
        component="section"

        sx={[{ pt: 14, pb: 8, px: { xs: 2, md: 4 } }, { backgroundColor: "background.default" }]}
      >
        {/* 회사소개 카드 */}
        <MKBox
          borderRadius="xl"
          sx={[
            { p: { xs: 2.5, md: 4 } },
            {
              backgroundColor: "background.paper",
              color: "text.primary",
              boxShadow: "lg",
              border: "1px solid rgba(0,0,0,0.05)",
              maxWidth: 1200,
              mx: "auto",
              position: "relative",
              zIndex: 2,
            },
          ]}
        >
          <Grid sx={{ alignItems: "center" }} container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <MKTypography variant="h3" fontWeight="bold" gutterBottom color="dark">
                계명종합중기
              </MKTypography>

              <MKTypography sx={{ mb: 1 }} variant="h6" color="dark">
                진주·사천·의령 중심, <b>경남 전지역</b> 굴삭기/중장비 작업
              </MKTypography>

              <Stack direction="row" spacing={1} useFlexGap sx={[{ flexWrap: "wrap" }, { my: 1 }]}>
                {["진주", "사천", "의령", "하동", "함안", "산청", "경남 전지역"].map((t) => (
                  <Chip key={t} label={t} sx={{ fontSize: "1rem", height: 36 }} />
                ))}
              </Stack>

              <MKTypography
                variant="body1"
                fontWeight="regular"

                sx={[
                  { mb: 2 },
                  {
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "text.secondary",
                    wordBreak: "keep-all",
                  },
                ]}
              >
                <br />
                중장비 전문 업체 <b>계명종합중기</b>. <br />
                굴삭기·바브캣·덤프트럭 등 다양한 장비를 직접 보유하고, 현장 맞춤형 장비 투입으로
                책임감 있는 작업을 약속드립니다. <br />
                믿을 수 있는 장비 파트너로서, 젊고 유능한 기사가 직접 현장을 책임지고 진주를
                중심으로 맞춤형 중장비 서비스를 제공합니다. <br />
                굴삭기부터 각종 중장비 대여까지, 대표가 직접 운영하며 책임감 있는 현장 대응을
                실현하는 <b>계명종합중기</b>입니다. <br /> <br />
              </MKTypography>

              <MKTypography variant="button" color="dark" fontWeight="bold">
                보유 장비 · 작업
              </MKTypography>
              <MKBox
                component="ul"
                sx={[
                  { pl: 3, m: 0 },
                  { fontSize: "1.125rem", lineHeight: 1.9, color: "text.secondary" },
                ]}
              >
                <li>포크레인 (06W / 03W), 미니포크레인, 굴삭기</li>
                <li>덤프 보유 · 각종 폐기물 처리 가능</li>
                <li>크라샤, 공육 등 현장 맞춤 작업</li>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>

        {/* 갤러리 */}
        <MKBox sx={{ maxWidth: 1200, mx: "auto", mt: 3 }}>
          <MKTypography sx={{ mb: 1.5 }} variant="h5" fontWeight="bold">
            작업 현장 &amp; 보유 장비
          </MKTypography>
          <Grid container spacing={2}>
            {gallery.map((src, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={src}>
                <MKBox
                  borderRadius="lg"
                  sx={[
                    { position: "relative" },
                    {
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                      cursor: "zoom-in",
                      "&:hover img": { transform: "scale(1.06)" },
                      height: { xs: 200, sm: 200, md: 300 }, // bigger fixed height
                    },
                  ]}
                >
                  <MKBox
                    component="img"
                    src={src}
                    alt={`장비 사진 ${i + 1}`}

                    sx={[
                      { width: "100%", height: "100%" },
                      {
                        objectFit: "cover",
                        transition: "transform .35s ease",
                        display: "block",
                      },
                    ]}
                    onError={(e) => {
                      e.currentTarget.style.background = "#f0f2f5";
                      e.currentTarget.src =
                        "data:image/svg+xml;charset=UTF-8," +
                        encodeURIComponent(
                          '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect width="100%" height="100%" fill="#f0f2f5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#99a1a8" font-family="Arial" font-size="14">/public/images 에 이미지를 넣어주세요</text></svg>'
                        );
                    }}
                    onClick={() => {
                      setLightboxSrc(src);
                      setLightboxAlt(`장비 사진 ${i + 1}`);
                      setLightboxOpen(true);
                    }}
                  />
                  <MKBox
                    sx={[
                      { position: "absolute", bottom: 0, left: 0, width: "100%", py: 0.5, px: 1 },
                      {
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
                      },
                    ]}
                  >
                    <MKTypography
                      variant="caption"
                      color="white"
                      fontWeight="bold"
                      sx={{ textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}
                    >
                      장비/현장 {i + 1}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </MKBox>

        <Dialog
          maxWidth="xl"
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          fullWidth

          keepMounted
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            },
          }}
        >
          <MKBox sx={[{ position: "relative" }, { width: "100%" }]}>
            <IconButton
              aria-label="close"
              onClick={() => setLightboxOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                "&:hover": { background: "rgba(0,0,0,0.8)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={lightboxSrc || undefined}
              alt={lightboxAlt}
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "90vw",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                borderRadius: 8,
                boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
              }}
            />
          </MKBox>
        </Dialog>
      </MKBox>

      {/* 푸터 */}
      <MKBox sx={{ pt: 6, px: 1, mt: 2 }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

export default AboutUs;
