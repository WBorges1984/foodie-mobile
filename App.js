import Routes from "./src/routers";
import RoutesAuth from "./src/routesAuth";


const isUserAuth = true;

export default function App() {

  return isUserAuth ? <RoutesAuth /> : <Routes />
// return <Busca />    
}
