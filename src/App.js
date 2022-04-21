
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import List from './Components/List/List';
import HomePage from './Pages/HomePage/HomePage';
import AnimesPage from './Pages/AnimesPage/AnimesPage';
import AnimeDetails from './Pages/AnimesPage/AnimeDetails';

import ContactPage from './ContactPage/ContactPage';
import { LoadingContext } from './Context/LoadingContext';
import Loading from './Context/Loading';
import { useState } from 'react';




function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
    <div className="App">
      <List/>
    <LoadingContext.Provider value={{setIsLoading}}>
      <Loading isLoading={isLoading}/>
       <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="/animes" element={<AnimesPage/>}/>
         <Route path="/animes/:id" element={<AnimeDetails/>}/>
         <Route path="/contact/" element={<ContactPage/>}/>
       
       
       </Routes>
       </LoadingContext.Provider>
      </div>
    
    </Router>
  );
}

export default App;
