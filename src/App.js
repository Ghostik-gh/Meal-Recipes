import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './components/Recipe';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='category/:name' element={<Category />} />
          <Route path='meal/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;
