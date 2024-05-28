import product1Image from '../assets/mug.jpg';
import product2Image from '../assets/sunglasses.jpg';
import product3Image from '../assets/mouse.jpg';


const productsArray = [
    {
        id: "price_1PFhye02817CiaKgLr6ZNQgl",
        title: "Coffee Mug",
        price: 400,
        imageUrl: product1Image
    },
    {
        id:"price_1PEQ8e02817CiaKgsblpJIhF",
        title:"Sunglasses",
        price: 100,
        imageUrl: product2Image
    },
    {
        id: "price_1PFi1702817CiaKg0q27U8dw",
        title: "Gaming Mouse",
        price: 1500,
        imageUrl: product3Image
    },
    {
        id: "4",
        title: "Notebook",
        price: 500,
        imageUrl: ""
    },
    {
        id: "5",
        title: "",
        price: 300,
        imageUrl: ""
    },
    {
        id: "",
        title: "",
        price: "",
        imageUrl: ""
    },
    {
        id: "6",
        title: "",
        price: "",
        imageUrl: ""
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};