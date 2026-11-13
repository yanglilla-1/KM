import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MKBox sx={{ py: 5 }} component="section" id="work-share">
      <Container>
        <Grid
          size={{ xs: 12, lg: 6 }}
          container

          sx={[{ justifyContent: "center" }, { mx: "auto", textAlign: "center" }]}
        >
          <MKBox sx={{ textAlign: "center", mb: 0.1 }}>
            <MKTypography sx={{ mb: 1 }} variant="h3" fontWeight="bold" color="dark">
              작업 과정 공유
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 0, mb: 10 }}>
          <Grid size={{ xs: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CsXAC5PSHLO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                data-instgrm-version="14"
                style={{ maxWidth: "320px", minWidth: "280px", width: "100%" }}
              ></blockquote>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CsaHrwNr2KV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                data-instgrm-version="14"
                style={{ maxWidth: "320px", minWidth: "280px", width: "100%" }}
              ></blockquote>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CtAZzfMy9Fp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                data-instgrm-version="14"
                style={{ maxWidth: "320px", minWidth: "280px", width: "100%" }}
              ></blockquote>
            </div>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;


