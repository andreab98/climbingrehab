import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import styles from '../styles/Header.module.css'
import Container from 'react-bootstrap/Container';

const Header = () => {
  const { activeLinkId } = useContext(NavContext);
  const navLinks = [
    "Home",
    "Services",
    "About Me",
    "Reviews",
    "Contact Us"
  ];

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase().replace(' ','')}Section`;
    const handleClickNav = () =>{
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
    }
    return (
      <ul key={content}>
        <li>
          <button
            onClick={handleClickNav}
            className={activeLinkId === content ? styles.activeClass : ""}
          >{content}</button>
        </li>
      </ul>
    )
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navContainer}>
          <nav>
            {navLinks.map(nav => renderNavLink(nav))}
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
