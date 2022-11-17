import './Services.scss';
import './Main.scss';

import BuyButton from '../ui/header__button';

import {Link} from 'react-router-dom';

function Services(){

    return(
        <div className="services">
            <div className="container">
            <header className='product__header'>
                <Link to={'/'}>
                  <div className="product__title">
                      Atelier.
                  </div>
                  </Link>
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
                <div className="services__onTheTitle">Our Core Features</div>
                <div className="services__title">Our Services</div>
                <div className="services__content">
                    <div className="content">
                        <img src={require(`../elements/images/14.png`)} alt="logo" className="services__content-logo" />
                        <div className="services__content-title">Web Design</div>
                        <div className="services__content-subtitle">Suspendisse varius enim in</div>
                        <div className="services__content-descr">cursus id rutrum imperdiet. eros elementum tristique.</div>
                    </div>
                    <div className="content">
                        <img src={require(`../elements/images/15.png`)} alt="logo" className="services__content-logo" />
                        <div className="services__content-title">UI/UX Design</div>
                        <div className="services__content-subtitle">Suspendisse varius enim in</div>
                        <div className="services__content-descr">cursus id rutrum imperdiet. eros elementum tristique.</div>
                    </div>
                    <div className="content">
                        <img src={require(`../elements/images/16.png`)} alt="logo" className="services__content-logo" />
                        <div className="services__content-title">SEO & Marketing</div>
                        <div className="services__content-subtitle">Suspendisse varius enim in</div>
                        <div className="services__content-descr">cursus id rutrum imperdiet. eros elementum tristique.</div>
                    </div>
                </div>
                <section className="instapic">
                    <div className="instapic__item">
                        <img src={require(`../elements/images/17.png`)} alt="img" className="instapic__1" />
                    </div>
                    <div className="instapic__item">
                        <img src={require(`../elements/images/18.png`)} alt="img" className="instapic__2" />
                    </div>
                    <div className="instapic__content">
                        <div className="instapic__descr">Follow me on</div>
                        <button className="instapic__btn">Instagram</button>
                    </div>
                    <div className="instapic__item">
                        <img src={require(`../elements/images/20.png`)} alt="img" className="instapic__3" />
                    </div>
                    <div className="instapic__item">
                        <img src={require(`../elements/images/21.png`)} alt="img" className="instapic__4" />
                    </div>
                </section>
                <section className='product__footer'>
                <div className="product__footer-title">
                    Subscribe to Atelier Newsletter
                </div>
                <div className="product__footer-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </div>
                <form action="" className='product__footer-form'>
                    <input type="text" placeholder='Введите ссылку' className='product__footer-input' />
                    <button className='product__footer-btn'>Отправить</button>
                </form>
                <div className="product__footer-information">
                    * By clicking <span>“Subscribe”</span> button, you agree to our Terms and that you have read our Data Use <span>Policy</span>.
                </div>
                <div className="product__footer-subscrabe">
                    <img src={require(`../elements/images/22.png`)} alt="logo" className='product__footer-logo'/>
                    <img src={require(`../elements/images/23.png`)} alt="logo" className='product__footer-logo' />
                    <img src={require(`../elements/images/24.png`)} alt="logo" className='product__footer-logo' />
                    <img src={require(`../elements/images/25.png`)} alt="logo" className='product__footer-logo' />
                </div>
                <div className="footer__links">
                    <div className="footer__links-name">
                        Powered By Yaroslav
                    </div>
                    <div className="footer__links-item">Licenses   |</div>
                    <div className="footer__links-item">Style Guide  |</div>
                    <div className="footer__links-item">Instruction</div>
                </div>
                </section>
            </div>
        </div>
    )}



    export default Services