import Button from "@mui/material/Button";
import LocalPhoneRounded from "@mui/icons-material/LocalPhoneRounded";

export default function OfficePhone() {
  return (
    <Button
      component="a"
      href="tel:0557571087"
      aria-label="계명종합중기 사무실 055-757-1087 전화하기"
      startIcon={<LocalPhoneRounded />}
      sx={{
        mt: 2.5,
        px: { xs: 2, sm: 3 },
        py: 1.5,
        minHeight: 56,
        maxWidth: "100%",
        borderRadius: 3,
        backgroundColor: "#fff",
        color: "#1463c7",
        border: "1px solid #d8e7fa",
        boxShadow: "0 4px 16px rgba(20, 63, 110, 0.12)",
        fontSize: { xs: "1.4rem", sm: "1.6rem" },
        fontWeight: 800,
        lineHeight: 1.3,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        textTransform: "none",
        "& .MuiButton-startIcon > *": { fontSize: "1.5rem" },
        "&:hover": { backgroundColor: "#edf5ff", color: "#104c9a" },
        "&:focus-visible": { outline: "3px solid #2185f5", outlineOffset: 4 },
      }}
    >
      055-757-1087
    </Button>
  );
}
