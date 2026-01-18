import './App.css'
import Category from './components/Category'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './pages/News'


function App() {
  

  return (
    <>
      <Navbar className="sticky top-0 z-2" />

      <Category ClassName="py-10 sticky top-14 z-1 bg-base-100" />

      <News  ClassName="pb-10"/>  

      <Footer />
    </>
  )
}

export default App
