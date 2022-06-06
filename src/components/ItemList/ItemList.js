import { Item } from "../Item/Item"

export const ItemList = ({items}) => {
    return(
        <div>
               <h2>Nuestros Sneakers</h2>
        <hr/>
             <>
                {
                    items.map((item)=>
                        <Item item={item}/>
                    )
                }
            </>
        </div>
    )
}