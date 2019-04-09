import React from 'react';
import './video.css';



const Video = (props) => {
    return (<div id = 'videos'>
            <div className = 'video1'>
        <iframe  src="https://www.youtube.com/embed/XbGs_qK2PQA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
            <a href = "https://www.youtube.com/embed/XbGs_qK2PQA">Eminem - Rap God</a>
       <div>
        <div>
            <span>Eminem</span>
            <div>
                <span>VEVO</span>
            </div>
            <div>
                <span> Youtube - 27 november</span>
            </div>
       </div>
       </div>
        </div>
            <div className = 'video2'>
        <iframe src="https://www.youtube.com/embed/8CdcCD5V-d8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <a href = "https://www.youtube.com/watch?v=8CdcCD5V-d8">Eminem - Venom</a>
        <div>
            <div>
            <span>Eminem</span>
            <div>
                <span>Shady Records</span>
            </div>
            <div>
                <span> 18 minutes ago</span>
            </div>
            </div>
            </div>
        </div>
        <div className = 'video3'>
        <iframe src="https://www.youtube.com/embed/9dcVOmEQzKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <a href = "https://www.youtube.com/embed/9dcVOmEQzKA">Eminem - Just Lose it</a>
        <div>
            <div>
            <span>Eminem</span>
            <div>
                <span>Shady Records</span>
            </div>
            <div>
                <span>today</span>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Video;