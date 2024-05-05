import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Form from "./components/form/Form.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import  {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = new createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/register",
    element: <Form />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router}/>
  </ChakraProvider>
);
