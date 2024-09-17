import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Navigate from './Routing/Navigate';
import Home from './Pages/Home';

function App() {
  return (
    <RouterProvider router={Navigate}/>
    // <Home/>
  );
}

export default App;
