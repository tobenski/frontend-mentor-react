import React from 'react';
import documentIcon from '../images/icon-document.svg';
import uploadIcon from '../images/icon-upload.svg';
import folderIcon from '../images/icon-folder.svg';
import logo from '../images/logo.svg';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <Wrapper>
            <div>
                <img src={logo} alt='Fylo' className='logo' />
            </div>
            <div className='icon-container'>
                <img src={documentIcon} alt='documents' className='icon' />
                <img src={folderIcon} alt='Folder' className='icon' />
                <img src={uploadIcon} alt='Upload' className='icon' />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    background-color: var(--dark-blue);
    width: 85%;
    padding: 2rem;
    border-radius: 15px;
    border-top-right-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .logo {
        margin-bottom: 2rem;
        color: var(--pale-blue);
        svg {
            fill: currentColor;
        }
    }
    .icon-container {
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
    .icon {
        background-color: var(--very-dark-blue);
        padding: 0.75rem;
        border-radius: 10px;
    }
    @media (min-width: 640px) {
        width: 25%;
        margin-right: 1rem;
    }
`;

export default Navigation;
