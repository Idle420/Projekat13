import React from "react"
import {Card} from "antd"
import {Link} from "react-router-dom"
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons"

const {Meta} = Card
const SingleProduct = ({product}) => {

    const {title, description, images, slug} = product

    return (
        <>
        <div className="col-md-7">Image carousel</div>

        <div className="col-md-5">
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
            ]}>
                <Meta title={title} description={description}/>
                <p>Opisci</p>
            </Card>
        </div>
        </>
    )
}

export default SingleProduct