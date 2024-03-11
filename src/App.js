import Header from'./components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Features from './components/Features'

function App() {

  return (
    <div>
       <Header/>
       <div className=" w-full h-screen">
       <Hero/> 
       <Features/>
       <Footer/>
       </div>
       
    </div>
  )
}

export default App
