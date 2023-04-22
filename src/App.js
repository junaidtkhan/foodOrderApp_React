import { useState } from 'react';
import { Cart } from './Components/Cart/Cart';
import { Header } from './Components/Layout/Header';
import { Meals } from './Components/Meals/Meals';
import { CartProvider } from './Store/CartProvider';
import ChatApp from './ChatBot/ChatApp';
import './App.css';
function App() {
  const [chatOpen, setChatOpen] = useState(true)
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {!chatOpen && <div>
        {cartIsShown && <Cart onCartHide={hideCartHandler}/>}
      <Header onCartShow={showCartHandler}/>
        <main>
          <Meals />

        </main>
      </div>}

      {chatOpen && <ChatApp />}
    </CartProvider>
  );
}

export default App;
