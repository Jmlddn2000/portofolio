import React from 'react'
import logo from "../Asset/IMAGE/jamal.jpg";
import logo1 from "../Asset/IMAGE/react.png";
import logo2 from "../Asset/IMAGE/react-native.png";
import logo3 from "../Asset/IMAGE/mongo.png";
import logo4 from "../Asset/IMAGE/flutter.svg";
import logo5 from "../Asset/IMAGE/python.png";
import logo6 from "../Asset/IMAGE/mysql.webp";
import logo7 from "../Asset/IMAGE/html.png";
import logo8 from "../Asset/IMAGE/css.png";



// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import '../App.css';
export default function Home() {
  return (
    <div className='container shadow-lg p-3 mb-5 bg-body rounded '  >
        <nav className='navbar '>
            <ul className='d-flex '>
                <li>My</li> 
                <li>Skill</li>
                <li>Project</li>
                <li>Contact</li>

            </ul>
        </nav>

        <section className='container'>
            <h1 className='logo text-center position-absolute'  >photography <br /> portfolio website</h1>
            <img src={logo} className=' rounded mx-auto ' ></img>

        </section>

        <section className='container'>
          <h1 className='nama text-center'>Jamaluddin Al Afgani</h1>
        </section>

        <section>
          <div className='row text-center pt-5'>
            <div className='col-3'>
              <img src={logo1} alt="" />
            </div>
            <div className='col-3'>
              <img src={logo2} alt="" />
            </div>
            <div className='col-3'>
              <img src={logo3} alt="" />
            </div>
            <div className='col-3'>
              <img src={logo4} alt="" />
            </div>
            
          </div>
          <div className='row text-center pt-5'>
          <div className='col-3'>
              <img src={logo5} alt="" />
            </div>
            <div className='col-3'>
              <img src={logo6} alt="" />
            </div>
            <div className='col-3'>
              <img src={logo7} alt="" />
            </div>
            <div className='col-3'>
              <img src={logo8} alt="" />
            </div>
          </div>
          
        </section>


        <section className=' mt-5'>
          <div className='row'>
            <div className='col-6 mb-5'>
              <div className='card'>
                <div className='card-body'>
                  <a style={{textDecorationLine: "none", color: "black"}}  href="https://www.linkedin.com/feed/update/urn:li:activity:7090232828256260096/">
                    <h5 className='card-title text-center'>Skripsi</h5>
                  </a>
              </div>
            </div>
          </div>

          <div className='col-6 '>
              <div className='card'>
                <div className='card-body '>
                <a style={{textDecorationLine: "none", color: "black"}} href="https://loundry-mini-project-jamaluddin-react-d.netlify.app/">
                    <h5 className='card-title text-center'>Laundry</h5>
                  </a>
              </div>
            </div>
          </div>
          </div>

          <div className='row'>
            <div className='col-6 mb-5 '>
              <div className='card'>
                <div className='card-body'>
                  <a style={{textDecorationLine: "none", color: "black"}}  href="https://62d7c13531db0c1d4f3250a1--vakyu.netlify.app/#/login">
                    <h5 className='card-title text-center'>Dahsboard Admin VaccineBooking</h5>
                    
                  </a>
              </div>
            </div>
          </div>

          <div className='col-6'>
              <div className='card'>
                <div className='card-body'>
                <a style={{textDecorationLine: "none", color: "black"}}  href="https://github.com/Jmlddn2000/Netflox">
                    <h5 className='card-title text-center'>Bandara Spinggan</h5>
                  </a>
              </div>
            </div>
          </div>
          </div>
        </section>


        <footer>
          <div className='row text-center pt-5 pb-5'>
            <div className='col-4'>
              <h1>
                <a href='https://www.instagram.com/jmlddnalafgani/'>
                  <img  width={200} height={200} src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png" />
                  
                </a>
              </h1>
            </div>
            <div className='col-4'>
              <h1>
              <a href='https://github.com/Jmlddn2000'>
              <img width={200} height={200} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              </a>

              </h1>
            </div>
            <div className='col-4'>
              <h1>
              <a href='https://www.linkedin.com/in/jamaluddin-al-afgani-5b4b7a232/'>
              <img width={200} height={200} src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" />
              </a>

              </h1>
            </div>
          </div>


        </footer>
    </div>
  )
}
