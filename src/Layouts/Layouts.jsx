import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Footer from './Footer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Header = styled.header`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`;

const Nav = styled.nav`
    display: flex;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    padding: 0;
    margin: 0;
`;

const NavItem = styled.li`
    position: relative;
    &:hover > div {
        display: block;
    }
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    position: relative;
    &:hover {
        transition: 2s;
    }
    &:hover::before, &:hover::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: white;
    }
    &:hover::before {
        top: -5px;
        left: 0;
    }
    &:hover::after {
        bottom: -5px;
        right: 0;
    }
`;

const StyledLinkdropdwn = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
    position: relative;
    &:hover {
        transition: 2s;
    }
    &:hover::before, &:hover::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: white;
    }
    &:hover::before {
        top: -5px;
        left: 0;
    }
    &:hover::after {
        bottom: -5px;
        right: 0;
    }
`;

const DropdownMenu = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    color: black;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
    margin-top: 16px;
`;

const DropdownList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const DropdownItem = styled.li`
    padding: 0.5rem 1rem;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const Main = styled.main`
    flex: 1;
    padding: 2rem;
    background-color: black;
    color : white;
    min-height: 100vh;
`;

const Button = styled.button`
    background-color: white;
    color: #4CAF50;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const LoginLink = styled.a`
    color: white;
    margin-left: 1rem;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
        text-decoration: underline;
    }
    cursor: pointer;
`;

const Connection = styled.div`
    margin-right : 3%;
`;

const Logo = styled.h1`
    margin-left : 3%;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10%);
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);  // Slightly darker overlay for a more dramatic effect
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease;
    backdrop-filter: blur(5px); // Adds a nice blur to the background
`;

const ModalContent = styled.div`
    background: linear-gradient(135deg, #ffffff, #f0f0f0);  // Soft gradient background
    padding: 2rem;
    border-radius: 15px; // Increased border radius for smoother corners
    max-width: 500px;
    width: 100%;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); // Softer shadow for a floating effect
    animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease;
    transition: all 0.3s ease-in-out; // Smooth transition for the modal appearance
    transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.95)')}; // Slight scale effect for added depth
`;

const ModalCloseButton = styled.button`
    background-color: transparent;
    color: #555;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        color: #4CAF50;
    }
    float: right;
    padding: 0.5rem 1rem;
    margin: -1rem -1rem 0 0;
    background: none;
    transition: color 0.3s ease-in-out; // Smooth color change on hover
`;

const ModalTitle = styled.h2`
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 10px; // Slightly more rounded input fields
    border: 1px solid #ccc;
    background-color: #f9f9f9; // Light background for the input
    transition: border-color 0.3s ease;
    &:focus {
        border-color: #4CAF50; // Focus color to match theme
        outline: none;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem; // Increased gap for a more spacious feel
`;



const Label = styled.label`
    font-size: 1rem;
    color: black;
`;



const SubmitButton = styled.input.attrs({ type: 'submit' })`
  background-color: #007BFF; /* Primary color */
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Outline on focus */
  }
`;

const Span = styled.span`
  font-family: 'Montserrat', sans-serif; /* Modern font */
  font-size: 2.5rem; /* Large size for logo */
  font-weight: 700; /* Bold for strong appearance */
  color: #4A90E2; /* Vibrant color */
  text-transform: uppercase; /* Uppercase for logo styling */
  letter-spacing: 2px; /* Spacing between letters for a sleek look */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: transform 0.3s ease-in-out; /* Smooth hover effect */

  &:hover {
    transform: scale(1.1); /* Slightly enlarges on hover */
    color: #2C3E50; /* Changes color on hover */
  }
`;



const Layouts = () => {
    const [connecter , setConnecter] = useState({
        email : "" ,
        password : ""
    });
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleLogin = () => {
        navigate('/StayHealthy/Login');
    };

    const handlePopupOpen = () => {
        setIsModalOpen(true);
        setTimeout(() => setIsVisible(true), 10); // Start animation
    };

    const handlePopupClose = () => {
        setIsVisible(false); // Start close animation
        setTimeout(() => setIsModalOpen(false), 300); // Close after animation ends
    };

    const handleInput = (e) => {
        e.preventDefault()
        setConnecter({
            ...connecter ,
            [e.target.name] : e.target.value
        });
    }

    const handleClick = (e) => {
        e.preventDefault()
        alert(`${connecter.email} , ${connecter.password}`);
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <Logo><Span>Stay</Span>Healthy</Logo>
                    <NavWrapper>
                        <Nav>
                            <NavList>
                                <NavItem>
                                    <StyledLink to='/StayHealthy'>Home</StyledLink>
                                </NavItem>
                                <NavItem>
                                    <StyledLink to='/StayHealthy/Acteur'>Acteur</StyledLink>
                                    <DropdownMenu>
                                        <DropdownList>
                                            <DropdownItem>
                                                <StyledLinkdropdwn to='/StayHealthy/Acteur/Utilisateur'>Utilisateur</StyledLinkdropdwn>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <StyledLinkdropdwn to='/StayHealthy/Acteur/Coach'>Coach</StyledLinkdropdwn>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <StyledLinkdropdwn to='/StayHealthy/Acteur/Membre'>Membre</StyledLinkdropdwn>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <StyledLinkdropdwn to='/StayHealthy/Acteur/Administration'>Administration</StyledLinkdropdwn>
                                            </DropdownItem>
                                        </DropdownList>
                                    </DropdownMenu>
                                </NavItem>
                                <NavItem>
                                    <StyledLink to='/StayHealthy/Service'>Service</StyledLink>
                                </NavItem>
                                <NavItem>
                                    <StyledLink to='/StayHealthy/Materiels'>Materiel d'Entainement</StyledLink>
                                </NavItem>
                                <NavItem>
                                    <StyledLink to='/StayHealthy/Contact Us'>Contact Us</StyledLink>
                                </NavItem>
                            </NavList>
                        </Nav>
                    </NavWrapper>
                    <Connection>
                        <Button onClick={handlePopupOpen}>Se Connecter</Button>
                        <LoginLink onClick={handleLogin}>LoGin</LoginLink>
                    </Connection>
                </Header>
                <Main>
                    <Outlet />
                </Main>
                <Footer />
                {isModalOpen && (
                    <ModalOverlay isVisible={isVisible}>
                        <ModalContent isVisible={isVisible}>
                            <ModalCloseButton onClick={handlePopupClose}>Close</ModalCloseButton>
                            <h2>Se connecter</h2>
                            <Form>
                                <Label htmlFor="email">Email:</Label>
                                <Input type="email" placeholder="Enter your email" name="email" id="email" required onChange={handleInput}/>
                                <Label htmlFor="password">Password:</Label>
                                <Input type="password" name="password" placeholder="Enter your password" id="password" required onChange={handleInput}/>
                                <SubmitButton value="Connecter" onClick={handleClick}/>
                            </Form>
                        </ModalContent>
                    </ModalOverlay>
                )}
            </Container>
        </Wrapper>
    );
};

export default Layouts;
