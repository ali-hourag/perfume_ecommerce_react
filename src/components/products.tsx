import { FC } from 'react'
import "./css/products.css"

//let products: Array<Array<string>>= [["url-img", "title", "price"]];
let array = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];



export const Products: FC = () => {
    return (
        <div className="products-container_div">
            {
                array.map((product, index) => (
                    <div className="product-container">
                        <img className="img-product"></img>
                        <p className="description-product">Descripción</p>
                    </div>
                ))
            }

        </div>
    )
}


