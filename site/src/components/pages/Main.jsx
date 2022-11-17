import './Main.scss';
import BuyButton from '../ui/header__button';
import {Link} from 'react-router-dom';


function Main(){
  return(
    <div className="product">
          <div className="container">
              <header className='product__header'>
                  <div className="product__title">
                      Atelier.
                  </div>
                  <div className="product__items">
                      <div className="product__item">
                          Overview
                      </div>
                      <Link to={'/Pages'}>
                      <div className="product__item">
                          Pages
                      </div>
                      </Link>
                 </div>
                 <Link to={'/Services'}>
                 <div className="product__item">
                      Portfolio
                  </div>
                  </Link>
                  <div className="product__item">
                      Template
                  </div>
                  <div className="product__item">
                      Contacs
                  </div>
          <BuyButton/>
      </header>
      <section className='product__promo'>
              <div className="product__descr">
                  WE ARE Atelier Creative Agency
              </div>
              <div className="product__descr-big">
                  Unique UI Kit Template for Creative Agencies
              </div>
              <button className="action__button">
                  VIEW LAYOUTS
              </button>
          </section>
        </div>
    </div>
);
}
export default Main

