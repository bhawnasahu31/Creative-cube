
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collection";
import ProductSlider from "./components/ProductSlider";
import CustomerWords from "./components/CustomerWords";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";
import TrackPage from "./pages/TrackPage";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Register from "./pages/Register";

import OfferBar from "./components/OfferBar";

import AuthProvider from "./context1/AuthProvider";



import CartProvider from "./context1/CartProvider";

import WishlistProvider from "./context1/WishlistProvider"

import ModularKitchen from "./pages/ModularKitchen";
import KitchenCabinets from "./pages/KitchenCabinets";
import KitchenStorage from "./pages/KitchenStorage";
import SlidingWardrobe1 from "./pages/SlidingWardrobe1";
import WalkInCloset from "./pages/WalkInCloset";
import TVWallUnits from "./pages/TVWallUnits";
import TVStands from "./pages/TVStands";

import LivingHome from "./pages/LivingHome";
import BedroomHome from "./pages/BedroomHome";
import DiningHome from "./pages/DiningHome";
import OfficeHome from "./pages/OfficeHome";

// Sofa Pages
import FabricSofas from "./pages/FabricSofas";
import LeatherSofas from "./pages/LeatherSofas";
import CornerSofas from "./pages/CornerSofas";
import WoodenSofas from "./pages/WoodenSofas";
import SofaSets from "./pages/SofaSets";
import SofaBeds from "./pages/SofaBeds";

// Seating Pages
import Recliners from "./pages/Recliners";
import SingleSeaters from "./pages/SingleSeaters";
import ThreeSeaters from "./pages/ThreeSeaters";

// Tables
import CenterTables from "./pages/CenterTables";
import CoffeeTables from "./pages/CoffeeTables";
import SideTables from "./pages/SideTables";
import NestingTables from "./pages/NestingTables";

// Product Detail
import ProductDetail from "./pages/ProductDetail";
import FourSeaterDining from "./pages/FourSeaterDining";
import SixSeaterDining from "./pages/SixSeaterDining";
import EightSeaterDining from "./pages/EightSeaterDining";
import DiningUnits from "./pages/DiningUnits";
// Beds
import KingBeds from "./pages/KingBeds";
import QueenBeds from "./pages/QueenBeds";
import StorageBeds from "./pages/StorageBeds";
import HydraulicBeds from "./pages/HydraulicBeds";

// Wardrobe
// import SlidingWardrobe from "./pages/SlidingWardrobe";
import OpenableWardrobe from "./pages/OpenableWardrobe";

// Others
// import Dresser from "./pages/Dresser";
import BedsideTables from "./pages/BedsideTables";
import Mattress from "./pages/Mattress";
import Mirrors from "./pages/Mirrors";
import ComputerTables from "./pages/ComputerTables";
import OfficeDesks from "./pages/OfficeDesks";

import OfficeChairs from "./pages/OfficeChairs";
import ExecutiveChairs from "./pages/ExecutiveChairs";

import FileCabinets from "./pages/FileCabinets";
import Bookshelves from "./pages/Bookshelves";

