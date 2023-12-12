import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./components/context/MovieContextProvider";

function App() {
  return (
    <div className=" bg-slate-900 h-auto">
      <MovieContextProvider>
        <Navbar />
        <Main />
      </MovieContextProvider>
    </div>
  );
}

export default App;
