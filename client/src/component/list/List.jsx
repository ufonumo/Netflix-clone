import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React , {useRef , useState} from 'react';
import ListItem from '../listitem/ListItem';
import './list.scss'

const List = () => {

    const [slideNumber, setslideNumber] = useState(0)
    const [isMoved, setisMoved] = useState(false)

    const listRef = useRef()

    const handleClick = (direction) =>{
        let distance = listRef.current.getBoundingClientRect().x - 50;

        setisMoved(true)

        if(direction === 'left' && slideNumber > 0){
            setslideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${ 230 + distance}px)`
        }

        if(direction === 'right' && slideNumber < 7){
            setslideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${ -230 + distance}px)`
        }
    }
    return (
        <div className='list'>
            <span className="list_title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                 className='slider_arrow left'
                 style={{display : !isMoved && 'none' }}
                  onClick={() => handleClick("left")} />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                    <ListItem index={10} />
                    <ListItem index={11} />
                    <ListItem index={12} />
                    <ListItem index={13} />
                    <ListItem index={14} />
                    <ListItem index={15} />
                    <ListItem index={16} />
                    
                </div>
                <ArrowForwardIosOutlined className='slider_arrow right'  onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
