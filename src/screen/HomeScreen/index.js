import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const sections = [
  { title: "Games", url: "/games" },
  { title: "Console", url: "#" },
  { title: "E-sport", url: "#" },
  { title: "Lazy Talk", url: "#" },
  { title: "Tech News", url: "#" },
  { title: "Tech Tip", url: "#" },
];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function HomeScreen() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MaXNewS" sections={sections} />
        <Outlet />
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
