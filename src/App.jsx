import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Landing1 from "./Pages/Landing1";
import Landing2 from "./Pages/Landing2";
import Footer from "./Footer";
import Cards from "./Cards";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // (async function () {
    //   const token = localStorage.getItem("token");
    //   await axios.get("http://localhost:8080/protected", {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    // });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />

      <Landing1 />
      <br />
      <Landing2 />
      <br />
      <br />
      <br />
      <br />
      <Cards />
      {/* <Form/> */}
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
