import './Grid.css';
import React from 'react'

export const Grid = ({ children, addClass }) => {
    return (
        <div className={`Grid ${addClass || ''}`}>
            {children}
        </div>
    )
}