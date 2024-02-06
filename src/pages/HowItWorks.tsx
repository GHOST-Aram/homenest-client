import React, { useState, useEffect} from 'react'
import Markdown from 'markdown-to-jsx'

const makrdownFileName = 'how-it-works.md'
const HowItWorks = () => {
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
        <div className="how-it-works">
            <Markdown>{ post }</Markdown>
        </div>
    )
}

export default HowItWorks