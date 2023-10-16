import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catid = parseInt(useParams().id)
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort,setSort] = useState(null)
  return (
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h2>Product Categories</h2>
          <div className="inputitem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputitem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputitem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filteritem">
          <h2>Filter by Price</h2>
          <div className="inputitem">
            <span>0</span>
            <input type="range" min={0} max={1000}  onChange={(e)=>setmaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filteritem">
          <h2>Sort By</h2>
          <div className="inputitem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price(Lowest first)</label>
          </div>
          <div className="inputitem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
            <label htmlFor="asc">Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <List catid={catid} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default Products;
