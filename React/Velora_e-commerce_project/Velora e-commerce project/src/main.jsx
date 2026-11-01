import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ProductContext from "./context/ProductContext.jsx";
import CategoryContext from "./context/CategoryContext.jsx";
import TopratedProduct from "./context/TopratedProduct.jsx";
import Categoriesdata from "./context/Categoriesdata.jsx";
import UserCart from "./context/userCart.jsx";
import Login from "./context/Login.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductContext>
      <CategoryContext>
        <TopratedProduct>
          <Categoriesdata>
            <Login>
              <UserCart>
                <App />
              </UserCart>
            </Login>
          </Categoriesdata>
        </TopratedProduct>
      </CategoryContext>
    </ProductContext>
  </BrowserRouter>,
);
