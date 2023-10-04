import "./App.css";
import { filterData } from "./data";
import { apiUrl } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import AllCards from "./components/AllCards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const newData = await response.json();
      setCourses(newData.data);
    } catch (err) {
      toast.error('Error fetching');
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-slate-900">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-600">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            laoding ? (
              <Spinner />
            ) : (
              <AllCards courses={courses} category={category} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
