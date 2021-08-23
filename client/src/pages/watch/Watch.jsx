import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.scss'
import vidwatch from '../../assets/healthy.mp4'

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined /> Home
            </div>
            <video 
                className='video'
                autoplay 
                progress 
                controls
                src={vidwatch}
                />
        </div>
    )
}

export default Watch
