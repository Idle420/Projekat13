// import React from "react"
// import {Card, Tabs} from "antd"
// import {Link} from "react-router-dom"
// import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import download from "../../images/download.jpg";
// import ProductListItems from './ProductListItems'
// import StarRating from 'react-star-ratings'
// import RatingModal from '../modal/RatingModal'

// const {TabPane} = Tabs
// const SingleProduct = ({product}) => {

//   const {title, images, description, _id} = product

//     return (
//         <>
//         <div className="col-md-7">
//             {images && images.length ? 
//          (<Carousel showArrows={true} autoPlay infiniteLoop>
//                 {images && images.map((i) => <img src = {i.url} key = {i.public_id}/>)}
//             </Carousel> ) : 
//                ( <Card
//                cover={
//                    <img src={download} 
//                        className="p-1 card-image"

//                        />
//            }
//            />)
//             }
//             <Tabs>
//                 <TabPane tab='Desription' key="1">
//                 {description && description}
//                 </TabPane>
//                 <TabPane tab='More' key="2">
//                     More
//                 </TabPane>
//             </Tabs>
//         </div>

//         <div className="col-md-5">
//         <h1 className="bg-info p-3">{title}</h1>
   
//             <Card
//             actions=
//             {[
//                 <>
//                     <ShoppingCartOutlined className = 'text-success' />
//                      <br/> Add To Cart
//                 </>,
//                 <Link to='/'>
//                     <HeartOutlined className = 'text-info'/>
//                      <br/> Add To WishList
//                 </Link>,
//                      <RatingModal>        
//                          <StarRating 
//                             name = {_id}
//                             numberOfStars = {5}
//                             rating={2}
//                             changeRating = {(newRating, name) => console.log('newRating', newRating, 'user', name)}
//                             isSelectable = {true}
//                             starRatedColor='red'
//                         />  
//                  </RatingModal>
//             ]}>
                
//                 <ProductListItems product={product}/>
//             </Card>
//         </div>
//         </>
//     )
// }

// export default SingleProduct

import React from "react"
import {Card, Tabs} from "antd"
import {Link} from "react-router-dom"
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Torta from "../../images/Torta.JPG";
import download from "../../images/download.jpg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";

const {TabPane} = Tabs;

const SingleProduct = ({product, onStarClick, star}) => {

  const {title, images, description, _id} = product

    return (
        <>
        <div className="col-md-7">
            {images && images.length ? 
         (<Carousel showArrows={true} autoPlay infiniteLoop>
                {images && images.map((i) => <img src = {i.url} key = {i.public_id}/>)}
            </Carousel> ) : 
               ( <Card
               cover={
                   <img src={download} 
                       className="p-1 card-image"
                       />
           }
           />)
            }
            <Tabs type="card">
                <TabPane tab="Description" key={1}>
                    {description && description}
                </TabPane>

                <TabPane tab="More" key={2}>
                    Call use on xxx xxx xxx to learn more about this product.
                </TabPane>
            </Tabs>
        </div>

        <div className="col-md-5">
            <h1 className="bg-info p-3"> {title} </h1>

        

            <Card
            actions=
            {[
                <>
                    <ShoppingCartOutlined className = 'text-success' />
                     <br/> Add To Cart
                </>,
                <Link to='/'>
                    <HeartOutlined className = 'text-info'/>
                     <br/> Add To WishList
                </Link>,
                <RatingModal>
                <StarRating 
                    name={_id}
                    numberOfStars={5}
                    rating={star}
                    changeRating={onStarClick}
                    isSelectable={true}
                    starRatedColor="cyan"
                    
                />
            </RatingModal>,
            ]}>
                <ProductListItems product={product}/>
            </Card>
        </div>
        </>
    )
}

export default SingleProduct