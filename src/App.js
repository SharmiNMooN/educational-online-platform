import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
}

export default App;
