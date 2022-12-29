import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PageNotFound } from "./components";
import { Product, Cart, Category } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="category" element={<Category />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
