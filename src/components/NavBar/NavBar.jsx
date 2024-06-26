import styles from "../NavBar/NavBar.module.css";
import LogInButton from "../Login/LogInButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartWidjet from "../CartWidjet/CartWidjet";
import Logo from "../../img/logos/AGROm.jpg";
import { PiPhoneCall } from "react-icons/pi";
import { BsBasket } from "react-icons/bs";

export default function NavBar() {
  //pegando informação do array de produtos do context
  const { cartItems, isCartVisible, setIsCartVisible } =
    useContext(CartContext);

  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.navBarHeader}>
          <img src={Logo} />

          <div className={styles.telInfo}>
            <PiPhoneCall size={32} color="#e98719" />
            <h3>(51) 33248-0377</h3>
          </div>
        </div>
      </Link>
      <nav className={styles.navBar}>
        <div className={styles.navBarContainer}>
          <div className={styles.blanck}></div>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            {/* <DropdownMenu.Root>
              <DropdownMenu.Trigger className="bg-slate-100">
                <Button variant="surface">
                  Produtos
                  <IoIosArrowDown size={10} />
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <Link to="/produtos">
                  <DropdownMenu.Item>Todos os Produtos</DropdownMenu.Item>
                </Link>
                <DropdownMenu.Separator />
                <Link to="/categoria/cat">
                  <DropdownMenu.Item>Rações para Gatos</DropdownMenu.Item>
                </Link>
                <Link to="/categoria/dog">
                  <DropdownMenu.Item>Rações para Cachorro</DropdownMenu.Item>
                </Link>
                <DropdownMenu.Separator />
              </DropdownMenu.Content>
            </DropdownMenu.Root> */}
            <Link to="/paginaDeContato">Contato</Link>
          </div>
          <div className={styles.icons}>
            <Link to="/login">
              <LogInButton color="#a4c735" />
            </Link>
            <button
              className={styles.cartButton}
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <BsBasket size={30} color="#a4c735" />
              {/* integrando informaçãoes e mostrando o comprimento do array */}
              {/* apenas mostrar valor se o tamanho do array for maior que 0, adicionando a propriedade de estilo cartStatus */}
              {cartItems.length > 0 && (
                <span className={styles.cartStatus}>{cartItems.length}</span>
              )}
            </button>
            <CartWidjet />
          </div>
        </div>
      </nav>
    </div>
  );
}
