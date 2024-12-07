
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchProductCategories } from '../../redux/productSlice';


const ProductCategories = () => {
    //const [categories, setCategories] = useState([])
    const dispatch = useDispatch();
    const {productCategoryList, status, error} = useSelector((state)=> state.products)
   
    


    useEffect(()=> {
        if (status.productCategoryList === "idle") {
          dispatch(fetchProductCategories());
        }
    },[status, dispatch])

    if (status.productCategoryList === "loading")
      return <p>Loading categories...</p>;
    if (status.productCategoryList === "failed") return <p>Error: {error}</p>;


    return (
      <>
        <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 py-2 ease-in-out">
          {productCategoryList.length > 0 ? (
            <>
              {productCategoryList.map((cat) => (
                <div
                  key={cat.name}
                  className="flex-shrink-0 bg-gray-100 text-gray-700 p-3 rounded-lg shadow-md hover:scale-105 transition cursor-pointer min-w-[150px] text-center hover:bg-blue-200">
                  {cat.name}
                </div>
              ))}
            </>
          ) : (
            <p>No Products found</p>
          )}
        </div>
      </>
    );

}

export default ProductCategories
