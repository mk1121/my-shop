import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Carossel from "./components/Carossel/Carossel";
import Shop from "./components/Shop/Shop";

function App() {
  return (

    <div className="App">
    <Header/>
    <Carossel/>
    <Shop/>
    </div>
  );
}

export default App;
