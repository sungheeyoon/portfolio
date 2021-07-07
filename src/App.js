import "bootstrap/dist/css/bootstrap.min.css";
import NavigtionBar from "./Components/navbar";
import About from "./Components/about";
import Portfolio from "./Components/portfolio";
import Hello from "./Components/hello";
import Contact from "./Components/contact";
import GlobalStyle from "./styles/GlobalStyles";
function App() {
  return (
    <div className="App">
      <head>
        {" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />{" "}
      </head>

      <NavigtionBar />
      <Hello />
      <About />
      <Portfolio />
      <Contact />
      <GlobalStyle />
    </div>
  );
}

export default App;
