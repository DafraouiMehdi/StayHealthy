import React from 'react';
import styled from 'styled-components';
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 0 1rem;
`;

const SectionTitle = styled.h4`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffc107;
  font-weight: normal;
  margin-bottom: 1.5rem;
`;

const CompanyLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #ffc107;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

const ContactInfo = styled.p`
  margin-bottom: 0.5rem;
  i {
    margin-right: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  margin-right: 0.5rem;
  &:hover {
    color: #ffc107;
  }
  svg {
    transform: scale(${props => props.scale || 1});
  }
`;

const OpeningHours = styled.div`
  margin-bottom: 1rem;
`;

const NewsletterForm = styled.div`
  max-width: 400px;
  margin-top: 1rem;
  position: relative;
`;

const NewsletterInput = styled.input`
  width: 90%;
  padding: 0.75rem;
  border: 1px solid #ffc107;
  background-color: #333;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const SignUpButton = styled.button`
  background-color: #ffc107;
  color: #333;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  &:hover {
    background-color: #e0a800;
  }
`;

const CopyrightContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
`;

const FooterMenu = styled.div`
  a {
    color: white;
    margin: 0 0.5rem;
    text-decoration: none;
    &:hover {
      color: #ffc107;
    }
  }
`;

const LinkPage = styled.a`
    color : white;
`;

const Footer = () => {
    const companyLinks = [
        { label: 'Home', icon: FaRegArrowAltCircleRight, Link: '/StayHealthy' },
        { label: 'Acteur', icon: FaRegArrowAltCircleRight, Link: '/StayHealthy/Acteur' },
        { label: 'Service', icon: FaRegArrowAltCircleRight, Link: '/StayHealthy/Service' },
        { label: "Matériel d'entrainement", icon: FaRegArrowAltCircleRight, Link: '/StayHealthy/Materiels' },
        { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: '/Contact Us' },
    ];

    const contactInfo = [
        { icon: 'fa-map-marker-alt', text: "20400 Ben m'sik, Casablanca, Maroc" },
        { icon: 'fa-phone-alt', text: '+012 345 67890' },
        { icon: 'fa-envelope', text: 'info@stayhealthy.com' },
    ];

    const socialLinks = [
        { icon: FaTwitter, scale: 1.3 },
        { icon: FaFacebookF, scale: 1.3 },
        { icon: FaYoutube, scale: 1.3 },
        { icon: FaLinkedin, scale: 1.3 },
    ];

    const openingHours = [
        { day: 'Monday - Saturday', time: '09AM - 09PM' },
        { day: 'Sunday', time: '10AM - 08PM' },
    ];

    return (
        <FooterContainer>
        <div className="container">
            <FooterContent>
            <Section>
                <SectionTitle>Company</SectionTitle>
                {companyLinks.map((link, index) => (
                <CompanyLink key={index} href={link.Link}>
                    {React.createElement(link.icon)}
                    {link.label}
                </CompanyLink>
                ))}
            </Section>
            <Section>
                <SectionTitle>Contact</SectionTitle>
                {contactInfo.map((info, index) => (
                <ContactInfo key={index}>
                    <i className={`fa ${info.icon}`} />
                    {info.text}
                </ContactInfo>
                ))}
                <SocialLinks>
                {socialLinks.map((social, index) => (
                    <SocialLink key={index} href="" scale={social.scale}>
                    {React.createElement(social.icon)}
                    </SocialLink>
                ))}
                </SocialLinks>
            </Section>
            <Section>
                <SectionTitle>Opening
                </SectionTitle>
                {openingHours.map((hours, index) => (
                <OpeningHours key={index}>
                    <h5>{hours.day}</h5>
                    <p>{hours.time}</p>
                </OpeningHours>
                ))}
            </Section>
            <Section>
                <SectionTitle>Newsletter</SectionTitle>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <NewsletterForm>
                <NewsletterInput type="text" placeholder="Your email" />
                <SignUpButton>Sign Up</SignUpButton>
                </NewsletterForm>
            </Section>
            </FooterContent>
        </div>
        <CopyrightContainer>
            <div>
            © <LinkPage href="#">Stay Healthy</LinkPage> , All Right Reserved.
            </div>
            <FooterMenu>
            <a href="">Home</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
            </FooterMenu>
        </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;