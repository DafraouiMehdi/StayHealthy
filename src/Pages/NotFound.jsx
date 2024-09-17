import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f8f8;
    color: #333;
`;

const Heading = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

const NotFound = () => {
    return (
        <Wrapper>
            <Heading>404 Page Not Found</Heading>
        </Wrapper>
    );
};

export default NotFound;
