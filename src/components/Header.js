export default function Header() {
    return (
        <nav className="navbar">
            <img src={process.env.PUBLIC_URL + "assets/logo.png"} alt="logo" className="navbar_logo" />
            <p className="navbar_text">my travel journal</p>
        </nav>
    )
}