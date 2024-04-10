import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditProduct = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setValue("id", product.id);
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("img", product.img);
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:5000/Products/${id}`, data);
      alert("Product updated successfully");
      navigate("/product");
    } catch (error) {
      console.log("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="edit-product-form">
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          name="id"
          type="text"
          {...register("id", { required: true, maxLength: 10 })}
        />
        {errors.id && <span className="error-message">ID is required</span>}
        
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name && <span className="error-message">Name is required</span>}

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          type="number" // Use number type for price
          {...register("price", { required: true })}
        />
        {errors.price && <span className="error-message">Price is required</span>}

        <label htmlFor="img">Image:</label>
        <input
          id="img"
          name="img"
          type="text"
          {...register("img", { required: true })}
        />
        {errors.img && <span className="error-message">Image is required</span>}

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditProduct;
