import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
   
    useEffect(() => {
      axios
        .get(`http://localhost:5000/Products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    }, [id]);
   
    return (
      <div className="container mt-5" style={{width: '300px'}}>
        {product ? (
          <div className="card border-primary" style={{display: 'flex', flexDirection: 'column'}}>
            <div>
              <img
                src={product.img_url}
                className="card-img-top"
                alt={product.name}
                style={{
                  maxHeight: "300px",
                  maxWidth: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Id: {product.id}</p>
              <p className="card-text">Price: ${product.price}</p>
              
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  };
