


//create ui function--

import { products } from "../data.js";
import { caregoryGroup, categoryTemplate } from "../select.js"
import { productRender } from "./product.js";

export const categoryUi =(text)=>{
    const category=categoryTemplate.content.cloneNode(true);
    category.querySelector("#cat-btn").innerText=text;
    return category;
};

export const categoryRender=(lists)=>{
    lists.forEach(element =>caregoryGroup.append(categoryUi(element))       
    );
}

export const categoryGroupHandler=(event)=>{
    if(event.target.classList.contains("cat-btn")){
        const selected=event.target.innerText;
        caregoryGroup.querySelector("button.active").classList.remove("active");
        event.target.classList.add("active");
        console.log(selected);
        productRender(products.filter(product=>selected==="All" || product.category === selected ))

    }
}