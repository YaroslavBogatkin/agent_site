import './Main.scss';
import BuyButton from '../ui/header__button';


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
                    <div className="product__item">
                        Pages
                    </div>
                    <div className="product__item">
                        Portfolio
                    </div>
                    <div className="product__item">
                        Template
                    </div>
                    <div className="product__item">
                        Contacs
                    </div>
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

