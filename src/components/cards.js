import React from 'react'
import Card from './card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


const NCards = [
    {
        id: 1,
        title: 'Google',
        image: image1,
        url: 'https://www.google.com/?hl=es',
        // text: 'Esta es la pagina de Google'
    },
    {
        id: 2,
        title: 'Facebook',
        image: image2,
        url: 'https://www.facebook.com/'
    },
    {
        id: 3,
        title: 'YouTube',
        image: image3,
        url: 'https://www.youtube.com/'
    }
]

function cards() {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    NCards.map(cardN => (
                        <div className='col-md-4' key={cardN.id}>
                            <Card title={cardN.title} imageSource={cardN.image} url={cardN.url} text={cardN.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default cards
