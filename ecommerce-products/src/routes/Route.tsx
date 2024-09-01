import { Route, Routes } from "react-router-dom";
import { ProductList } from "../components/ProductLists";
import ProductPage from "../pages/ProductPage";
import { Test } from "../components/Test";

const AppRoutes = () => {
    return <div className="border-4 border-red-700">
    <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/:productId" element={<ProductPage />} /> 
          <Route path="/test" element={<Test />}/> 
     </Routes>
    </div>
  
 };
export default AppRoutes;