import Image from "next/image";
import Navbar from './components/Navbar'
import HomePage from './components/Home'
import Gallary from './components/Gallary'
import Contact from './components/Contact'
import Story from './components/Story'
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Story/>
    <Gallary />
    <Contact/>
    </>
  
  );
}
