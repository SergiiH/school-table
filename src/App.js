import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SecondPage } from "./pages/SecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "second",
    element: <SecondPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
