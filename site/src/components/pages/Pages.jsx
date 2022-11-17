import BuyButton from "../ui/header__button";
import './Main.scss';
import './Pages.scss';
import {Link} from 'react-router-dom';




function Pages(){

    return(
        <div className="pages">
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
                        <div className="product__item">
                            Pages
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
                    </div>
                    <BuyButton/>
                </header>
                <section className="pages__portfolio">
                    <div className="pages__onTheTitle">
                        Our Core Layouts
                    </div>
                    <div className="pages__title">
                        Template Pages
                    </div>
                    <div className="pages__items">
                        <div className="pages__item">
                            <img src={require(`../elements/images/1.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Landing vr.1
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/2.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Landing vr.2
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/3.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Landing vr.3
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/4.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Portfolio 1
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/5.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Portfolio 2
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/6.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Portfolio 3
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/7.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Portfolio 4
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/8.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Single Project
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/9.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                About Company
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/10.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                About Team
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/11.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                Single Team Member
                            </div>
                        </div>
                        <div className="pages__item">
                            <img src={require(`../elements/images/12.png`)} alt="pic" className="item__pic" />
                            <div className="item__descr">
                                FAQ Page
                            </div>
                        </div>
                    </div>
                    <img src={require(`../elements/images/13.png`)} alt="pic" className="footer__pic" />
                </section>
            </div>
        </div>
    )
}

export default Pages