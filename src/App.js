import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/Project';
import Contact from './Page/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
       <Header />
       <Home />

       <About />

       <Project />

       <Contact />

       <Footer />
    </div>
  );
}

export default App;
