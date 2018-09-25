import React from "react";

// Wrapping {} around argument so it works like const.  could also call it props and define const like normal
const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={ () => onVideoSelect(video) }
        className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl }></img>
                </div>

                <div className="media-body">
                    <div className="media-heading"> { video.snippet.title }</div>
                </div>
            </div>
        </li>
    )
    return <li>Samus</li> 
};

export default VideoListItem
  