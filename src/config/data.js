import products from "./products";

const categories = [
    {
        id: 1,
        title: "All",
        recipes: products,
    },
    {
        id: 2,
        title: "Sneakers",
        recipes: [...products.slice(6, 9)],
    },
    {
        id: 3,
        title: "Sport shoes",
        //recipes: [...products.slice(0, 2)],
        recipes: [...products.slice(5,9)],
    },
    {
        id: 4,
        title: "Men's Shoes",
        recipes: [...products.slice(2, 6)],
    },
];

export default categories;