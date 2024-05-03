import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './pageHeader/PageHeader'
import HomePageRemote from './remoteComponents/HomePageRemote'
import AddPaymentsRemote from './remoteComponents/AddPaymentsRemote';


function App() {
  

  return (
    <>
    <BrowserRouter>
        {/* <h1>This is from container</h1> */}
        <PageHeader />
        <Routes>
        <Route path="/add" element={ <AddPaymentsRemote /> } />
        <Route path="/home" element={ <HomePageRemote /> } />        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
