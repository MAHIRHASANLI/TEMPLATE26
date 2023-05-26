import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ROUTES} from "./router/router"
import { GlobalDataProvider } from './globall';
const routes= createBrowserRouter(ROUTES)
function App() {
  return (
    <GlobalDataProvider>
      <RouterProvider router={routes}/>
    </GlobalDataProvider>
  );
}

export default App;
