import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Nav from './components/Nav/Nav';
import Cast from './components/Cast';
import Reviews from './components/Reviews';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieCard = lazy(() => import('./components/MovieCard/MovieCard'));
const NotFound = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MovieCard/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
