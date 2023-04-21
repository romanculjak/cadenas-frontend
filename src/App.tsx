import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsListPage from './pages/ProductsListPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route path='products' element={<ProductsListPage/>}/>
        <Route path='product/:id' element={<ProductDetailPage/>}/>
    </Route>
  )
)

const queryClient = new QueryClient()


function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>

    </>
  )
}

export default App
