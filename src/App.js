import "bootstrap/dist/css/bootstrap.min.css";
import NavigtionBar from "./Components/navbar";
import About from "./Components/about";
import Resume from "./Components/resume";
import Portfolio from "./Components/portfolio";
import Hello from "./Components/hello";
import Contact from "./Components/contact";
function App() {
  return (
    <div className="App">
      <NavigtionBar />
      <Hello />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
