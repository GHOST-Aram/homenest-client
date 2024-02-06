import React, { useState, useEffect} from 'react'
import Markdown from 'markdown-to-jsx'

const makrdownFileName = 'about.md'

const AboutUs = () => {
    const [post, setPost] = useState('')

    useEffect(() => {
        import(`../markdown/${makrdownFileName}`).then(result =>{
            fetch(result.default)
                .then(result => result.text())
                .then(result => setPost(result))
                .catch(err => console.log(err))
        }).catch(err => console.log(err))
    })

    return (
        <div className="about-us">
            <Markdown>{ post }</Markdown>
        </div>
    )
}

export default AboutUs