import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Testcomp from "./Testcomp.jsx";
import { MyshopContextProvider  } from './context/MyEcom.jsx'

createRoot(document.getElementById("root")).render(
<MyshopContextProvider>
    <App/>
</MyshopContextProvider>
);
