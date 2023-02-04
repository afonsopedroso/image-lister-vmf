
import './App.css';
import { BrowserRouter, Route, Routes, HashRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage';
import PageList from './components/ImageVideoList';


function App() {
  const baseUrl: any = document.getElementsByTagName('base')[0].getAttribute('href');
  return (
    <div className="App">
      <div>This is a banner</div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
          </Route>
          <Route path="/ImageList/:id" element={<PageList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
