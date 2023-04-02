//import './App.css';
import "./style.scss"
import Navbar from './Component/Navbar'
import Cards from './Component/Cards';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Marque from "./Component/Marque";



function App() {
  return (
    <div className="app">
      
      <Navbar />
      <Header />
      <Cards />
      <Marque />
      <Footer />
    </div>
  );
}

export default App;
