import { useEffect, useState } from "react";
import "./App.css";
import Practice from "./Practice";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const apiurl = "https://dummyjson.com/posts";

  const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();

    dispatch(setUsers(json.posts));

    setData(json.posts);
  };

  useEffect(() => {
    fetchData(apiurl);
  }, []);

  return (
    <div className="bg-neutral-500">
      <Practice user={data} />
    </div>
  );
}

export default App;
