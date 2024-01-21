import Language from "./Language";
import Projects from "./Projects";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Language position="relative" />
      <Navbar />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
    </div>
  );
}

export default App;
