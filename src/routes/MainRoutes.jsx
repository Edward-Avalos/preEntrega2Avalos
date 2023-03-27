import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "../componentes/ItemListContainer/ItemListContainer";


export const MainRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/category/:id" element={<ItemListContainer />}/>
                <Route exact path="/item/:id" element={<ItemListContainer />}/>
            </Routes>
        </Router>
    )
}