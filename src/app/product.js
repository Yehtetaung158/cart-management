import { products } from "../data";
import { app, cartGroup, cartTotal, fillStarTemplate, outlinestartemplate, productDetailBox, productDetailTemlate, productGroup, productTemplate } from "../select"
import { cartUi } from "./cart";

export const starRating = (rate)=>{    
  const star=document.createDocumentFragment();
  for(let i=1; i<=5; i++){
    const fillStar=fillStarTemplate.content.cloneNode(true);
    const outlineStar=outlinestartemplate.content.cloneNode(true);
    if(i<=rate.toFixed(0)){
        star.append(fillStar);
    }else{
        star.append(outlineStar);
    }
  }
  return star;
}

const productUi=({id,title,image,description,price,rating:{rate,count}})=>{
    const product=productTemplate.content.cloneNode(true);
    product.querySelector(".product-card").setAttribute("product-carrd-id",id)
    product.querySelector(".product-img").src=image;
    product.querySelector(".product-title").innerText=title;
    product.querySelector(".product-destription").innerText=description;
    product.querySelector(".product-price").innerText=price;
    product.querySelector(".product-rate").innerText=rate;
    product.querySelector(".product-count").innerText=count;
    product.querySelector(".product-star").append(starRating(rate));
    const productDetail=productDetailTemlate.content.cloneNode(true);
    productDetail.querySelector(".product-card").setAttribute("product-carrd-id",id)
    if(cartGroup.querySelector(`[product-in-cart-id='${id}']`)){
        product.querySelector(".add-cart-btn").toggleAttribute("disabled")
    }
    return product;
}

const ProductDetailUi=({id,title,image,description,price,rating:{rate,count}})=>{
    const product=productDetailTemlate.content.cloneNode(true);
    product.querySelector(".product-card").setAttribute("product-carrd-id",id)
    product.querySelector(".product-img").src=image;
    product.querySelector(".product-title").innerText=title;
    product.querySelector(".product-destription").innerText=description;
    product.querySelector(".product-price").innerText=price;
    product.querySelector(".product-rate").innerText=rate;
    product.querySelector(".product-count").innerText=count;
    product.querySelector(".product-star").append(starRating(rate));
    if(cartGroup.querySelector(`[product-in-cart-id='${id}']`)){
        product.querySelector(".add-cart-btn").toggleAttribute("disabled");
    }
    return product
}

export const productDetailBoxRender=(list)=>{
    productDetailBox.innerHTML=``;
    productDetailBox.append(cartUi(list))
}

export const productRender=(lists)=>{
    productGroup.innerHTML='';
    lists.forEach(list=>productGroup.append(productUi(list)))
}

export const productGroupHandler=(event)=>{
    if(event.target.classList.contains("add-cart-btn")){
        event.target.toggleAttribute("disabled",true)
        const currentproductCart= event.target.closest(".product-card");
        const currentproductCartId=parseInt(currentproductCart.getAttribute("product-carrd-id"))
        const currentProduct=products.find(product=>product.id===currentproductCartId);
        cartGroup.append(cartUi(currentProduct));
        // console.log(currentProduct)

      
        
    }else if(event.target.classList.contains("detailBtn")){
        const currentproductCart= event.target.closest(".product-card");
        const currentproductCartId=parseInt(currentproductCart.getAttribute("product-carrd-id"))
        const currentProduct=products.find(product=>product.id===currentproductCartId);
        productGroup.append(ProductDetailUi(currentProduct))
        // const detailCard=app.querySelector(".productDetailBox");
        // detailCard.toggleAttribute("active",true);
        // console.log("i am detail")
    }else if(event.target.classList.contains("outBtn")){
        const currentproductCart= event.target.closest(".product-card");
        currentproductCart.remove();
        console.log("I am remover")    
    }
}



