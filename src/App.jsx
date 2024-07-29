import "./App.css";
import { Navbar, Header } from "./components";
import { About, Skills, Projects, Blog, Footer, Contact } from "./containers";
function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <Navbar />
          <Header />
        </div>
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
