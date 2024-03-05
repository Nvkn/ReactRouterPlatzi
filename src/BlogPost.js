import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogdata } from './blogdata'

function BlogPost() {
    const navigate = useNavigate()
    const returnToBlog = () =>  {
        navigate("/blog")
    }

    const { slug } = useParams()

    const blogpost = blogdata.find(post => post.slug === slug)
    return (
        <>
            <h2>{blogpost.title}</h2>
            <button
                onClick={returnToBlog}
            >Volver al blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    )
}

export { BlogPost }