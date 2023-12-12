import Logo from "../../img/logos/logo simples sem fundo.png";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/dropdown";
import "../NavBar/NavBar.css";
import CartWidjet from "../CartWidjet/CartWidjet";
import ItemCount from "../ItemCount/ItemCount";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg p-2 fixed-top bg-primary-color d-flex justify-content-between"
      id="navbar"
    >
      <a href="#">
        <img src={Logo} alt="" height={50} width={100} className="p-1" />
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className="nav-link active bg-warning "
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="nav-item dropdown bg-primary-color text-primary-color">
          <a
            className="nav-link dropdown-toggle primary-color"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Produtos
          </a>
          <ul className="dropdown-menu">
            <li className="text-color">
              <a className="dropdown-item primary-color" href="#">
                Rações
              </a>
            </li>
            <li>
              <a className="dropdown-item primary-color" href="#">
                Acessórios
              </a>
            </li>
            <li>
              <a className="dropdown-item primary-color" href="#">
                Produtos Veterniários
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link primary-color" href="#">
            Contato
          </a>
        </li>
      </ul>
      <ItemCount />
      {/* <div>{count}</div> */}
      <CartWidjet />
    </nav>
  );
}
export default NavBar;
