import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "../componentes";
import { ProductDetail } from "../pages";

export const MainRoutes = () => {

    return (
        <Router>
            <NavBar/>
            <ItemListContainer/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/category/:id" element={<ItemListContainer />}/>
                <Route exact path="/item/:id" element={<ProductDetail />}/>
            </Routes>
        </Router>
    )
}