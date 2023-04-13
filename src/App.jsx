import { useEffect } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './assets/components/ProtectedRoutes'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Purchases from './assets/pages/Purchases'
import ProductsId from './assets/pages/ProductsId'
import NavBar from './assets/components/NavBar'
import Loading from './assets/components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from './assets/store/slices/products.slice'

function App() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <HashRouter>
      <NavBar />
        {loading && <Loading />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/products/:id"} element={<ProductsId />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={"/purchases"} element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App