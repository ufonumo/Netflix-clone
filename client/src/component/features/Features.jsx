import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import image from '../../assets/samuel.jpg';
import stone from '../../assets/stone.jpg';
import './featured.scss'

const Features = ({ type }) => {
    return (
        <div className='featured'>
            { type && (
                <div className="category">
                    <span>{ type === 'movie' ? 'Movies' : 'series'}</span>
                    <select name="genre" id="">
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={image} width='100%' height='100%' alt="" />
            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="image" />
                <span className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, non. Mollitia molestiae illo voluptate ratione quibusdam assumenda. Blanditiis, nisi quo? Architecto necessitatibus fuga exercitationem iusto magni modi esse, maiores commodi.
                </span>
                <div className="buttons">
                    <button className="play">   <PlayArrow/> <span>Play</span> </button>
                    <button className="info_btn"> <InfoOutlined/> <span>Info</span> </button>
                </div>
            </div>
        </div>
    )
}

export default Features
