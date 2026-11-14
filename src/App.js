import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
