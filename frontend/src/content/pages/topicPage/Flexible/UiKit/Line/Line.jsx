import './Line.css';
import React from 'react'
export const Line = ({ children, addClass }) => {
    return (
        <div className={`Line ${addClass || ''}`}>
            {children}
        </div>
    )
}

export const Between = (props) => {
    return <Line {...props} addClass="between" />
}

export const Around = (props) => {
    return <Line {...props} addClass="around" />
}

export const Rows = ({ children, addClass }) => {
    return (
        <div className={`Rows ${addClass || ''}`}>
            {children}
        </div>
    )
}
