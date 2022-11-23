import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';

const HomePage = lazy(() => import("./Pages/HomePage"));
const MapDir = lazy(() => import("./Pages/MapDir"));
const Prices = lazy(() => import("./Pages/Prices"));


function App() { 
  return (
    <div className="App">
      <div>
        <Router>
          <NavBar />
          <Suspense Suspence={<h1>Loading..</h1>}>
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/map" element={<MapDir />} />
              <Route path="/prices" element={<Prices />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
