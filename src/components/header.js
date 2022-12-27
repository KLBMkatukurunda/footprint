import React from 'react';
import Link from 'gatsby-link';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };


  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/footprint-logo.png')} />
          </Link>
          <Link to="/About us"> <img src={require('../images/about us-logo.png')}/><img src={require('../images/about us.png')} /></Link>
          <Link to="/For Business"><img src={require('../images/for business.png')} /></Link>
          <Link to="/For individuals"><img src={require('../images/for individuals.png')} /></Link>
          <Link to="/Resources"><img src={require('../images/resources.png')} /></Link>
          <Link to="/Contact"><img src={require('../images/contact us.png')}/></Link>
          <Link to="/workshops"><img src={require('../images/search.png')}/></Link>
          <Link to="/workshops"><img src={require('../images/contact.svg')}/></Link>
          <Link to="/workshops"><img src={require('../images/settings-1.png')}/></Link>
        
        </div>
      </div>
    );
  }
}

export default Header;
