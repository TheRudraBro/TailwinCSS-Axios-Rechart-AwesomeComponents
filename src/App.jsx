
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/DaisyNav/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

function App() {
  

  return (
    <>
     
   <header>
    {/* <Link></Link> */}
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
    
   </header>
   <main>
    <PricingOptions></PricingOptions>
   </main>
   <footer>
     
   </footer>

    </>
  )
}

export default App
