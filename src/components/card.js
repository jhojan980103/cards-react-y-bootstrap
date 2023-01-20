import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

function card({title, imageSource, text, url}) {
    return (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
            <div className='overflow'>
                <img src={imageSource} alt='' className='card-img-top'/>
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                    {
                        text ? text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
                    }
                </p>
                <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer">Ir a la pagina</a>
            </div>
        </div>
    )
}

card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default card

