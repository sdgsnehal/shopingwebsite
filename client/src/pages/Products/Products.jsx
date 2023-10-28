import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catid = parseInt(useParams().id);
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedsubcat, setSelectedsubcat] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catid}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedsubcat(
      isChecked
        ? [...selectedsubcat, value]
        : selectedsubcat.filter((item) => item !== value)
    );
  };
  console.log(selectedsubcat);
  return (
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputitem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filteritem">
          <h2>Filter by Price</h2>
          <div className="inputitem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setmaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filteritem">
          <h2>Sort By</h2>
          <div className="inputitem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price(Lowest first)</label>
          </div>
          <div className="inputitem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
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
        <List catid={catid} maxPrice={maxPrice} sort={sort} subcat={selectedsubcat}/>
      </div>
    </div>
  );
};

export default Products;
