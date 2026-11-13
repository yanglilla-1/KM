import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "assets/theme";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

describe("React and Material UI upgrade", () => {
  it("renders default component props with the custom theme", () => {
    const html = renderToStaticMarkup(
      <ThemeProvider theme={theme}>
        <MKBox>
          <MKTypography>기본 텍스트</MKTypography>
          <MKButton>확인</MKButton>
        </MKBox>
      </ThemeProvider>
    );
    expect(html).toContain("기본 텍스트");
    expect(html).toContain("확인");
    expect(html).not.toContain("undefined");
  });

  it.each([
    "/presentation",
    "/pages/company/aboutUs",
    "/pages/company/FindUs",
    "/pages/company/author",
    "/tel",
  ])("renders %s without a React or theme crash", (route) => {
    const html = renderToStaticMarkup(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    expect(html).toContain("계명종합중기");
    expect(html).not.toContain("<p><p>");
  });
});
