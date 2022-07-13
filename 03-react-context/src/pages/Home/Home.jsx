import './home.css'
import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import Header from '@/components/Header'
import { SongProvider } from '@/context/SongContext'

const Home = () => {
  return (
    <>
      <SongProvider>
        <Header />
        <div className='home-container'>
          <div className='izquierdo'>
            <h2>Lado Izquierdo</h2>
            <SongList />
          </div>
          <div className='derecho'>
            <h2>Lado Derecho</h2>
            <SongDetails />
          </div>
        </div>
      </SongProvider>
    </>
  )
}

export default Home
