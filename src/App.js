import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PageNotFound } from "./components";
import { Product, Cart, Category, Login } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product />} />
      <Route path="category" element={<Category />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
