import "bootstrap/dist/css/bootstrap.min.css";
import NavigtionBar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Resume from "./Components/resume";
import Portfolio from "./Components/portfolio";
function App() {
  return (
    <div className="App">
      <NavigtionBar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
