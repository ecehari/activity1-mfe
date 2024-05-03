import HomePage from "./HomePage";
import ReactDOM from 'react-dom/client';


const mount = (e1 :Element): void => {

    ReactDOM.createRoot(e1).render(<HomePage/>)

}

export default mount;