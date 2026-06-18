// FABRIC SOFAS
import sofa1 from "../assets/sofa1.jpg";
import sofa2 from "../assets/sofa2.jpg";
import sofa3 from "../assets/sofa3.jpg";
import sofa4 from "../assets/sofa4.jpg";

// LEATHER
import leather1 from "../assets/leather1.jpg";
import leather2 from "../assets/leather2.jpg";
import leather3 from "../assets/leather3.jpg";
import leather4 from "../assets/leather4.jpg";

// CORNER
import corner1 from "../assets/corner1.jpg";
import corner2 from "../assets/corner2.jpg";
import corner3 from "../assets/corner3.jpg";
import corner4 from "../assets/corner4.jpg";

// RECLINERS
import recliner1 from "../assets/recliner1.jpg";
import recliner2 from "../assets/recliner2.jpg";
import recliner3 from "../assets/recliner3.jpg";
import recliner4 from "../assets/recliner4.jpg";

// SINGLE / TWO / THREE
import single1 from "../assets/single1.jpg";
import single2 from "../assets/single2.jpg";
import single3 from "../assets/single3.jpg";
import single4 from "../assets/single4.jpg";


import three1 from "../assets/three1.jpg";
import three2 from "../assets/three2.jpg";
import three3 from "../assets/three3.jpg";
import three4 from "../assets/three4.jpg";

// SOFA BEDS
import bed1 from "../assets/sofabed1.jpg";
import bed2 from "../assets/sofabed2.jpg";
import bed3 from "../assets/sofabed3.jpg";
import bed4 from "../assets/sofabed4.jpg";

// SOFA SETS
import set1 from "../assets/sofaset1.jpg";
import set2 from "../assets/sofaset2.jpg";
import set3 from "../assets/sofaset3.jpg";
import set4 from "../assets/sofaset4.jpg";

// WOODEN
import wooden1 from "../assets/wooden1.jpg";
import wooden2 from "../assets/wooden2.jpg";
import wooden3 from "../assets/wooden3.jpg";
import wooden4 from "../assets/wooden4.jpg";
// CENTER TABLES
import center1 from "../assets/centertable1.jpg";
import center2 from "../assets/centertable2.jpg";
import center3 from "../assets/centertable3.jpg";
import center4 from "../assets/centertable4.jpg";

// COFFEE TABLES
import coffee1 from "../assets/coffee1.jpg";
import coffee2 from "../assets/coffee2.jpg";
import coffee3 from "../assets/coffee3.jpg";
import coffee4 from "../assets/coffee4.jpg";

// SIDE TABLES
import side1 from "../assets/side1.jpg";
import side2 from "../assets/side2.jpg";
import side3 from "../assets/side3.jpg";
import side4 from "../assets/side4.jpg";

// NESTING TABLES
import nest1 from "../assets/nest1.jpg";
// import nest2 from "../assets/nest2.jpg";
// import nest3 from "../assets/nest3.jpg";
// import nest4 from "../assets/nest4.jpg";
// DINING 4 SEATER
import dining4_1 from "../assets/dining4_1.jpg";
import dining4_2 from "../assets/dining4_2.jpg";
import dining4_3 from "../assets/dining4_3.jpg";
import dining4_4 from "../assets/dining4_4.jpg";

// DINING 6 SEATER
import dining6_1 from "../assets/dining6_1.jpg";
import dining6_2 from "../assets/dining6_2.jpg";
import dining6_3 from "../assets/dining6_3.jpg";
import dining6_4 from "../assets/dining6_4.jpg";

// DINING 8 SEATER
import dining8_1 from "../assets/dining8_1.jpg";
import dining8_2 from "../assets/dining8_2.jpg";
import dining8_3 from "../assets/dining8_3.jpg";
import dining8_4 from "../assets/dining8_4.jpg";

// DINING UNITS
import diningunit1 from "../assets/diningunit1.jpg";
import diningunit2 from "../assets/diningunit2.jpg";
import diningunit3 from "../assets/diningunit3.jpg";
import diningunit4 from "../assets/diningunit4.jpg";
// COMPUTER TABLES
import computer1 from "../assets/ct1.jpg";
import computer2 from "../assets/ct2.jpg";

