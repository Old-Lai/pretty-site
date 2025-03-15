import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Root,
  NotFound404,
  Home,
  LashExtensions,
  PermanentMakeup,
  Manicure,
  Facial,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lash-Extensions",
        element: <LashExtensions />,
      },
      {
        path: "/permanent-makeup",
        element: <PermanentMakeup />,
      },
      {
        path: "/manicure",
        element: <Manicure />,
      },
      {
        path: "/facial",
        element: <Facial />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
