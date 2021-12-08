import "./App.css";
import Navbar from "./components/header/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import { Header } from "./components/header";
// import hdrBdy from './components/body/hdrBdy';

function App() {
  return (
    <>
      <div className="bg">
        <Header />

        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
