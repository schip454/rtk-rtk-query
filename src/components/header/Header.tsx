import { BsBookmarkHeartFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
  const favorites = useFavorites();
  return (
    <header className={styles.header}>
      <BsBookmarkHeartFill fontSize={20} />
      <span>{favorites.length}</span>
    </header>
  );
};

export default Header;
