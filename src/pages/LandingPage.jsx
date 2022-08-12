
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar2/Navbar";
import { PersonasGrid } from "../components/PersonasGrid";
import { Search } from "../components/search/Search";
import {Slideshow, Slide, TextoSlide} from "../components/slide/Slideshow";
import img1 from '../img/imagen1.png'
import img2 from '../img/imagen2.png'
import img3 from '../img/imagen3.png'
import img4 from '../img/4.jpg'
import './estilos.css'

export function LandingPage() {
    return (
      <div>
        <Navbar />
        <main className="mainSlide">
        <Slideshow controles={true} autoplay={false}> 
        
          <Slide>
               <a href="www.google.com">
                   <img src={img1} alt="" />
              </a>
              <TextoSlide>
                    <p>Conoce a nuestros trabajadores</p>
             </TextoSlide>
         </Slide>
          <Slide>
             <a href="www.google.com">
                 <img src={img2} alt="" />
               </a>
             <TextoSlide>
                 <p>Vamos por más!</p>
             </TextoSlide>
          </Slide>
          <Slide>
             <a href="www.google.com">
               <img src={img3} alt="" />
              </a>
             <TextoSlide>
               <p>Inspirate</p>
             </TextoSlide>
          </Slide>
          <Slide>
            <a href="www.google.com">
              <img src={img4} alt="" />
            </a>
            <TextoSlide>
             <p>Tu mejor opción</p>
            </TextoSlide>
          </Slide>
        </Slideshow>
        </main>
        <Search />
        <PersonasGrid />
        <Footer />
        
      </div>
    );
  }