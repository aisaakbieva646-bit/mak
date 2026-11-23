import './App.css';
import telephoneLogo from "./telephoneLogo.png"
import Logo from "./Logo.png"
import main from "./main.png"

import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import Img from "./Img.png"


import card1 from "./card1.png"
import card2 from "./card2.png"
import card3 from "./card3.png"
import card4 from "./card4.png"
import card5 from "./card5.png"
import card6 from "./card6.png"


import Gr1 from "./Gr1.png"
import Gr2 from "./Gr2.png"
import Gr3 from "./Gr3.png"

import c1 from "./c1.png"
import c2 from "./c2.png"
import c3 from "./c3.png"
import c4 from "./c4.png"

import aiphone from "./aiphone.png"

import app from "./app.png"
import app2 from "./app2.png"

import mashinka from "./mashinka.png"

import logomashina from "./logomashina.png"


import navi from "./navi.png"
import navi2 from "./navi2.png"
import navi3 from "./navi3.png"

function App() {
  return (
    <>
      <header className="header">

        <div className="header__logo">
          <img src={Logo} />

        </div>

        <nav className="header__nav">
          <a href="#" className="header__nav-link">Home</a>
          <a href="#" className="header__nav-link active">Vehicles</a>
          <a href="#" className="header__nav-link">Details</a>
          <a href="#" className="header__nav-link">About Us</a>
          <a href="#" className="header__nav-link">Contact Us</a>
        </nav>

        <div className="header__contact">
          <img src={telephoneLogo} />
        </div>

      </header>

      <div className="main">
        <img src={main} />
      </div>

      <div className="min_kar">

        <div className="min_kar__item">
          <img src={icon1} />
          <p className="min_kar__text">Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
        </div>

        <div className="min_kar__item">
          <img src={icon2} />

          <p className="min_kar__text">Gravida auctor fermentum morbi vulputate ac egestas orci elitum convallis</p>
        </div>

        <div className="min_kar__item">
          <img src={icon3} />
          <p className="min_kar__text">Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
        </div>

      </div>

      {/* ...... */}

      <div className='image'>
        <div className="info_section__image">
          <img src={Img} />
        </div>

        <div className="info_section__list">

          <div className="info_item">
            <span className="info_item__number">1</span>
            <div className="info_item__content">
              <h4 className="info_item__title">Erat at semper</h4>
              <p className="info_item__text">Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...</p>
            </div>
          </div>

          <div className="info_item">
            <span className="info_item__number">2</span>
            <div className="info_item__content">
              <h4 className="info_item__title">Urna nec vivamus risus duis arcu</h4>
              <p className="info_item__text">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            </div>
          </div>

          <div className="info_item">
            <span className="info_item__number">3</span>
            <div className="info_item__content">
              <h4 className="info_item__title">Lobortis euismod imperdiet tempus</h4>
              <p className="info_item__text">Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi</p>
            </div>
          </div>

          <div className="info_item">
            <span className="info_item__number">4</span>
            <div className="info_item__content">
              <h4 className="info_item__title">Cras nulla aliquet nam eleifend amet et</h4>
              <p className="info_item__text">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero</p>
            </div>
          </div>
        </div>

      </div>

      <div className="catalog">
        <div className="catalog1">
          <h2 className="catalog1__title">Choose the car that suits you</h2>
          <a href="#" className="catalog1__link">View All →</a>
        </div>


      </div>
      <div className='container'>








        <div className="card">


          <div className="card__image">
            <img src={card1} />
          </div>

          <div className="card__info">
            <h3 className="">Mercedes</h3>
            <span className="card__price">$25</span>
          </div>

          <div className="card__features">
            <div className="card__feature">
              <img src={Gr1} />
              <span className="card__feature-text">Automat</span>
            </div>

            <div className="card__feature">
              <img src={Gr2} />
              <span className="card__feature-text">PB 95</span>
            </div>

            <div className="card__feature">
              <img src={Gr3} />
              <span className="card__feature-text">Air Conditioner</span>
            </div>
          </div>

          <div href="#" className="card__button">View Details</div>


        </div>








        <div className="card">


          <div className="card__image">
            <img src={card2} />
          </div>

          <div className="card__info">
            <h3 className="">Mercedes</h3>
            <span className="card__price">$50</span>
          </div>

          <div className="card__features">
            <div className="card__feature">
              <img src={Gr1} />
              <span className="card__feature-text">Automat</span>
            </div>

            <div className="card__feature">
              <img src={Gr2} />
              <span className="card__feature-text">PB 95</span>
            </div>

            <div className="card__feature">
              <img src={Gr3} />
              <span className="card__feature-text">Air Conditioner</span>
            </div>
          </div>

          <div href="#" className="card__button">View Details</div>



        </div>







        <div className="card">


          <div className="card__image">
            <img src={card3} />
          </div>

          <div className="card__info">
            <h3 className="">Mercedes</h3>
            <span className="card__price">$45</span>
          </div>

          <div className="card__features">
            <div className="card__feature">
              <img src={Gr1} />
              <span className="card__feature-text">Automat</span>
            </div>

            <div className="card__feature">
              <img src={Gr2} />
              <span className="card__feature-text">PB 95</span>
            </div>

            <div className="card__feature">
              <img src={Gr3} />
              <span className="card__feature-text">Air Conditioner</span>
            </div>
          </div>

          <div href="#" className="card__button">View Details</div>



        </div>






        <div className="card">


          <div className="card__image">
            <img src={card4} />
          </div>

          <div className="card__info">
            <h3 className="">Porsche</h3>
            <span className="card__price">$40</span>
          </div>

          <div className="card__features">
            <div className="card__feature">
              <img src={Gr1} />
              <span className="card__feature-text">Automat</span>
            </div>

            <div className="card__feature">
              <img src={Gr2} />
              <span className="card__feature-text">PB 95</span>
            </div>

            <div className="card__feature">
              <img src={Gr3} />
              <span className="card__feature-text">Air Conditioner</span>
            </div>
          </div>

          <div href="#" className="card__button">View Details</div>



        </div>





        <div className="card">


          <div className="card__image">
            <img src={card5} />
          </div>

          <div className="card__info">
            <h3 className="">Toyota </h3>
            <span className="card__price">$35</span>
          </div>

          <div className="card__features">
            <div className="card__feature">
              <img src={Gr1} />
              <span className="card__feature-text">Automat</span>
            </div>

            <div className="card__feature">
              <img src={Gr2} />
              <span className="card__feature-text">PB 95</span>
            </div>

            <div className="card__feature">
              <img src={Gr3} />
              <span className="card__feature-text">Air Conditioner</span>
            </div>
          </div>

          <div href="#" className="card__button">View Details</div>



        </div>





        <div className="card">


          <div className="card__image">
            <img src={card6} />
          </div>

          <div className="card__info">
            <h3 className="">Porsche</h3>
            <span className="card__price">$50</span>
          </div>

          <div className="card__features">
            <div className="card__feature">
              <img src={Gr1} />
              <span className="card__feature-text">Automat</span>
            </div>

            <div className="card__feature">
              <img src={Gr2} />
              <span className="card__feature-text">PB 95</span>
            </div>

            <div className="card__feature">
              <img src={Gr3} />
              <span className="card__feature-text">Air Conditioner</span>
            </div>
          </div>

          <div href="#" className="card__button">View Details</div>

        </div>


      </div>





      <div className="char">
        <h2 className="char__title">Facts In Numbers</h2>
        <p className="char__text">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum</p>

        <div className="char__cards">

          <div className="char1">
            <div className="char1__icon">
              <img src={c1} />
            </div>
            <div className="char1__info">
              <h2 className="char1__number">540+</h2>
              <h2 className="char1__label">Cars</h2>
            </div>
          </div>

          <div className="char2">
            <div className="char2__icon">
             <img src={c2} />
            </div>
            <div className="char2__info">
              <h2 className="char2__number">20k+</h2>
              <h2 className="char2__label">Customers</h2>
            </div>
          </div>

          <div className="char3">
            <div className="char3__icon">
              <img src={c3} />
            </div>
            <div className="char3__info">
              <h2 className="char3__number">25+</h2>
              <h2 className="char3__label">Years</h2>
            </div>
          </div>

          <div className="char4">
            <div className="char4__icon">
              <img src={c4} />
            </div>
            <div className="char4__info">
              <h2 className="char4__number">20m+</h2>
              <h2 className="char4__label">Miles</h2>
            </div>
          </div>

        </div>
      </div>



      {/* ....... */}
<div className="download-app">
  <div className="download-app__content">
    <h2 className="download-app__title">Download<br />mobile app</h2>
    <p className="download-app__text">
      Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna
    </p>
    
    <div className="download-app__buttons">
       <img src={app}/>
        <img src={app2}/>
   
    </div>
  </div>

  <div className="download-app__phones">
    <img src={aiphone}/>
    
    
  </div>
</div>
      

<div class="hero">
  <div class="content">
    <h1 class="title">Enjoy every mile with adorable companionship.</h1>
    <p class="desc">
      Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat
    </p>

    <div class="search-box">


      <button class="btn">Search</button>
    </div>
  </div>

  <div class="image-area">
  <img src={mashinka}/>

  </div>
</div>





      
  <footer className="footer">
        <div className="footer__container">
           <img src={logomashina}/>
        
          <div className="footer__col">
           
            <p className="footer__desc">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...
            </p>
           
          </div>

          {/* Колонка 2: Контакты */}
          <div className="footer__col">
            <div className="contact-item">
                  <img src={navi}/>
              <div>
                <span className="contact-label">Address</span>
                <p className="contact-text">Oxford Ave. Cary, NC 27511</p>
              </div>
            </div>
            
            <div className="contact-item">
                <img src={navi2}/>
              <div>
                <span className="contact-label">Email</span>
                <p className="contact-text">nwiger@yahoo.com</p>
              </div>
            </div>

            <div className="contact-item">
                 <img src={navi3}/>
              <div>
                <span className="contact-label">Phone</span>
                <p className="contact-text">+537 547-6401</p>
              </div>
            </div>
          </div>

          {/* Колонка 3: Useful links */}
          <div className="footer__col">
            <h3 className="footer__title">Useful links</h3>
            <ul className="footer__list">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">F.A.Q</a></li>
            </ul>
          </div>

          
          <div className="footer__col">
            <h3 className="footer__title">Vehicles</h3>
            <ul className="footer__list">
              <li><a href="#">Sedan</a></li>
              <li><a href="#">Cabriolet</a></li>
              <li><a href="#">Pickup</a></li>
              <li><a href="#">Minivan</a></li>
              <li><a href="#">SUV</a></li>
            </ul>
          </div>

          
          <div className="footer__col">
            <h3 className="footer__title">Download App</h3>
            <div className="app-buttons">
              <img src={app} />
                 <img src={app2} />
            </div>
          </div>

        </div>
      </footer>
      
    </>
  );
}

export default App;
