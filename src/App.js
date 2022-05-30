import'./App.css'
import './styles/section-image.css'
// Iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
// Components con React
import Card from './components/card';
import Image from './components/card-image';
import ImageText from './components/card-image-text';
import Testimonials from './components/cards-testimonials';
import Gallery from './components/section-image';
import Credits from "./components/credits";
import Footer from './components/footer';
function App() {
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Lato:wght@900&family=Orelega+One&display=swap');
</style>
  return (
    <div className="App">
      <header id='home'>
        <nav>
            <ul className='navigation'>
            <li className='logo'><a className='color'href='home'>sunnyside</a></li>
            <li className='navigation-item'><a className='color'href='#'>About</a></li>
            <li className='navigation-item'><a className='color'href='#'>Services</a></li>
            <li className='navigation-item'><a className='color'href='#'>Proyects</a></li>
            <li className='navigation-item '><a className='color-a-2'href='#'>CONTACT</a></li>
          </ul>
        </nav>
        <h1>WE ARE CREATIVES</h1>
        <div className='icon-header'><FontAwesomeIcon className='icon-arrow' icon={faArrowDownLong} /></div>
      </header>

      <section className='cards'>
      <Card 
        tittle= 'Transform your brand' 
        text1='We are full-service creative agency specializing in helping brands grow fast. Engage your clients throught compelling visuals that do tmost of the marketing for you.' 
        text2='LEARN MORE'
      ></Card>
      
      <Image 
        name='image-1'
        img= 'image-transform'
        alt='image-transform'
      ></Image>
      
      <Image 
      name='image-1'
        img= 'image-stand-out'
        alt='image-stand-out'
      ></Image>
        
      <Card
        tittle= 'Stand out to the right audience' 
        text1='Using a collaborative formula of designers, researchers photographers, videographers, and copywriters, we ll build and extenf your brand in digital places.' 
        text2='LEARN MORE' 
      ></Card>
 
      <ImageText 
        name='image-2'
        classname='tittle-1'
        classname1='text-1'
        img= 'image-graphic-design'
        alt='image-graphic-design'
        tittle='Graphic Design'
        text='Great desing makes you memorable. We deliver artwork that underscores you brand message and captures pontencial clients attention.'
      ></ImageText>
        
      <ImageText 
        name='image-2'
        classname='tittle-2'
        classname1='text-2'
        img= 'image-photography'
        alt= 'image-photography'
        tittle='Photography'
        text='Increase your credibility by getting the most stunning, high-qualty photos that improve your business image.'
      ></ImageText>
        <Card 
        tittle= 'Transform your brand' 
        text1='We are full-service creative agency specializing in helping brands grow fast. Engage your clients throught compelling visuals that do tmost of the marketing for you.' 
        text2='LEARN MORE'
      ></Card>
      
      <Image 
        name='image-1'
        img= 'image-graphic-design'
        alt='image-graphic-design'
      ></Image>
  
      <Image 
        name='image-1'
        img= 'image-photography'
        alt='image-photography'
      ></Image>

      <Card 
        tittle= 'Transform your brand' 
        text1='We are full-service creative agency specializing in helping brands grow fast. Engage your clients throught compelling visuals that do tmost of the marketing for you.' 
        text2='LEARN MORE'
      ></Card>
      
      <ImageText 
        name='image-2'
        classname='tittle-1'
        classname1='text-1'
        img= 'image-transform'
        alt='image-transform'
        tittle='Graphic Design'
        text='Great desing makes you memorable. We deliver artwork that underscores you brand message and captures pontencial clients attention.'
      ></ImageText>
        
      <ImageText 
        name='image-2'
        classname='tittle-2'
        classname1='text-2'
        img= 'image-stand-out'
        alt= 'image-stand-out'
        tittle='Photography'
        text='Increase your credibility by getting the most stunning, high-qualty photos that improve your business image.'
      ></ImageText>
      </section>
  
       <section  className='testimonio'>
       <h2 className='tittle-testimonio'> CLIENT TESTIMONIALS</h2>
        <div className='box-testiminio'>
        <Testimonials
        img='emily'
        text='We put trust in Sunnyside and they delivired, making our needs were met and deadlines were always hitl.'
        name='Emily R.'
        profession='Marketing Director'
        ></Testimonials>
         <Testimonials
        img='thomas'
        text='Sunnyside s enthusiasm coupled with their keen interest in our brand s success made it a satisfying and enjoyable experience.'
        name='Thomas S.'
        profession='Chef Operating'
        ></Testimonials>
        <Testimonials
        img='jennie'
        text='Incredible end result! Our sales increased over 400% when worked with Sunnyside Highly recommended!'
        name='Jennie F.'
        profession='Business Owner'
        ></Testimonials>

        <Testimonials
        img='jennie'
        text='Incredible end result! Our sales increased over 400% when worked with Sunnyside Highly recommended!'
        name='Jennie F.'
        profession='Business Owner'
        ></Testimonials>
        <Testimonials
        img='emily'
        text='We put trust in Sunnyside and they delivired, making our needs were met and deadlines were always hitl.'
        name='Emily R.'
        profession='Marketing Director'
        ></Testimonials>
         <Testimonials
        img='thomas'
        text='Sunnyside s enthusiasm coupled with their keen interest in our brand s success made it a satisfying and enjoyable experience.'
        name='Thomas S.'
        profession='Chef Operating'
        ></Testimonials>
        </div>
      </section>

      <section className='gallery'>
      <Gallery
      img1='milkbottles'
      ></Gallery>
      <Gallery
      img1='orange'
      ></Gallery>
      <Gallery
      img1='cone'
      ></Gallery>
       <Gallery
      img1='sugarcubes'
      ></Gallery>
      </section>

      {/* Footer */}
      <Footer></Footer>
      <Credits/>
    </div>
  );
}

export default App;
