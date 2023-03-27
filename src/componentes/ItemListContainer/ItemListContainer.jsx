import React from 'react';
import { NavLink,useLocation,useParams } from 'react-router-dom';





export const ItemListContainer = () => {

    var [productsData, setProductsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    let location = useLocation();
    let params = useParams();
    console.log(location);
    console.log(params);

    async function getAllProducts() {
        var storeItems = [
            {
                "id": 1,
                "name": "Lechuga",
                "description": "Lechuga fresca del Amazonas",
                "price": 1,
                "category": "verduras",
                "img": "./img/lechuga.jpg"
            },
            {
                "id": 2,
                "name": "Tomate",
                "description": "Tomate fresca del Amazonas",
                "price": 5,
                "category": "verduras",
                "img": "./img/tomate.jpg"
            },
            {
                "id": 3,
                "name": "Platano",
                "description": "Platano seda del Amazonas",
                "price": 2,
                "category": "frutas",
                "img": "./img/platano.jpg"
            },
            {
                "id": 4,
                "name": "Manzana",
                "description": "Mazana fresca del Amazonas",
                "price": 3,
                "category": "frutas",
                "img": "./img/manzana.jpg"
            }
        ]
        return await storeItems;
    }

    React.useEffect(() => {
        getAllProducts().then((res) => { setLoading(true); setProductsData(res); }).catch((err) => console.error(err)).then(() => setLoading(false));
    }, []);

    if (!loading) {
        
        if(location.pathname.includes("category")){
            productsData = productsData.filter(function (pr){
                return pr.category == params.id;
            })
            console.log(productsData);
        }else if(location.pathname.includes("item")){
            productsData = productsData.filter(function (pr){
                return pr.id == params.id;
            })
            console.log(productsData);
        }else{
            console.log(productsData);
        }

    } else {
        console.log("Loading...");
    }

    return (
        <>
            <div>Lista de Productos</div>
            <ul>
                {productsData.map(p => {
                    return (
                        <div key={p.id} className="card" >
                            <div className="card-body">
                                <img src={p.img}></img>
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description}</p>
                                <p className="card-text">$ {p.price}</p>
                                <NavLink className="btn btn-primary" to={`/item/${p.id}`}>Detalle del producto</NavLink>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </>
    )


}
