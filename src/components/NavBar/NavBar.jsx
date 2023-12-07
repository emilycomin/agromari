import Logo from "../../img/logos/logo simples sem fundo.png";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/dropdown";
import "../NavBar/NavBar.css";
import CartWidjet from "../CartWidjet/CartWidjet";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
      <a href="#">
        <img src={Logo} alt="" height={50} width={100} />
      </a>
      <ul class="nav nav-pills fixed-top p-2 d-flex justify-content-center">
        <li class="nav-item">
          <a class="nav-link active bg-warning" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item dropdown bg-primary-color text-primary-color">
          <a
            class="nav-link dropdown-toggle primary-color"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Produtos
          </a>
          <ul class="dropdown-menu">
            <li class="text-color">
              <a class="dropdown-item primary-color" href="#">
                Rações
              </a>
            </li>
            <li>
              <a class="dropdown-item primary-color" href="#">
                Acessórios
              </a>
            </li>
            <li>
              <a class="dropdown-item primary-color" href="#">
                Produtos Veterniários
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link primary-color" href="#">
            Contato
          </a>
        </li>
        <CartWidjet />
      </ul>
    </nav>
  );
}
export default NavBar;
