import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    color: white;
    min-height: 80vh;
    border-radius: 15px;
`;

const TextWrapper = styled.div`
    max-width: 50%;
    padding-right: 2rem;
    
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #4caf50; /* Sporty green color */
        margin-bottom: 1.5rem;
        font-family: 'Roboto', sans-serif;
    }
`;

const ImageWrapper = styled.div`
    max-width: 45%;
    display: flex;
    flex-direction: row;
    position: relative;
    height: 300px; /* Adjust height as needed */
    overflow: hidden;
    border-radius: 10px;
`;

const Img = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled.button`
    background-color: with; /* Sporty green */
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    color : black ;
    align-items: center;
    gap: 0.5rem; /* Space between text and image */
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #45a049; /* Slightly darker green */
        transform: scale(1.05);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3); /* Focus ring */
    }

    img {
        width: 20px; /* Adjust width as needed */
        height: 20px; /* Adjust height as needed */
        margin-left: 0.5rem; /* Space between text and icon */
    }
`;

const ProgrammeSection = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    color: #333;
    width: auto ;
`;

const ProgrammeTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #4caf50; /* Sporty green */
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
`;

const ProgrammeGrid = styled.div`
    display: flex;
    flex-decoration : row; 
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`;

const ProgrammeItem = styled(motion.div)`
    background: linear-gradient(135deg, #ffffff, #f3f3f3);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 300px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background: linear-gradient(135deg, #4caf50, #81c784); /* Sporty green gradient */
        color: white;
    }

    &:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.5) 20%, transparent 60%);
        opacity: 0.6;
        transition: transform 0.5s ease;
        transform: scale(0.8);
    }

    &:hover:before {
        transform: scale(1.2);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        right: -10px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translate(10px, 10px);
    }
`;


// ##############
const OurListPackagingSection = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    color: #333;
    // background-color: #f9f9f9; /* Light background for contrast */
`;

const OurListPackaginTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #4caf50; /* Sporty green */
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
`;

const OurListPackagesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
`;

const OurListPackageItem = styled(motion.div)`
    background: linear-gradient(135deg, #ffffff, #f3f3f3);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 280px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background: linear-gradient(135deg, #4caf50, #81c784); /* Sporty green gradient */
        color: white;
    }

    &:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.5) 20%, transparent 60%);
        opacity: 0.6;
        transition: transform 0.5s ease;
        transform: scale(0.8);
    }

    &:hover:before {
        transform: scale(1.2);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        right: -10px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translate(10px, 10px);
    }
`;

const PackageTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #4caf50; /* Sporty green */
`;

const PackageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    flex-grow: 1; /* Allow to take available space */
    
`;


const PackageDescription = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
`;

const PackagePrice = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    display: flex;
    justify-content: center; /* Center the price horizontally */
    align-items: center; /* Center the price vertically if needed */
    margin: 1rem 0; /* Add some margin to separate it from other elements */
`;

const PackageButton = styled.button`
    background-color: #4caf50; /* Sporty green */
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem; /* Ensure there's space above the button */
    margin-bottom: 0; /* Ensure no extra space below the button */
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #388e3c; /* Slightly darker green */
        transform: scale(1.05);
    }
`;




const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "/jeune-couple-athletes-milieu-urbain-fait-demonstration-entrainement-physique-force-pour-vie-saine_12-removebg-preview.png",
        "/couple-forme-montre-sa-musculature-sa-determination-pendant-combat-intense_1293074-254-removebg-preview.png",
        "/homme-femme-posent-pour-photo-bras-croises_1293074-32518-removebg-preview.png"
    ];

    const variants = {
        enter: { x: '100%', opacity: 0 },
        center: { x: '0%', opacity: 1 },
        exit: { x: '-100%', opacity: 0 }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
        <HomeWrapper>
            <TextWrapper>
                <h1>StayHealthy Fit Club Helping You Achieve Your Ideal Body Fitness</h1>
                <StyledButton>
                    Get Started
                    <img src="/bouton-de-lecture-video.png" alt="Play Button" />
                </StyledButton>
            </TextWrapper>
            <ImageWrapper>
                <AnimatePresence>
                    {images.map((src, index) => 
                        index === activeIndex && (
                            <Img
                                key={src}
                                src={src}
                                alt={`Sporty Pose ${index + 1}`}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 1 }}
                            />
                        )
                    )}
                </AnimatePresence>
            </ImageWrapper>
        </HomeWrapper>
        <ProgrammeSection>
                <ProgrammeTitle>Our Programmes</ProgrammeTitle>
                <ProgrammeGrid>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Yoga</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Cardio</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Strength Training</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Medal Cup</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Healthy Store</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Healthy Food Restaurant</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Free Exercise</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Nutrition Program</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Competition</ProgrammeItem>
                    <ProgrammeItem whileHover={{ scale: 1.05 }}>Club Champions</ProgrammeItem>
                </ProgrammeGrid>
        </ProgrammeSection>
        <OurListPackagingSection>
            <OurListPackaginTitle>Our List Packages</OurListPackaginTitle>
            <OurListPackagesGrid>
                <OurListPackageItem>
                    <PackageTitle>Basic Package</PackageTitle>
                    <PackageContent>
                        <PackageDescription>Access to all gym equipment and group classes.</PackageDescription>
                        <PackagePrice>$29.99/month</PackagePrice>
                    </PackageContent>
                    <ul>
                        <li>From 6 AM to 11 PM</li>
                        <li>Mixed fitness space and women-only area</li>
                        <li>100% Les Mills group classes and cross-training</li>
                        <li>Lounge</li>
                        <li>Store</li>
                    </ul>
                    <PackageButton>Join Now</PackageButton>
                </OurListPackageItem>
                <OurListPackageItem>
                    <PackageTitle>Premium Package</PackageTitle>
                    <PackageContent>
                        <PackageDescription>Includes personal training sessions and access to premium facilities.</PackageDescription>
                        <PackagePrice>$49.99/month</PackagePrice>
                    </PackageContent>
                    <ul>
                        <li>From 6 AM to 11 PM</li>  
                        <li>Mixed fitness space and women-only area</li>
                        <li>100% Les Mills group classes and cross-training</li> 
                        <li>Lounge</li>
                        <li>Store</li>
                        <li>Remote Training</li> 
                        <li>Delivery</li> 
                        <li>Additional activities by reservation</li>
                    </ul>
                    <PackageButton>Join Now</PackageButton>
                </OurListPackageItem>
                <OurListPackageItem>
                    <PackageTitle>VIP Package</PackageTitle>
                    <PackageContent>
                        <PackageDescription>Unlimited access, personal nutrition plan, and VIP lounge access.</PackageDescription>
                        <PackagePrice>$79.99/month</PackagePrice>
                    </PackageContent>
                    <ul>
                        <li>From 6 AM to 11 PM</li>  
                        <li>Mixed fitness space and women-only area</li>
                        <li>100% Les Mills group classes and cross-training</li> 
                        <li>Lounge</li>
                        <li>Store</li>
                        <li>Remote Training</li> 
                        <li>Delivery</li> 
                        <li>Additional activities by reservation</li>
                        <li>Fitness Tracking</li>
                        <li>Personal Coaching</li>
                    </ul>
                    <PackageButton>Join Now</PackageButton>
                </OurListPackageItem>
            </OurListPackagesGrid>
        </OurListPackagingSection>

            
        </>
    );
}

export default Home;
