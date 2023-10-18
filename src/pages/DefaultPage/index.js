import { Outlet } from "react-router-dom"
import Container from "../../components/Container"
import FavoritesProvider from "../../components/Contexts/Favorites"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DefaultPage(){
    return (
        <main>
        <Header />
        <FavoritesProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritesProvider>
        <Footer />
        </main>

    )
}