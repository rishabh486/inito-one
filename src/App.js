import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResponsiveAppBar from './components/Header';
import HeaderLayout from './components/Headerlayout';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/>
    <HeaderLayout/>
    </div>
  );
}

export default App;
