import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contacts from './Components/Contacts';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar/> 
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </Router>
    )
}

export default App;
