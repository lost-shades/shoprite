import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; 
import { Store } from './appStore/Store.js';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}> 
      <App />
    </Provider>
)
