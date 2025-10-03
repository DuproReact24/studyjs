import Toolbar from "./components/Toolbar";
import ThemeContext from "./hooks/ThemeContext";


function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
