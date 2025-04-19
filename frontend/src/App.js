import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Matrix from "./pages/Matrix";
import History from "./pages/History";
import Recipe from "./pages/Recipe";
import ProcessMap from "./pages/ProcessMap";
import "./App.css";

const pages = {
  Home: <Home />,
  Upload: <Upload />,
  Matrix: <Matrix />,
  Recipe: <Recipe />,
  History: <History />,
  ProcessMap: <ProcessMap />
};

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar pages={Object.keys(pages)} setActivePage={setActivePage} />
      <div style={{ padding: "20px", flex: 1 }}>
        {pages[activePage]}
      </div>
    </div>
  );
}

export default App;
