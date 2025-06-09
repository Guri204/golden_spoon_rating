

function Footer(props) {
    return (
        <footer className="mainFooter">
            <div className="containerFooter flex space-between">
                <p>{props.copy}</p>
                <div className="footer-links">
                    {props.footerLinks.map((link, index) => (
                        <a key={index} href={link.url}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;