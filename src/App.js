import { Route, Routes } from "react-router-dom";
import { Google } from "./components/google";
import { Search } from "./components/Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Google/>
      <Routes>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </div>
  );
}