import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from '../../redux/productSlice';

const HomePageBody = ({title, category}) => {
   const dispatch = useDispatch();
   const {products, status, error} = useSelector((state)=> state.products[category] || {})

   useEffect(()=> {
    if(!status || status === 'idle'){
        dispatch(fetchProductsByCategory({category}));
    }
   },[dispatch, category, status])

     if (status === "loading") return <p>Loading {title}...</p>;
     if (status === "failed")
       return (
         <p>
           Error loading {title}: {error}
         </p>
       );

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <button className="text-blue-500 hover:underline text-sm">
          See More
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {products &&
          products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-lg hover:shadow-lg transition cursor-pointer  bg-gray-300 text-black hover:scale-75 ease-in">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-32 w-full object-cover rounded-lg mb-2"
              />
              <p className="font-medium text-sm">{product.title}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePageBody