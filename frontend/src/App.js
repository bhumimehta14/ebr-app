import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import RecipeEditor from "./components/RecipeEditor";

function App() {
  const [activePage, setActivePage] = useState("recipe");
  const [recipes, setRecipes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const createRecipe = () => {
    const newRecipe = { name: "", steps: [""] };
    setRecipes([...recipes, newRecipe]);
    setActiveIndex(recipes.length);
  };

  const updateStep = (type, indexOrName, value) => {
    const updated = [...recipes];
    if (type === "name") {
      updated[activeIndex].name = value;
    } else if (type === "step") {
      updated[activeIndex].steps[indexOrName] = value;
    }
    setRecipes(updated);
  };

  const addStep = () => {
    const updated = [...recipes];
    updated[activeIndex].steps.push("");
    setRecipes(updated);
  };

  const duplicateStep = (index) => {
    const updated = [...recipes];
    const steps = [...updated[activeIndex].steps];
    steps.splice(index + 1, 0, steps[index]);
    updated[activeIndex].steps = steps;
    setRecipes(updated);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const updated = [...recipes];
      const oldIndex = parseInt(active.id);
      const newIndex = parseInt(over.id);
      const movedSteps = [...updated[activeIndex].steps];
      const [moved] = movedSteps.splice(oldIndex, 1);
      movedSteps.splice(newIndex, 0, moved);
      updated[activeIndex].steps = movedSteps;
      setRecipes(updated);
    }
  };

  // Optional: Load existing recipes from backend
  useEffect(() => {
    fetch("https://your-backend-url.onrender.com/api/recipes") // replace with actual backend
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Failed to load recipes:", err));
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        pages={["upload", "matrix", "history", "processmap", "recipe"]}
        setActivePage={setActivePage}
        createRecipe={createRecipe}
        recipes={recipes}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div style={{ flex: 1, padding: "20px" }}>
        {activePage === "recipe" && recipes.length > 0 && (
          <RecipeEditor
            recipe={recipes[activeIndex]}
            updateStep={updateStep}
            addStep={addStep}
            duplicateStep={duplicateStep}
            handleDragEnd={handleDragEnd}
          />
        )}
        {activePage !== "recipe" && <p>Page under construction: {activePage}</p>}
      </div>
    </div>
  );
}

export default App;
