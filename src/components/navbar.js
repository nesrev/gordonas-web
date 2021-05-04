import React from 'react';
import {Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  render() {
    return(
      <section className="hero is-small ">
        <div className="hero-body gb-background-head"> 
            <figure className="image is-flex is-justify-content-center">
                <Link to="/" className="">
                    <StaticImage 
                        src="../images/gordonas-logo.png"
                        alt="Gordonas Full House"
                        placeholder="blurred"
                        layout="fixed"
                        width={600}
                    />
                </Link>
            </figure>   
        </div>
        <div className="hero-footer">
            <nav class="navbar" role="navigation" aria-label="Menu">
                <NavbarBurger
                  active={this.state.activeMenu}
                  toggleMenu={this.toggleMenu}
                />
                <div className="navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}">
                    <div className="navbar-start gd-font">
                        <Link to="/about" className="navbar-item gd-text-orange">
                            ¿Quienes Somos?
                        </Link>
                        <Link to="/menu" className="navbar-item gd-text-orange">
                            Nuestro Sabores
                        </Link>
                        <Link to="/store" className="navbar-item gd-text-orange">
                            Ubicanos
                        </Link>
                        <Link to="/delivery" className="navbar-item gd-text-orange">
                            Delivery
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <Link to="/shop" className="navbar-item button">
                            Comprar
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
      </section>
    );
  }
}
