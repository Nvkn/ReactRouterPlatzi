import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogdata } from './blogdata'
import { useAuth } from './auth'

function BlogPost() {
    const navigate = useNavigate()
    const returnToBlog = () =>  {
        navigate("/blog")
    }

    const { slug } = useParams()
    
    const auth = useAuth()

    const blogpost = blogdata.find(post => post.slug === slug)

    const canDelete = auth.user?.isAdmin || blogpost.author == auth.user?.username

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button
                onClick={returnToBlog}
            >Volver al blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>

            {canDelete && (
                <button>Eliminar blog</button>
            )}
        </>
    )
}

export { BlogPost }