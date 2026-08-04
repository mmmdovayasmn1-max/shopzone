import "./FeaturedProductsHim.css";
import { useState } from "react";
import blackHoodie from "../../assets/images/HIM/black-hoodie.png";
import bluePerfume from "../../assets/images/HIM/blue-perfume.png";
import runningSneakers from "../../assets/images/HIM/running-sneakers.png";
import luxuryWatch from "../../assets/images/HIM/luxury-watch.png";
import nikeAirMax from "../../assets/images/HIM/nike-air-max.png";
import diorSauvage from "../../assets/images/HIM/dior-sauvage.png";
import denimJacket from "../../assets/images/HIM/denim-jacket.png";
import casioWatch from "../../assets/images/HIM/casio-watch.png";
import blueHoodie from "../../assets/images/HIM/blue-hoodie.png";
import blueDeChanel from "../../assets/images/HIM/blue-de-chanel.png";
import adidasCampus from "../../assets/images/HIM/adidas-campus.png";
import omegaWatch from "../../assets/images/HIM/omega-watch.png";
import pumaRSX from "../../assets/images/HIM/puma-rsx.png";
import versaceEros from "../../assets/images/HIM/versace-eros.png";
import oversizedTshirt from "../../assets/images/HIM/oversized-tshirt.png";
import tissotPRX from "../../assets/images/HIM/tissot-prx.png";
const FeaturedProductsHim = () => {
  const [activeCategory, setActiveCategory]= useState("All");
  const products = [
     {
    id: 1,
    name: "Black Hoodie",
    category: "Clothing",
    price: 89,
    image: blackHoodie,
  },
  {
    id: 2,
    name: "Running Sneakers",
    category: "Sneakers",
    price: 113,
    image: runningSneakers,
  },
  {
    id: 3,
    name: "Rolex Watch",
    category: "Watches",
    price: 220,
    image: luxuryWatch, // <-- səndə bu addır
  },
  {
    id: 4,
    name: "Valentino Born In Roma",
    category: "Grooming",
    price: 400,
    image: bluePerfume,
  },
  {
  id: 5,
  name: "Dior Sauvage",
  category: "Grooming",
  price: 350,
  image: diorSauvage,
},
{
  id: 6,
  name: "Nike Air Max",
  category: "Sneakers",
  price: 180,
  image: nikeAirMax,
},
{
  id: 7,
  name: "Denim Jacket",
  category: "Clothing",
  price: 120,
  image: denimJacket,
},
{
  id: 8,
  name: "Casio Watch",
  category: "Watches",
  price: 95,
  image: casioWatch,
},
{
  id: 9,
  name: "Blue Hoodie",
  category: "Clothing",
  price: 99,
  image: blueHoodie,
},
{
  id: 10,
  name: "Bleu De Chanel",
  category: "Grooming",
  price: 390,
  image: blueDeChanel,
},
{
  id: 11,
  name: "Adidas Campus",
  category: "Sneakers",
  price: 170,
  image: adidasCampus,
},
{
  id: 12,
  name: "Omega Watch",
  category: "Watches",
  price: 450,
  image: omegaWatch,
},
{
  id: 13,
  name: "Puma RS-X",
  category: "Sneakers",
  price: 160,
  image: pumaRSX,
},
{
  id: 14,
  name: "Versace Eros",
  category: "Grooming",
  price: 320,
  image: versaceEros,
},
{
  id: 15,
  name: "Oversized T-Shirt",
  category: "Clothing",
  price: 75,
  image: oversizedTshirt,
},
{
  id: 16,
  name: "Tissot PRX",
  category: "Watches",
  price: 380,
  image: tissotPRX,
},
  ];
  const filteredProducts =
  activeCategory === "All"
    ? products
    : products.filter(
        (product) => product.category === activeCategory
      );

  return (
    <section className="featured-products-him">

      <div className="featured-header-him">
        <h2>Featured Products</h2>
        <p>Handpicked just for you</p>
      </div>

      <div className="categories-him">
       <button
  className={activeCategory === "All" ? "active-him" : ""}
  onClick={() => setActiveCategory("All")}
>
  All
</button>

<button
  className={activeCategory === "Clothing" ? "active-him" : ""}
  onClick={() => setActiveCategory("Clothing")}
>
  Clothing
</button>

<button
  className={activeCategory === "Sneakers" ? "active-him" : ""}
  onClick={() => setActiveCategory("Sneakers")}
>
  Sneakers
</button>

<button
  className={activeCategory === "Watches" ? "active-him" : ""}
  onClick={() => setActiveCategory("Watches")}
>
  Watches
</button>

<button
  className={activeCategory === "Grooming" ? "active-him" : ""}
  onClick={() => setActiveCategory("Grooming")}
>
  Grooming
</button>
      </div>

      <div className="product-grid-him">
  {filteredProducts.map((product) => (
    <div className="product-card-him" key={product.id}>
      💙
      <div className="product-image-him">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <p className="price-him">${product.price}</p>

      <button>Buy Now</button>
    </div>
  ))}
</div>

    </section>
  );
};

export default FeaturedProductsHim;