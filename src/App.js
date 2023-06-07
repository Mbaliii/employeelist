
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Login from './Login';
// import Register from './Register';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
