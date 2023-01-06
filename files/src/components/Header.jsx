import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <h1>Marek Rykaczewski</h1>
            <h3>Frontend Developer</h3>
            <h4>marekrykaczewski.website</h4>
            <div className='header--buttons'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}