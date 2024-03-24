
import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './compound/Hero/Hero'
import Parallax from './compound/Parallax/Parallax'
import About from './compound/About me/Aboutme'
import Portfolio from './compound/Portfolio/Portfolio'
import Contact from './compound/Contact/Contact'

function App() {


  return (
    <>
    
     <section id='Homepage'>
     <Navbar/>
     <Hero/>
     </section>
     <section id="About">
        <Parallax type="services" />
      </section>
     <section >
      <About/>
     </section>
     <section id="Projects">
        <Parallax type="Projects" />
      </section>
       <Portfolio/>
     
     <section id='Contact'><Contact/></section>
     
    </>
  )
}

export default App
