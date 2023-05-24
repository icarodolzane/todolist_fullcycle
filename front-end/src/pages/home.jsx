
import '../styles/home.css';
import pencil from '../assets/NotePencil.svg';
import FormBar from '../components/formBar';
function Home() {

  return (
    <div className="page-container">
      <h1>TO-DO NOW</h1>
      <div className="separator">
        <div className="line"></div>
        <img src={pencil} alt="pencil icon" />
        <div className="line"></div>
      </div>
      <FormBar/>
    </div>
  )
}

export default Home
