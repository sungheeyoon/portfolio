import "bootstrap/dist/css/bootstrap.min.css";
import NavigtionBar from "./Components/navbar";
import About from "./Components/about";
import Portfolio from "./Components/portfolio";
import Hello from "./Components/hello";
import Contact from "./Components/contact";
import GlobalStyle from "./styles/GlobalStyles";
function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
        rel="stylesheet"
      />

      <div className="App">
        <NavigtionBar />
        <Hello />
        <About />
        <Portfolio />
        <Contact />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
