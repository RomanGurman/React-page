import React from 'react';
import Video from './video/video.js';


const Search = (props) => {
    return (<div>
        <div>
        <Video channel = {props.author.channel}
        >
    </Video>
    </div>  
        <div>
        {props.children}
        </div>
    </div>
    )
}
export default Search;