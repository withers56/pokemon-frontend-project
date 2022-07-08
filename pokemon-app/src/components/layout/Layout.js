import MainNavigation from "./MainNavigation";

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main >
                {props.children}
            </main>
            <footer>footer stuff</footer>
        </div>
    )
}

export default Layout;