import React,{useContext} from "react";
import { WishlistContext } from "../context1/WishlistContext";
import "./Wishlist.css";

const Wishlist = () => {

 const { wishlist, removeWishlist } = useContext(WishlistContext);

 return(

  <div className="wishlist-container">

   <h2 className="wishlist-title">My Wishlist</h2>

   {wishlist.length === 0 ? (

    <p className="empty-msg">Your wishlist is empty ❤️</p>

   ) : (

    <div className="wishlist-grid">

     {wishlist.map((item)=>(
      <div className="wishlist-card" key={item.id}>

       <h4>{item.name}</h4>

       <button
        className="remove-btn"
        onClick={()=>removeWishlist(item.id)}
       >
        Remove
       </button>

      </div>
     ))}

    </div>

   )}

  </div>

 )

}

export default Wishlist;