import React from "react";
import Jumbotron from '../components/cards/Jumbotron'
import NewArrivals from "../components/home/NewArrivals"
import BestSellers from "../components/home/BestSellers"
import "./site.css";
import CategoryList from '../components/category/CategoryList'
import SubList from '../components/sub/SubList'

const Home = () => {

  
  return(
    <>
    <div className="jumbotron text-primary h1 font-weight-bold text-center" >
      <Jumbotron
      text = {["Latest product", "New arrivals", "Best sellers"]}
      />
    </div>

    <h4 className = "text-center p-3 mb-5 mt-5 display-4 jumbotron">
      New Arrivals
    </h4>
      <NewArrivals/>

    <br/>
    <br/>

    <h4 className = "text-center p-3 mb-5 mt-5 display-4 jumbotron">
      Best Sellers
    </h4>
    <BestSellers/>

    <br/>
    <br/>

    <h4 className = "text-center p-3 mb-5 mt-5 display-4 jumbotron">
      Category List
    </h4>
    <CategoryList/>
    <br/>
    <br/>
    <h4 className = "text-center p-3 mb-5 mt-5 display-4 jumbotron">
      Sub List
    </h4>
    <SubList/>


    <br/>
    <br/>
    </>
  );
}


export default Home;