import Flat50Off from "./pages/Flat50Off";
import ComboDeals from "./pages/ComboDeals";
import StockClearance from "./pages/StockClearance";
import LimitedTimeDeals from "./pages/LimitedTimeDeals";
import ModularKitchenHome from "./pages/ModularKitchenHome";
              import OffersHome from "./pages/OffersHome";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
    <BrowserRouter>
      <Header />

      <Routes>

        {/* Home */}
        {/* HOME */}
              <Route
                path="/"
                element={
                  <>
                  <OfferBar />
                    <HeroSection />
                    <Collections />
                    <ProductSlider />
                    <CustomerWords />
                    <OurServices />
                  </>
                }
              />
                 
                 <Route path="/register" element={<Register />} />
              {/* WARDROBE */}

              {/* OTHER */}

              {/* USER SYSTEM */}
              <Route path="/track" element={<TrackPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />

        {/* Living */}
        <Route path="/living" element={<LivingHome />} />
        <Route path="/bedroom" element={<BedroomHome/>} />
        <Route path="/dining" element={<DiningHome/>} />
        <Route path="/office" element={<OfficeHome/>} />

        {/* Sofas */}
        <Route path="/sofas/fabric" element={<FabricSofas />} />
        <Route path="/sofas/leather" element={<LeatherSofas />} />
        <Route path="/sofas/corner" element={<CornerSofas />} />
        <Route path="/sofas/wooden" element={<WoodenSofas />} />
        <Route path="/sofas/sets" element={<SofaSets />} />
        <Route path="/sofas/beds" element={<SofaBeds />} />

        {/* Seating */}
        <Route path="/seating/recliners" element={<Recliners />} />
        <Route path="/seating/single-seaters" element={<SingleSeaters />} />
        <Route path="/seating/three-seaters" element={<ThreeSeaters />} />

        {/* Tables */}
        <Route path="/tables/center" element={<CenterTables />} />
        <Route path="/tables/coffee" element={<CoffeeTables />} />
        <Route path="/tables/side" element={<SideTables />} />
        <Route path="/tables/nesting" element={<NestingTables />} />

        {/* Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* DINING */}
        <Route path="/dining/fourseater" element={<FourSeaterDining />} />
        <Route path="/dining/sixseater" element={<SixSeaterDining />} />
        <Route path="/dining/eightseater" element={<EightSeaterDining />} />
        <Route path="/dining/diningunits" element={<DiningUnits />} />
          {/* Beds */}
        <Route path="/beds/king" element={<KingBeds />} />
        <Route path="/beds/queen" element={<QueenBeds />} />
        <Route path="/beds/storage" element={<StorageBeds />} />
        <Route path="/beds/hydraulic" element={<HydraulicBeds />} />

        {/* Wardrobe */}
        
       <Route path="/wardrobe/openable" element={<OpenableWardrobe />} />

        {/* Others */}
        {/* <Route path="/dresser" element={<Dresser />} /> */}
        <Route path="/bedside" element={<BedsideTables />} />
        <Route path="/mattress" element={<Mattress />} />
        <Route path="/mirrors" element={<Mirrors />} />
         <Route path="/office/computer" element={<ComputerTables />} />
        <Route path="/office/desks" element={<OfficeDesks />} />
       
        <Route path="/office/chairs" element={<OfficeChairs />} />
        <Route path="/office/executive" element={<ExecutiveChairs />} />
       
        <Route path="/office/cabinets" element={<FileCabinets />} />
        <Route path="/office/bookshelf" element={<Bookshelves />} />
        <Route path="/modular-kitchen" element={<ModularKitchen />} />
              <Route path="/kitchen-cabinets" element={<KitchenCabinets />} />
              <Route path="/kitchen-storage" element={<KitchenStorage />} />
              <Route path="/sliding-wardrobe" element={<SlidingWardrobe1 />} />
              <Route path="/walk-in-closet" element={<WalkInCloset />} />
              <Route path="/tv-wall-units" element={<TVWallUnits />} />
              <Route path="/tv-stands" element={<TVStands />} />

              <Route path="/flat-50-off" element={<Flat50Off />} />
              <Route path="/combo-deals" element={<ComboDeals />} />
              <Route path="/stock-clearance" element={<StockClearance />} />
              <Route path="/limited-time-deals" element={<LimitedTimeDeals />} />
               
               <Route path="/modular" element={<ModularKitchenHome />} />
<Route path="/offers" element={<OffersHome />} />
              


        {/* Fallback */}
        <Route path="*" element={<h1 style={{textAlign:"center"}}>Page Not Found</h1>} />

      </Routes>
      <Footer/>
      
                            <FloatingWhatsApp
        phoneNumber="6262880001"
        accountName="Creative Cube"
        
        statusMessage="Typically replies within 5 minutes"
        chatMessage="Hello 👋 Welcome to Creative Cube Furniture!"
        placeholder="Type a message..."
      />
      
    </BrowserRouter>
    </WishlistProvider>
      </CartProvider>
    </AuthProvider>
    
  );
}

export default App;
