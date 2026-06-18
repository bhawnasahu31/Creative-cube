import React from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="cc-header">

      {/* TOP BAR */}
      <div className="cc-topbar">
        <div className="cc-container">
          <span>🚚 Delivering across India</span>
          <div className="cc-pincode">
            <input type="text" placeholder="Enter Pincode" />
            <button>Check</button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="cc-main">
        <div className="cc-container">

          {/* LOGO */}
          <div className="cc-logo">
            <h1>Creative<span>Cube</span></h1>
            <p>Modular Home Furniture</p>
          </div>

          {/* SEARCH */}
          <div className="cc-search">
            <input type="text" placeholder="Search furniture, sofas, beds..." />
            <FaSearch />
          </div>

         {/* ICONS */}
          <div className="cc-icons">

            <Link to="/track" className="cc-icon">
              <FaTruck />
              <span>Track</span>
            </Link>

            <Link to="/profile" className="cc-icon">
              <FaUser />
              <span>Profile</span>
            </Link>

            <Link to="/wishlist" className="cc-icon">
              <FaHeart />
              <span>Wishlist</span>
            </Link>

            <Link to="/cart" className="cc-icon cart">
              <FaShoppingCart />
              <span>Cart</span>
              <small>2</small>
            </Link>

          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      {/* NAVIGATION */}
      <nav className="cc-nav">
        <div className="cc-container">

          {/* HOME */}
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>

          {/* LIVING MEGA MENU */}
          <div className="nav-item living-menu">
            <Link to="/living">Living</Link>

            <div className="mega-menu">

              {/* SOFAS */}
              <div className="mega-col">
                <Link to="/living">Living</Link>
                <Link to="/sofas/fabric">Fabric Sofas</Link>
                <Link to="/sofas/leather">Leather Sofas</Link>
                <Link to="/sofas/corner">Corner Sofas</Link>
                <Link to="/sofas/wooden">Wooden Sofas</Link>
                <Link to="/sofas/sets">Sofa Sets</Link>
                <Link to="/sofas/beds">Sofa Beds</Link>
              </div>

              {/* SEATING */}
              <div className="mega-col">
                <h4>Seating</h4>
                <Link to="/seating/recliners">Recliners</Link>
                <Link to="/seating/single-seaters">Single Seaters</Link>
                <Link to="/seating/three-seaters">Three Seaters</Link>
              </div>

              {/* TABLES */}
              <div className="mega-col">
                <h4>Tables</h4>
                <Link to="/tables/center">Center Tables</Link>
                <Link to="/tables/coffee">Coffee Tables</Link>
                <Link to="/tables/side">Side Tables</Link>
                <Link to="/tables/nesting">Nesting Tables</Link>
              </div>

            </div>
          </div>

          {/* OTHER NAV ITEMS */}
          <div className="nav-item living-menu">
            <Link to="/bedroom">Bedroom</Link>
            <div className="mega-menu">
              <div className="mega-col">
                <h4>Beds</h4>
                <Link to="/beds/king">King Size Beds</Link>
                <Link to="/beds/queen">Queen Size Beds</Link>
                <Link to="/beds/storage">Storage Beds</Link>
                <Link to="/beds/hydraulic">Hydraulic Beds</Link>
              </div>

              <div className="mega-col">
                <h4>Storage</h4>
                <Link to="/wardrobe/openable">Openable Wardrobe</Link>
                <Link to="/dresser">Dressers</Link>
              </div>

              <div className="mega-col">
                <h4>Others</h4>
                <Link to="/bedside">Bedside Tables</Link>
                <Link to="/mattress">Mattresses</Link>
                <Link to="/mirrors">Bedroom Mirrors</Link>
              </div>

            </div>
          </div>

          <div className="nav-item living-menu">
            <Link to="/dining">Dining</Link>

            <div className="mega-menu">

              {/* SOFAS */}
              <div className="mega-col">
                <h4>Dining Table Sets</h4>
                <Link to="/dining/fourseater">4 Seater Dining Table Sets</Link>
                <Link to="/dining/sixseater">6 Seater Dining Table Sets</Link>
                <Link to="/dining/eightseater">8 Seater Dining Table Sets</Link>
              </div>

              {/* SEATING */}
              <div className="mega-col">
                <h4>Dining Storage</h4>
                <Link to="/dining/diningunits">Crockery Units and Dining Cabinets</Link>

              </div>

            </div>
          </div>

          <div className="nav-item living-menu">
            <Link to="/office">Study and Office Furniture</Link>
            <div className="mega-menu">
              <div className="mega-col">
                <h4>Tables</h4>
                <Link to="/office/computer">Computer Tables</Link>
                <Link to="/office/desks">Office Desks</Link>
               
              </div>

              <div className="mega-col">
                <h4>Chairs</h4>
                <Link to="/office/chairs">Office Chairs</Link>
                <Link to="/office/executive">Executive Chairs</Link>
               
              </div>

              <div className="mega-col">
                <h4>Storage</h4>
                <Link to="/office/cabinets">File Cabinets</Link>
                <Link to="/office/bookshelf">Bookshelves</Link>
              </div>

            </div>
          </div>

          <div className="nav-item living-menu">
            <Link to="/modular">Modular</Link>
            <div className="mega-menu">
              <div className="mega-col">
                <h4>Kitchen</h4>
                <Link to="/modular-kitchen">Modular Kitchen</Link>
                <Link to="/kitchen-cabinets">Kitchen Cabinets</Link>
                <Link to="/kitchen-storage">Kitchen Storage</Link>
              </div>

              <div className="mega-col">
                <h4>Wardrobe</h4>
                <Link to="/sliding-wardrobe">Sliding Wardrobe</Link>
                <Link to="/walk-in-closet">Walk-in Closet</Link>
              </div>

              <div className="mega-col">
                <h4>TV Units</h4>
                <Link to="/tv-wall-units">TV Wall Units</Link>
                <Link to="/tv-stands">TV Stands</Link>
              </div>

            </div>
          </div>


          <div className="nav-item living-menu">
            <Link to="/offers">Offers</Link>
            <div className="mega-menu">
             <div className="mega-col">
                  <h4>Discounts</h4>
                  <Link to="/flat-50-off">Flat 50% Off</Link>
                  <Link to="/combo-deals">Combo Deals</Link>
                  </div>

                  <div className="mega-col">
                  <h4>Clearance</h4>
                  <Link to="/stock-clearance">Stock Clearance</Link>
                  <Link to="/limited-time-deals">Limited Time Deals</Link>
                   </div>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;