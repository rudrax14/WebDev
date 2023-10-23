import "./App.css";
import Page1 from "./components/Page1";
function App() {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col bg-slate-800 text-white text-3xl">
      <h1 className=" text-orange-400">Hello World</h1>
      <Page1 />
    </div>
  );
}

export default App;
