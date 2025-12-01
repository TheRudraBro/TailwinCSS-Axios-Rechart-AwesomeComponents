
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/DaisyNav/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  

  return (
    <>
     
   <header>
    {/* <Link></Link> */}
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
    
   </header>
   <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
   </main>
   <footer>
     <h1>Copyright © 2024 | All rights reserved</h1>
   </footer>

    </>
  )
}

export default App
