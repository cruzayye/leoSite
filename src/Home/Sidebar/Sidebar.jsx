import { useState } from "react";
import { Menu, Close } from "@mui/icons-material"; // MUI icons
import styled from "@emotion/styled";

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
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  z-index: 100;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
`;

const NavLink = styled.li`
  padding: 1rem 0;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;

&:hover {
    color: #FFD700; 
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
      </MenuButton>

      <Navbar isOpen={isOpen}>
        <NavLinks>
          <NavLink href="https://www.styleseat.com/m/v/leogomez?ncd_source=social_media" target="_blank" onClick={() => setIsOpen(false)}>BookNow</NavLink>
          <NavLink onClick={() => setIsOpen(false)}>SMP</NavLink>
        </NavLinks>
      </Navbar>
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
}
