import Header from "./components/Header.jsx"
import { Outlet } from "react-router-dom" // Definindo Outlet para as rotas

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App