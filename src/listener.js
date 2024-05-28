import { cartGroupHandler } from "./app/cart";
import { categoryGroupHandler } from "./app/categories"
import { productGroupHandler } from "./app/product";
import { searchBtnHandler, searchInputHanler } from "./core/handler";
import { caregoryGroup, cartGroup, productGroup, searchBtn, searchInput } from "./select"

export const listener=()=>{
    caregoryGroup.addEventListener("click",categoryGroupHandler);
    searchBtn.addEventListener("click",searchBtnHandler)
    searchInput.addEventListener("keyup",searchInputHanler)
    productGroup.addEventListener("click",productGroupHandler)
    cartGroup.addEventListener("click",cartGroupHandler)
}