import React, {useState, useEffect} from 'react'
import {getProductsByCount, fetchProductsByFilter} from "../functions/product"
import {useSelector, useDispatch} from "react-redux"
import ProductCard from "../components/cards/ProductCard"
import { Menu, Slider } from 'antd'
import {ConsoleSqlOutlined, DollarOutlined} from '@ant-design/icons'
 
const {SubMenu, ItemGroup} = Menu; 

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState([0, 0])
    const [ok, setOk] = useState(false)

    let dispatch = useDispatch()
    let {search} = useSelector((state) => ({...state}));

    const {text} = search;

    useEffect(() => {
        loadAllProducts()
    }, [])
// 1. load products by default on page land
    const loadAllProducts = () => {
        getProductsByCount(12).then(p => {
            setProducts(p.data);
            setLoading(false);
        });
    };
// load products on user search input
    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts({query: text})
        }, 300)
        return () => clearTimeout(delayed)
    },[text]);

    const fetchProducts = (arg) => {
        fetchProductsByFilter(arg)
        .then((res) => {
            setProducts(res.data)
        });
    };

    useEffect(() => {
        console.log('ok')
        fetchProducts({price})
    }, [ok])

    const handleSlider = (value) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: {text:""}
        })
        setPrice(value)
        setTimeout(() => {
            setOk(!ok)
        }, 300)
    }
    
    return (
        <div className="container-fluid pt-2">
            <div className="row">
                <div className="col-md-3 pt-2">
                    <h4>Search/Filter</h4>
                    
                    <Menu defaultOpenKeys={["1", "2"]}mode="inline"> 
                        <SubMenu key="1" title={<span> <DollarOutlined className="h-6"/>Price</span>}>
                            <div>
                                <Slider classname="ml-4 mr-4" 
                                tipFormatter={(v) => `$${v}`} 
                                range value={price}
                                onChange={handleSlider} 
                                max="5000"
                                />
                            </div>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="col-md-9 pt-2">
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4> ) : (
                        <h4 className="text-danger">Products</h4>
                        )
                    }

                {products.length < 1 && <p>No products found</p>}

                <div className="row pb-5">
                    {products.map((p) => (
                    <div key={p._id} className="col-md-4 mt-3">
                        <ProductCard product={p} />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Shop