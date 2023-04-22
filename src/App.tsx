import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Review />} />
      </Routes>
    </div>
  )
}

export default App
