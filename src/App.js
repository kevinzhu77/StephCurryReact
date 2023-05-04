import './App.css';
import Header from "./components/Header"
import Summary from "./components/Summary"
import Achivements from "./components/Achivements"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      	<Header />
      	<Summary />
      	<Achivements />
		    <Highlights />
        <Footer />
    </div>
  );
}

export default App;
