import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Product, Cart, Category } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="category" element={<Category />} />
    </>
  )
);
export default router;

