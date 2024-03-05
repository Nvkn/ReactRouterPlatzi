import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
    return(
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            style={({ isActive}) => ({
                                color: isActive ? 'red' : 'blue',
                            })}
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}

                {/* <li>
                    <NavLink
                        // className={({ isActive }) => ''}
                        style={({ isActive}) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                        to="/"
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive}) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                        to="/blog"
                    >Blog</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile"
                        style={({ isActive}) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                    >Profile</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

const routes = []
routes.push({
    to: '/',
    text: 'Home'
    }
)
routes.push({
    to: '/profile',
    text: 'Profile'
    }
)
routes.push({
    to: '/blog',
    text: 'Blog'
    }
)

export { Menu }