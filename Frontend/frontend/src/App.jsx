import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from './router/routes';
const router = createBrowserRouter(ROUTES)
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
