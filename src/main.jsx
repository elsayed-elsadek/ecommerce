
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TimeProvider } from './context/TimeContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';


createRoot(document.getElementById('root')).render(
  <WishlistProvider>
    <TimeProvider targetDate="2025-11-31T23:59:59">
      <App />
    </TimeProvider>
  </WishlistProvider>
)
