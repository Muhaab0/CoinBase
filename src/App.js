import React from 'react'
import About from './Components/AboutUs'
import DailyPrices from './Components/DaliyPrices'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import NewsLetter from './Components/NewsLetter'
import Roadmap from './Components/RoadMap'
import ScrollToTop from './Components/ScrollToTop'
import Services from './Components/Services'
import SignUp from './Components/SignUp'

export default function App() {
  return (
    <div>
    <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <About />
      <Services />
      <SignUp />
      <Roadmap />
      <NewsLetter />
      <Footer />
    </div>
  )
}
