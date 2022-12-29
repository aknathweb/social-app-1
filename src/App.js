import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
