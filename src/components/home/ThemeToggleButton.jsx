import React, { useState } from 'react';
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../home/Themes';

const Button = styled.button`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    `;

    const Svg = styled.svg`
    fill: currentColor;
    `;

    const ThemeToggleButton = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
    };

    return (
        <Button onClick={toggleTheme}>
        Cambiar a {theme === lightTheme ? 'modo oscuro' : 'modo claro'}
        <Svg className="mood-dark" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M560-80q-82 0-155-31.5t-127.5-86Q223-252 191.5-325T160-480q0-83 31.5-155.5t86-127Q332-817 405-848.5T560-880q54 0 105 14t95 40q-91 53-145.5 143.5T560-880q0 112 54.5 202.5T760-134q-44 26-95 40T560-880q0 133 93.5 226.5T560-480Zm0-80h21q10 0 19-2-57-66-88.5-147.5T480-480q0 133 93.5 226.5T560-160Zm-80-320Z" />
        </Svg>
        </Button>
    );
};

export default ThemeToggleButton;