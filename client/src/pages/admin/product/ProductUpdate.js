import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import {getProduct} from "../../../functions/product";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";

const initialState = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subs: [],
    shipping: "",
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: "",
    brand: "",
  };
 

const ProductUpdate = ({match}) => {

  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = match.params;

  const [values, setValues] = useState(initialState);


  useEffect(() => {
      loadProduct()
  }, [])

  const loadProduct = () => {
      getProduct(slug)
      .then((p) => {
           setValues({...values, ...p.data})
      })
  }
  const handleSubmit =(e) => {
    e.preventDefault()
}
  const handleChange = (e) => {
      setValues ({ ...values, [e.target.name]: e.target.value})
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
            <h4>Product create</h4>
          <hr />
          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
           
          />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;



