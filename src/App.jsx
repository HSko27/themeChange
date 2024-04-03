import Cards from "./Cards";
import Carousel from "./Carousel";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <NavBar />

      <div className="mt-24" style={{ background: theme === "dark" ? "#1e293b" : "#e2e8f0", color: theme === "dark" ? "white" : "#020617" }}>
        <Carousel />
        <Cards/>
      </div>
      <Footer />
    </>
  );
}

export default App;
