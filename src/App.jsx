import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainRoutes } from './routes';
import { NavBar } from './componentes';
 

function App() {
  return (
    <>
    <NavBar />
    <MainRoutes />
    </>
  );
}

export default App;
