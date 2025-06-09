import Nav from './Nav';

function Header(props) {
    return (
        <header class="mainHeader">
            <div className="container flex">
                <h1>{props.title}</h1>
                <Nav navLinks={props.navLinks}/>
            </div>
        </header>
    );
}

export default Header;