// OFFICE DESKS
import desk1 from "../assets/od1.jpg";
import desk2 from "../assets/od2.jpg";

// CHAIRS
import chair1 from "../assets/oc1.jpg";
import chair2 from "../assets/oc2.jpg";

// EXECUTIVE
import executive1 from "../assets/ec1.jpg";
import executive2 from "../assets/ec2.jpg";

// CABINETS
import cabinet1 from "../assets/fc1.jpg";
import cabinet2 from "../assets/fc2.jpg";

// BOOKSHELVES
import shelf1 from "../assets/bs1.jpg";
import shelf2 from "../assets/bs2.jpg";

const products = [

  // ---------------- FABRIC ----------------
  {
    id: 1,
    category: "fabric",
    name: "Classic Fabric Sofa",
    price: "₹24,999",
    img: sofa1,
    desc: "Classic fabric sofa perfect for cozy living rooms.",
    features: ["Solid Wood Frame", "Soft Fabric", "High Density Foam", "1 Year Warranty"],
  },
  {
    id: 2,
    category: "fabric",
    name: "Modern Fabric Sofa",
    price: "₹29,999",
    img: sofa2,
    desc: "Modern fabric sofa with premium comfort.",
    features: ["Engineered Wood", "Premium Fabric", "Ergonomic Design"],
  },

  // ---------------- LEATHER ----------------
  {
    id: 10,
    category: "leather",
    name: "Premium Leather Sofa",
    price: "₹39,999",
    img: leather1,
    desc: "Premium leather sofa with luxurious finish.",
    features: ["Genuine Leather", "Strong Frame", "Easy Maintenance"],
  },

  // ---------------- CORNER ----------------
  {
    id: 20,
    category: "corner",
    name: "Modern Corner Sofa",
    price: "₹45,999",
    img: corner1,
    desc: "Modern L-shape corner sofa for spacious seating.",
    features: ["L-Shape Design", "Space Saving", "Premium Fabric"],
  },

  // ---------------- RECLINER ----------------
  {
    id: 30,
    category: "recliner",
    name: "Luxury Recliner",
    price: "₹39,999",
    img: recliner2,
    desc: "Luxury recliner with smooth reclining mechanism.",
    features: ["Push Back Recline", "Plush Cushions", "Metal Frame"],
  },

  // ---------------- SINGLE ----------------
  {
    id: 40,
    category: "single",
    name: "Luxury Single Seater",
    price: "₹21,999",
    img: single3,
    desc: "Elegant single seater chair with premium comfort.",
    features: ["Compact Size", "Premium Fabric", "Strong Legs"],
  },

  // ---------------- TWO ----------------
  

  // ---------------- THREE ----------------
  {
    id: 60,
    category: "three",
    name: "Luxury Three Seater",
    price: "₹39,999",
    img: three3,
    desc: "Spacious three seater sofa with elegant look.",
    features: ["Wide Seating", "Premium Fabric", "Durable Frame"],
  },

  // ---------------- SOFA BED ----------------
  {
    id: 70,
    category: "bed",
    name: "Luxury Sofa Bed",
    price: "₹47,999",
    img: bed4,
    desc: "Multi-purpose sofa bed with premium comfort.",
    features: ["Sofa + Bed", "Storage Space", "Soft Mattress"],
  },

  // ---------------- SOFA SET ----------------
  {
    id: 80,
    category: "set",
    name: "Luxury Fabric Sofa Set",
    price: "₹59,999",
    img: set3,
    desc: "Complete luxury sofa set for large families.",
    features: ["3+1+1 Seating", "Premium Fabric", "Strong Frame"],
  },

  // ---------------- WOODEN ----------------
  {
    id: 90,
    category: "wooden",
    name: "Sheesham Wood Sofa",
    price: "₹39,999",
    img: wooden3,
    desc: "Strong sheesham wood sofa with classic look.",
    features: ["Sheesham Wood", "Natural Finish", "Long Lasting"],
  },
  {
  id: 100,
  category: "center",
  name: "Modern Center Table",
  price: "₹12,999",
  img: center1,
  desc: "Stylish modern center table for living room.",
  features: ["Solid Wood", "Modern Design", "Strong Build"],
},

{
  id: 101,
  category: "center",
  name: "Glass Top Center Table",
  price: "₹15,999",
  img: center2,
  desc: "Elegant glass top center table.",
  features: ["Glass Top", "Metal Frame", "Premium Look"],
},
{
  id: 110,
  category: "coffee",
  name: "Classic Coffee Table",
  price: "₹9,999",
  img: coffee1,
  desc: "Perfect coffee table for modern homes.",
  features: ["Compact Size", "Wooden Finish", "Durable"],
},

{
  id: 111,
  category: "coffee",
  name: "Round Coffee Table",
  price: "₹11,999",
  img: coffee2,
  desc: "Round coffee table with stylish design.",
  features: ["Round Design", "Strong Legs", "Modern Look"],
},
{
  id: 120,
  category: "side",
  name: "Wooden Side Table",
  price: "₹4,999",
  img: side1,
  desc: "Compact wooden side table for sofa.",
  features: ["Solid Wood", "Compact", "Stylish"],
},

{
  id: 121,
  category: "side",
  name: "Drawer Side Table",
  price: "₹6,999",
  img: side3,
  desc: "Side table with storage drawer.",
  features: ["Storage Drawer", "Wooden Finish", "Durable"],
},
{
  id: 130,
  category: "nesting",
  name: "3 Piece Nesting Table",
  price: "₹8,999",
  img: nest1,
  desc: "Space saving nesting table set.",
  features: ["3 Tables", "Modern Look", "Space Saving"],
},
{
  id: 112,
  category: "coffee",
  name: "Industrial Coffee Table",
  price: "₹13,499",
  img: coffee3,
  desc: "Industrial style coffee table.",
  features: ["Metal Frame", "Wood Top", "Modern Design"]
},

{
  id: 113,
  category: "coffee",
  name: "Minimal Coffee Table",
  price: "₹10,499",
  img: coffee4,
  desc: "Minimal design coffee table.",
  features: ["Compact", "Strong Legs", "Modern Look"]
},
{
  id: 102,
  category: "center",
  name: "Wooden Storage Center Table",
  price: "₹18,999",
  img: center3,
  desc: "Center table with storage.",
  features: ["Storage Space","Solid Wood","Modern Design"]
},

{
  id: 103,
  category: "center",
  name: "Luxury Marble Center Table",
  price: "₹22,999",
  img: center4,
  desc: "Premium marble center table.",
  features: ["Marble Top","Premium Finish","Strong Frame"]
},
{
  id: 120,
  category: "side",
  name: "Wooden Side Table",
  price: "₹4,999",
  img: side1,
  desc: "Compact wooden side table for sofa.",
  features: ["Solid Wood", "Compact", "Stylish"],
},

{
  id: 121,
  category: "side",
  name: "Drawer Side Table",
  price: "₹6,999",
  img: side3,
  desc: "Side table with storage drawer.",
  features: ["Storage Drawer", "Wooden Finish", "Durable"],
},
// ---------------- DINING 4 SEATER ----------------
{
  id: 200,
  category: "4seater",
  name: "Modern 4 Seater Dining Table",
  price: "₹24,999",
  img: dining4_1,
  images: [dining4_1, dining4_2, dining4_3, dining4_4],
  desc: "Elegant 4 seater dining table for modern homes.",
  features: ["Solid Wood", "Modern Design", "Strong Legs"],
},

// ---------------- DINING 6 SEATER ----------------
{
  id: 201,
  category: "6seater",
  name: "Premium 6 Seater Dining Set",
  price: "₹38,999",
  img: dining6_1,
  images: [dining6_1, dining6_2, dining6_3, dining6_4],
  desc: "Premium 6 seater dining table perfect for families.",
  features: ["Sheesham Wood", "Luxury Finish", "Comfort Seating"],
},

// ---------------- DINING 8 SEATER ----------------
{
  id: 202,
  category: "8seater",
  name: "Luxury 8 Seater Dining Table",
  price: "₹59,999",
  img: dining8_1,
  images: [dining8_1, dining8_2, dining8_3, dining8_4],
  desc: "Spacious 8 seater dining table for large families.",
  features: ["Premium Wood", "Luxury Look", "Durable Frame"],
},

// ---------------- DINING UNITS ----------------
{
  id: 203,
  category: "diningunits",
  name: "Modern Crockery Unit",
  price: "₹18,999",
  img: diningunit1,
  images: [diningunit1, diningunit2, diningunit3, diningunit4],
  desc: "Elegant crockery unit for dining room storage.",
  features: ["Storage Shelves", "Modern Design", "Durable Build"],
},
// ---------------- COMPUTER TABLES ----------------
{
  id: 901,
  category: "computer",
  name: "Modern Computer Table",
  price: "₹5,999",
  img: computer1,
  desc: "Compact computer table perfect for home office.",
  features: ["Engineered Wood", "Keyboard Tray", "Compact Design"],
},

{
  id: 902,
  category: "computer",
  name: "Gaming Computer Desk",
  price: "₹8,999",
  img: computer2,
  desc: "Spacious gaming computer desk with modern look.",
  features: ["Large Surface", "Strong Metal Frame", "Cable Management"],
},

// ---------------- OFFICE DESKS ----------------
{
  id: 310,
  category: "desks",
  name: "Executive Office Desk",
  price: "₹12,999",
  img: desk1,
  desc: "Professional office desk for workspace.",
  features: ["Premium Finish", "Drawer Storage", "Durable Build"],
},

{
  id: 311,
  category: "desks",
  name: "Modern Work Desk",
  price: "₹10,999",
  img: desk2,
  desc: "Minimal modern office desk.",
  features: ["Compact Design", "Engineered Wood", "Strong Frame"],
},

// ---------------- OFFICE CHAIRS ----------------
{
  id: 320,
  category: "chairs",
  name: "Ergonomic Office Chair",
  price: "₹6,999",
  img: chair1,
  desc: "Ergonomic chair designed for long working hours.",
  features: ["Mesh Back", "Height Adjustable", "Comfort Cushion"],
},

{
  id: 321,
  category: "chairs",
  name: "Comfort Office Chair",
  price: "₹5,499",
  img: chair2,
  desc: "Comfortable office chair for daily use.",
  features: ["Soft Cushion", "Strong Wheels", "Modern Design"],
},

// ---------------- EXECUTIVE CHAIRS ----------------
{
  id: 330,
  category: "executive",
  name: "Luxury Executive Chair",
  price: "₹14,999",
  img: executive1,
  desc: "Premium executive chair with leather finish.",
  features: ["Leather Finish", "Recline Feature", "Premium Comfort"],
},

{
  id: 331,
  category: "executive",
  name: "High Back Executive Chair",
  price: "₹16,999",
  img: executive2,
  desc: "High back chair for office executives.",
  features: ["High Back", "Adjustable Height", "Ergonomic Design"],
},

// ---------------- FILE CABINETS ----------------
{
  id: 340,
  category: "cabinets",
  name: "Metal File Cabinet",
  price: "₹7,999",
  img: cabinet1,
  desc: "Secure metal file cabinet for office storage.",
  features: ["3 Drawers", "Lock System", "Durable Metal"],
},

{
  id: 341,
  category: "cabinets",
  name: "Wooden File Cabinet",
  price: "₹9,999",
  img: cabinet2,
  desc: "Elegant wooden cabinet for office documents.",
  features: ["Wood Finish", "Drawer Storage", "Modern Design"],
},

// ---------------- BOOKSHELVES ----------------
{
  id: 350,
  category: "bookshelf",
  name: "Modern Bookshelf",
  price: "₹6,999",
  img: shelf1,
  desc: "Modern bookshelf for study room.",
  features: ["Multiple Shelves", "Strong Frame", "Stylish Look"],
},

{
  id: 351,
  category: "bookshelf",
  name: "Wooden Book Rack",
  price: "₹8,499",
  img: shelf2,
  desc: "Spacious wooden bookshelf.",
  features: ["Solid Wood", "5 Shelves", "Durable Build"],
},


// {
//   id: 131,
//   category: "nesting",
//   name: "Luxury Nesting Tables",
//   price: "₹12,499",
//   img: nest4,
//   desc: "Luxury marble nesting tables.",
//   features: ["Marble Top", "Premium Design", "Strong Build"],
// },
];

export default products;