import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
// removing the static to avoid the multiple rendering of the page
    <App />
)
