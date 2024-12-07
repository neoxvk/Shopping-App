import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to Fetch Categories
export const fetchProductCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  }
);

export const fetchProductImagesForCarousel = createAsyncThunk(
    "products/fetchImagesForCarousel",
    async ()=> {
         const response = await axios.get("https://dummyjson.com/products");
         const images = response.data.products.flatMap(product => product.images)
         return images;

    }
   
)

export const fetchProductsByCategory = createAsyncThunk(
  "products/category/selectedCategory",
  async ({ category }) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return { category, products: response.data.products };
  }
);

// Product Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    productCategoryList: [],
    productImagesForCarousel: [],

    status: {
      productCategoryList: "idle",
      productImagesForCarousel: "idle",
    }, // idle | loading | success | failed
    error: {
      productCategoryList: null,
      productImagesForCarousel: null,
    },
  },
  reducers: {
    setSelectedCategory(state, action){
        state.selectedCategory = action.payload
    }
  }, // No additional reducers are needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.status.productCategoryList = "loading";
        state.error.productCategoryList = null;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.status.productCategoryList = "success";
        state.productCategoryList = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.status.productCategoryList = "failed";
        state.error.productCategoryList = action.error.message;
      });


      //builder to fetch the images..
      builder
        .addCase(fetchProductImagesForCarousel.pending, (state) => {
          state.status.productImagesForCarousel = "loading";
          state.error.productImagesForCarousel = null;
        })
        .addCase(fetchProductImagesForCarousel.fulfilled, (state, action) => {
          state.status.productImagesForCarousel = "success";
          state.productImagesForCarousel = action.payload;
        })
        .addCase(fetchProductImagesForCarousel.rejected, (state, action) => {
          state.status.productImagesForCarousel = "failed";
          state.error.productImagesForCarousel = action.error.message;
        });

        builder
          .addCase(fetchProductsByCategory.pending, (state, action) => {
            const { category } = action.meta.arg;
            state[category] = { status: "loading", error: null, products: [] };
          })
          .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            const { category, products } = action.payload;
            state[category] = { status: "success", error: null, products };
          })
          .addCase(fetchProductsByCategory.rejected, (state, action) => {
            const { category } = action.meta.arg;
            state[category] = {
              status: "failed",
              error: action.error.message,
              products: [],
            };
          });

  },
});

export default productSlice.reducer;
