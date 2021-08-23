import { Add, PlayArrow, ThumbDownAltOutlined, ThumbsUpDownOutlined } from '@material-ui/icons';
import React ,{useState} from 'react';
import './listitem.scss'

const ListItem = ({index}) => {
    const [isHovered, setisHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className='listItem' 
            style={{left: isHovered && index * 225  - 50 + index * 2.5}}
            onMouseEnter={() => setisHovered(true)}    onMouseLeave={() => setisHovered(false)}
        >
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />

            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon'/>
                            <Add className='icon'/>
                            <ThumbDownAltOutlined className='icon'/>
                            <ThumbsUpDownOutlined className='icon'/>
                        </div>
                        <div className="itemDetails">
                            <span>1 hour 20 min</span>
                            <span className='limit'> +16</span>
                            <span>2018</span>
                        </div>
                        <p className="decribe">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt expedita illo unde maiores
                        </p>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
