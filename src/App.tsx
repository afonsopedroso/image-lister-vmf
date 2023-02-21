
import './App.scss';
import { BrowserRouter, Route, Routes, HashRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage';
import PageList from './components/ImageVideoList';


function App() {
  const baseUrl: any = document.getElementsByTagName('base')[0].getAttribute('href');
  return (
    <div className="App">
      <div className='banner'><span className='Fun'>VMF Fun</span></div>
      <div className='mainContainer'>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />}>
            </Route>
            <Route path="/ImageList/:id" element={<PageList />}></Route>
          </Routes>
        </Router>
      </div>
      <div className='banner end'>Something</div>
    </div>
  );
}

export default App;
