import observers from "./core/observers";
import { initialRender } from "./intitialRender";
import { listener } from "./listener";

class Shop{
    init(){
        console.log("Shop app is start");
        initialRender();
        listener();
        observers();
    }
};

export default Shop;
