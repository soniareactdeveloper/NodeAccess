import './App.css';
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';


function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage/>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={myRoute} />
  );
}

export default App;
