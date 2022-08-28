import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

const sections = [
  { title: "Games", url: "/games" },
  { title: "Console", url: "/console" },
  { title: "E-sport", url: "/esport" },
  { title: "Lazy Talk", url: "/lazy-talk" },
  { title: "Tech News", url: "/tech-news" },
  { title: "Tech Tip", url: "/tech-tip" },
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="MaXNewS" sections={sections} />
          <Outlet />
        </Container>
        <Footer
          title="MaxNews"
          description="Portal Berita Tech and Game Terupdate"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
