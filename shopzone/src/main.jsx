import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CartProvider from './context/CartContext.jsx'
import WishlistProvider from "./context/WishlistContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductProvider>
    </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
