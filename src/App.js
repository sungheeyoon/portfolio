import "bootstrap/dist/css/bootstrap.min.css";
import NavigtionBar from "./Components/navbar";
import About from "./Components/about";
import Portfolio from "./Components/portfolio";
import Hello from "./Components/hello";
import Contact from "./Components/contact";
function App() {
  return (
    <div className="App">
      <NavigtionBar />
      <Hello />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
