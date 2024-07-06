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
import ReviewBox from './components/ReviewBox';
import TextComponent from './components/TextComponent';
import { useState, useEffect } from 'react';
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width, height } = useWindowDimensions();
  return (
    <div className="App" style={{display:'flex', flexDirection:'column',overflow:'hidden',justifyContent:'center',alignItems:'center'}}>
    <ResponsiveAppBar width={width}/>
    <HeaderLayout width={width}/>
    <SeenComponent width={width}/>
    <Description width={width}/>
    <Rectangle width={width}/>
    <PreviewBox width={width}/>
    <InfoKit width={width}/>
    <ReviewBox width={width}/>
    <TextComponent width={width}/>
    <AccordionExpandDefault width={width}/>
    <Footer width={width}/>
    </div>
  );
}

export default App;
