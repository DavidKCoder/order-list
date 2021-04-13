import React from 'react';

function NavigationBar() {
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-toggleable-xs navbar-toggleable-sm navbar-toggleable-md">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item navbar-brand"><a href="" className="nav-link"></a></li>
            <li className="nav-item dropdown">
              <a href="#" className="dropdown-item " id="menu-link" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">Menu <i className="fa fa-chevron-down"></i></a>
              <ul role="menu" className="dropdown-menu dropdown-parent">
                <a className="dropdown-item dropdown-child" href="#breakfast">Breakfast</a>
                <a className="dropdown-item dropdown-child" href="#lunch">Lunch</a>
                <a className="dropdown-item dropdown-child" href="#dessert">Dessert</a>
                <a className="dropdown-item dropdown-child" href="#coffee">Coffee</a>
              </ul>
            </li>
            <li className="nav-item"><a href="" className="nav-link">About</a></li>
            <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar;