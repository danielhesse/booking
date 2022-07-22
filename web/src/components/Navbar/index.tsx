import "./styles.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <span className="logo">Booking</span>

        <div className="items">
          <button className="button">Cadastre-se</button>
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}
