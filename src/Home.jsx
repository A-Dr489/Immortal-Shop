import { useNavigate } from 'react-router-dom';
import './Home.css'
import ez from './assets/logoShop.png';

function Home() {
    const navigate = useNavigate();

    function handleShopNow() {
        navigate('/Products')
    }

    return (
        <>
          <div className="welcome-home">
            <h1 style={{fontSize: "2.7em", lineHeight: 1}}>Welcome to <span style={{color: "var(--primary)"}}>Immortal Voices Shopping</span></h1>
            <p style={{fontSize: "1.2em"}}>Where we will provide medication for the <span style={{color: "var(--secondary)"}}>VOICES</span> inside your head</p>
          </div>

        <h1 style={{textAlign: "center", margin: "50px 0px 50px 0px"}}>We produce <span style={{color: "var(--secondary)"}}>quality</span></h1>

          <div className='showStuff'>
            <div className='holder'>
                <img src={ez} width={200}/>
            </div>

            <div className='holder'>
                <img src={ez} width={200}/>
            </div>

            <div className='holder'>
                <img src={ez} width={200}/>
            </div>
          </div>

          <div style={{display: "flex", justifyContent: "center", margin: "70px 0px 50px 0px"}}>
            <button className='home-shopbtn' onClick={handleShopNow}>Shop now</button>
          </div>
        </>
    )
}

export default Home;