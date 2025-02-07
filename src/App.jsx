import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Features from "./pages/Features"
import Hero from "./pages/Hero"
import Faq from './pages/Faq'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      {/* <Features /> */}
      <AboutUs />
      <Faq/>
      <ContactUs />
      <Footer/>
    </>
  )
}