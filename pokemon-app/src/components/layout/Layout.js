import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main >
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;