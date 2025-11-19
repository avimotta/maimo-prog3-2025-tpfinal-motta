"use client";
import axios from "axios";
import { useState, useEffect, useContext, createContext, useCallback} from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [categories, setCategories] = useState([]); 
  const [userRatings, setUserRatings] = useState({});

  const getAllProducts = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      setAllProducts(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCategories = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getOneProduct = async (id) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
      setProduct(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, [getAllProducts, getCategories]);

  const filterByLanguage = (categoryId) => {
  setSelectedLanguage(categoryId);

  if (categoryId === "all") {
    setProducts(allProducts);
    return;
  }

  const filtered = allProducts.filter((p) => {
    if (!p.category) return false;

    if (typeof p.category === "string") {
      return p.category === categoryId;
    }

    if (typeof p.category === "object" && p.category._id) {
      return p.category._id === categoryId;
    }

    if (Array.isArray(p.categories)) {
      return p.categories.includes(categoryId);
    }

    return false;
  });

  setProducts(filtered);
};


  const handleAddToFavorites = (product) => {
    if (!product?._id) return;
    let productToAdd = {};
    const findProduct = favorites.find(
      (productInFavorites) => productInFavorites._id === product._id
    );
    
    if (findProduct) {
      productToAdd = {...findProduct, qty: findProduct.qty + product.qty}
    } else {
      productToAdd = product
    }

    const filteredFavorites = favorites.filter((productInFavorites) => productInFavorites._id !== product._id)
    setFavorites([...filteredFavorites, productToAdd])
  };

  const favsQty = () => favorites.length;

  const removeFromFavorites = (product) => {
    if (!product?._id) return;
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (item) => !(item._id === product._id)
      )
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term === "") {
      setSearchResults([]);
      return;
    }

    const results = products.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase()) ||
      p.artist.toLowerCase().includes(term.toLowerCase()) ||
      p.genre.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  const popAlbums = products.filter((p) => p.genre?.toLowerCase().includes("pop"));
  const rockAlbums = products.filter((p) => p.genre?.toLowerCase().includes("rock"));
  const indieAlbums = products.filter((p) => p.genre?.toLowerCase().includes("indie"));
  const hipHopAlbums = products.filter((p) => p.genre?.toLowerCase().includes("hip hop"));
  const reggaetonAlbums = products.filter((p) => p.genre?.toLowerCase().includes("reggaeton"));

  const rateAlbum = (albumId, stars) => {
    setUserRatings(prev => ({
      ...prev,
      [albumId]: stars
    }));
  };

  const addReview = async (productId, reviewData) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/reviews`;

  try {
    const res = await axios.post(url, reviewData);
    return res.data; 
  } catch (error) {
    console.error("Error al enviar reseña:", error);
    throw error;
  }
};


  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        getAllProducts,
        getOneProduct,
        handleAddToFavorites,
        favorites,
        favsQty,
        removeFromFavorites,
        handleSearch,
        searchTerm,
        searchResults,
        popAlbums,
        rockAlbums,
        indieAlbums,
        hipHopAlbums,
        reggaetonAlbums,
        filterByLanguage,
        selectedLanguage,
        categories,
        userRatings,
        rateAlbum,
        addReview
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

export default ShopContext;