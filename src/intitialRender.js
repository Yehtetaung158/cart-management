import { categoryRender } from "./app/categories"
import { productRender } from "./app/product.js";
import { categories, products } from "./data.js"

export const initialRender=()=>{
    categoryRender(categories);
    productRender(products);

    // initialrender ကို json server ဖြင့် run  ခြင်း
    fetch("http://localhost:3000/categories").then(res=>res.json()).then(json=>categoryRender(json));
    fetch("http://localhost:3000/products").then(res=>res.json()).then(json=>productRender(json))
}
