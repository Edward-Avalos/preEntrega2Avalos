import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CartBottons } from '../componentes/CartBottons/CartBottons';


export const Cart = () => {

    let [productsData, setProductsData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    let location = useLocation();
    let params = useParams();
    console.log(location);
    console.log(params);

    async function getAllProducts() {
        let storeItems = [
            {
                "id": 1,
                "name": "Lechuga",
                "description": "Lechuga fresca del Amazonas",
                "price": 1,
                "category": "verduras",
                "img": "../img/lechuga.jpg"
            },
            {
                "id": 2,
                "name": "Tomate",
                "description": "Tomate fresca del Amazonas",
                "price": 5,
                "category": "verduras",
                "img": "../img/tomate.jpg"
            },
            {
                "id": 3,
                "name": "Platano",
                "description": "Platano seda del Amazonas",
                "price": 2,
                "category": "frutas",
                "img": "../img/platano.jpg"
            },
            {
                "id": 4,
                "name": "Manzana",
                "description": "Mazana fresca del Amazonas",
                "price": 3,
                "category": "frutas",
                "img": "../img/manzana.jpg"
            }
        ]
        return await storeItems;
    }

    React.useEffect(() => {
        getAllProducts().then((res) => { setLoading(true); setProductsData(res); }).catch((err) => console.error(err)).then(() => setLoading(false));
    }, []);
    console.log("Start");
    if (!loading) {
        if (location.pathname.includes("item")) {
            productsData = productsData.filter(function (pr) {
                return pr.id == params.id;
            })
            console.log("Item: " + productsData);
        }
    } else {
        console.log("Loading...");
    }

    return loading ? console.log("Loading...") : (
        <>

            <ul>
                {productsData.map(p => {
                    return (
                        <div key={p.id} className="d-flex justify-content-center" >
                            {/* <div className="card" style={{width: 400, }}>
                                <h5 className="card-title">{p.name}</h5>
                                <img style={{ maxWidth: "10%", marginBottom: "20px" }} src={p.img}></img>
                                <p className="card-text">{p.description}</p>
                                <p className="card-text">$ {p.price}</p>
                                <CartBottons></CartBottons>
                            </div> */}

                            <div class="card text-center" style={{width: 400}}>
                                <div class="card-header text-center">
                                    Detalle del producto
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{p.name}</h5>
                                    <img src={p.img} style={{ maxWidth: "100%", marginBottom: "20px" }} />
                                    <p class="card-text">{p.description}</p>
                                    <div>
                                    <a href="#"><CartBottons/></a>
                                    </div>
                                    <button type='button' class="btn btn-primary">Agregar al carrito</button>
                                </div>
                                <div class="card-footer text-body-secondary">
                                   $ {p.price}
                                </div>
                            </div>
                        </div>


                    )
                })}
            </ul>
        </>
    )


}

