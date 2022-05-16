import'./App.css'
import Credits from "./components/credits";
import Back from './images/image-header.jpg';

function App() {
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Lato:wght@900&family=Orelega+One&display=swap');
</style>

  return (
    <div className="App">
      <header>
        <nav>
            <ul className='navigation'>
            <li className='logo'><a className='color'href='#'>sunnyside</a></li>
            <li className='navigation-item'><a className='color'href='#'>About</a></li>
            <li className='navigation-item'><a className='color'href='#'>Services</a></li>
            <li className='navigation-item'><a className='color'href='#'>Proyects</a></li>
            <li className='navigation-item '><a className='color-a-2'href='#'>CONTACT</a></li>
          </ul>
        </nav>
        <h1>WE ARE CREATIVES</h1>
         
        
        
      </header>
      <Credits/>
    </div>
  );
}

export default App;
