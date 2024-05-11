import { productsArray } from "../data/storeProducts";

function getProductsData(id){
    let productsData = productsArray.find(product => product.id == id);
    if(productsData == undefined){
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productsData;
}

export default getProductsData;