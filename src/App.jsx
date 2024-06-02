import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from './pages/LandingPage'
import { SecondPage } from './pages/SecondPage'
import { AllProducts } from "./components"
import { CheckoutPage } from "./pages/CheckoutPage"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/" element={<AllProducts />} />
            <Route path="/products/:productId" element={<SecondPage />} /> 
            <Route path="/CheckoutPage" element={<CheckoutPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



