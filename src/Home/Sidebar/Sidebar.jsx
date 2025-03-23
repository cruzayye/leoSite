import { useState } from "react";
import { Close, Menu, Instagram, Phone } from "@mui/icons-material"; // Added Instagram and Phone icons
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo2.jpg";
import "./Sidebar.scss";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "20vw" : "0")};
  background-color: rgba(0, 0, 0, 0.9);
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  z-index: 2;

  @media (max-width: 768px) {
    width: ${({ isOpen }) =>
      isOpen ? "60vw" : "0"}; /* Bigger for smaller screens */
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 25px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  z-index: 100;

  @media (max-width: 768px) {
    left: 10px; /* Adjust position for mobile */
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
`;

const NavLink = styled.li`
  display: block;
  padding: 1rem 0;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  position: relative;
  list-style: none; /* Remove default bullet points */

  &:hover {
    color: #e3a45a; /* Gold on hover */
  }

  /* Add a thin underline to all but the last link */
  &:not(:last-child)::after {
    content: "";
    display: block;
    width: 80%;
    margin: 0 auto;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.6); /* Light white */
    position: absolute;
    bottom: -5px; /* Adjust spacing */
    left: 10%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Dim effect */
  z-index: 50; /* Ensure it’s above the background but below the menu */
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  z-index: 1;
`;

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSMPClick = () => {
    setIsOpen(false);
    navigate("/smp");
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="content">
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
      </MenuButton>
      <NavLink className="logo-link" onClick={handleLogoClick}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>

      <Navbar isOpen={isOpen} className="nav-bar">
        <NavLinks>
          <NavLink>
            <a
              href="https://www.styleseat.com/m/v/leogomez?ncd_source=social_media"
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </NavLink>
          <NavLink onClick={handleSMPClick}>SMP</NavLink>
          <NavLink onClick={handleHomeClick}>HOME</NavLink>
        </NavLinks>
        <div className="social-icons">
          <a href="https://www.instagram.com/lionmaneco" target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="medium" />
          </a>
          <a href="tel:+1234567890">
            <Phone fontSize="medium" />
          </a>
        </div>
      </Navbar>
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </div>
  );
}
