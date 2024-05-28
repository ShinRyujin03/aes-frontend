import { createRoot } from 'react-dom/client';
import App from './App'; // Import your root component
import './index.css';
import { Provider } from 'react-redux'; // Import Provider
import store from "./store";


const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);