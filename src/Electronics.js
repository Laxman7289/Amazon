import React, { useState,useEffect } from 'react'
import './Electronics.css'
import Eledata from './Eledata.json'

const Electronics = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fun() {
      setData(await Eledata)
    } fun()
  }, [])
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
                <a className="nav-link" href="#">Link</a>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='Container-fluid'>
        <div className='heading'>
          Service
        </div>
        <div className='row'>
                <div className="card">
                  {
                    Eledata.map((element, i, k) => {
                      return (
                        <div key={i}>
                          <img className='imgset' variant="top" src={element.imge} />
                          <h5>{element.title}</h5>
                          <h3>{element.price}</h3>
                          <h4>{element.available}</h4>
                        </div>
                      )
                    })
                  }
                  {/* <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Wireless/Shivani/Vivo/vivo-BAU-Page_Amazon_01.jpg" className="card-img-top" alt="Mobile" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div> */}
                </div>
              </div>
            </div>
    </>
  )
}
export default Electronics
