import { Fade } from 'react-slideshow-image';
import './Header.css'
// import { useState } from 'react';

const fadeImages = [
    {
      url: 'https://m.media-amazon.com/images/I/715F4V+STbL._SX3000_.jpg'
      
    },
    {
      url: 'https://m.media-amazon.com/images/I/61jLjFXfkrL._SX3000_.jpg'
    },
    {
      url: 'https://m.media-amazon.com/images/I/51O45Sl0WLL._SX3000_.jpg'
    },
  ];

function NavScrollExample() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       </ul>
      
    </div>
  </div>
</nav>

<div classNameName='slider'>
  <div classNameName='slideroverlay'></div>
    <div classNameName="slide-container">
      <Fade classNameName="fadee">
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img classNameName='imgset' style={{ width: '100%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>       
    </div>
  </>
  );
}

export default NavScrollExample;