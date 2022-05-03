
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Join } from './Components/Join/Join';




function App() {
 
  return (
    <div className="App"> 
    <Routes>
      <Route exact path="/" element={<Join />} />
      <Route path="/chat" />
    </Routes>
    </div>
  );
}

export default App;
