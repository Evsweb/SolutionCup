import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review";
import AddMoney from "./pages/AddMoney";
import AddExpenses from "./pages/AddExpenses";
import Wife from "./pages/Wife"
import Category from "./pages/Category"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Review />} />
        <Route path="/addmoney" element={<AddMoney />} />
        <Route path="/addexpenses" element={<AddExpenses />} />
        <Route path="/wife" element={<Wife />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
