import Logo from "../../img/logos/logo simples sem fundo.png";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "../NavBar/NavBar.css";
import CartWidjet from "./CartWidjet";
import { List } from "@phosphor-icons/react";
import LogInButton from "./LogInButton";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-primary-color"
      id="navbar"
    >
      <div className="container py-1">
        <a href="#">
          <img src={Logo} alt="" height={50} width={100} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span class="navbar-toggler-icon">
            <List size={32} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active border-bottom-0"
                style={{ backgroundColor: "#A4C735ff" }}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown bg-primary-color">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Produtos
              </a>
              <ul className="dropdown-menu">
                <li className="text-color secondary-color">
                  <a className="dropdown-item" href="#">
                    Rações
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Acessórios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Produtos Veterniários
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="icons d-flex">
          <LogInButton />
          <CartWidjet />
        </div>
      </div>
    </nav>
  );
}
