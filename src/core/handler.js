import { productRender } from "../app/product"
import { products } from "../data"
import { searchInput } from "../select"


export const searchBtnHandler=()=>{
    searchInput.focus()
}

export const searchInputHanler=(event)=>{
   productRender(products.filter(product =>product.title.toLowerCase().search(event.target.value) != -1))
}