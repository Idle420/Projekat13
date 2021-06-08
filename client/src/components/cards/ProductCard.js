import React from 'react'
import {Card, Skeleton} from 'antd'
import {EteOutlined, EyeOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import download from "../../images/download.jpg";
import {Link} from 'react-router-dom';

const {Meta} = Card;

const ProductCard = ({product}) => {
    
    const {title, description, images, slug} = product;
    
return(
    <Card
        cover={
            <img src={images && images.length ? images[0].url : download} 
                style={{height: "150px", objectFit:"cover"}
                }
                className="p-1"
                />
    }

    actions={[
        <Link to={`/product/${slug}`}>
         <EyeOutlined 
         className="text-primary"/> <br/> View Product
        </Link>,
        <>
            <ShoppingCartOutlined className="text-primary"/> <br/> View Product
        </>,
    ]}
    >
        <Meta title={title} description={`${description && description.substring(0, 40)}...`} />
    </Card>
)}

export default ProductCard;