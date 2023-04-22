import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review";
import AddMoney from "./pages/AddMoney";
import AddExpenses from "./pages/AddExpenses";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Review />} />
        <Route path="/addmoney" element={<AddMoney />} />
        <Route path="/addexpenses" element={<AddExpenses />} />
      </Routes>
    </div>
  )
}

export default App
