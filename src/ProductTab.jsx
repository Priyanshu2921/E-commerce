import { Product } from "./products";

export function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",

    }
    return(
        <div style={styles}>
            <Product title="Logitech MX master" idx={0}/>
            <Product title="Apple Pencil (2nd Gen)" idx={1} />
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Potronics TOAD 2 mouse" idx={3}/>
        </div>
    )
}