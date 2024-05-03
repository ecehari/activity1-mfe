import ReactDOM from 'react-dom/client';
import AddPayments from './AddPayments';


const mount = (e1 :Element): void => {

    ReactDOM.createRoot(e1).render(<AddPayments/>)

}

export default mount;