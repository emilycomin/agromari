import Logo from "../../img/logos/logo simples sem fundo.png";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/dropdown";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-warning">
      <ul class="nav nav-pills bg-warning justify-content-center fixed-top">
        <li class="nav-item">
          <a class="nav-link active bg-info" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Produtos
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Rações
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Acessórios
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Produtos Veterniários
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contato
          </a>
        </li>
        <a href="#" class="float-end">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/stickers/100/000000/shop--v1.png"
            alt="shop--v1"
          />
        </a>
      </ul>
    </nav>
  );
}
export default NavBar;
