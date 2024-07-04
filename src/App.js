import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResponsiveAppBar from './components/Header';
import HeaderLayout from './components/Headerlayout';
import SeenComponent from './components/Seen';
import Description from './components/Description';
import Rectangle from './components/Rectangle';
import PreviewBox from './components/PreviewBox';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/>
    <HeaderLayout/>
    <SeenComponent/>
    <Description/>
    <Rectangle/>
    <PreviewBox/>
    </div>
  );
}

export default App;
