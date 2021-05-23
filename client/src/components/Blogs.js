import React from 'react';
import ReactPlayer from "react-player";
import "../App.css"

function Blogs() {
    return (
        <div>
            <h3>BLOGS</h3>
            <div className="App">
            </div>
            <div className="row">
                <div className="column">
                    <ReactPlayer
                        className="react-player"
                        width="400px"
                        height="300px"
                        url="https://www.youtube.com/watch?v=adB8RW4I3o4"
                    />
                </div>
                <div className="column">
                    <ReactPlayer
                        className="react-player"
                        width="400px"
                        height="300px"
                        url="https://www.youtube.com/watch?v=GEIYCvcOHLw&t=15s"
                    />
                </div>
                <div className="column">
                    <ReactPlayer
                        className="react-player"
                        width="400px"
                        height="300px"
                        url="https://www.youtube.com/watch?v=vohiTyczR8w"
                    />
                </div>

            </div>


        </div>
    )
}

export default Blogs
