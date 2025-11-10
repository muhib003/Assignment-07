import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>

        {/* Banner Section */}
        <section>
          <Banner></Banner>
        </section>
      </header>
    </>
  )
}

export default App
