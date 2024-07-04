import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResponsiveAppBar from './components/Header';
import HeaderLayout from './components/Headerlayout';
import SeenComponent from './components/Seen';
import Description from './components/Description';
import Rectangle from './components/Rectangle';
import PreviewBox from './components/PreviewBox';
import InfoKit from './components/InfoKit';
import AccordionExpandDefault from './components/Accordion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/>
    <HeaderLayout/>
    <SeenComponent/>
    <Description/>
    <Rectangle/>
    <PreviewBox/>
    <InfoKit/>
    <AccordionExpandDefault/>
    <Footer/>
    </div>
  );
}

export default App;
