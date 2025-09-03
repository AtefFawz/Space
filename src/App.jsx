import "./App.css";
import Routs from "./routes/Routs";
import Navbar from "./navbar/Navbar";
function App() {
  return (
    <>
      <div className="max-h-screen ">
        <Navbar />
        <Routs />
      </div>
    </>
  );
}

export default App;
