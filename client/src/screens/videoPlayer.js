import React, { useContext } from 'react'

import {SocketContext} from '../SocketContext'

const VideoPalyer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
    return (
        <div className="container">
            <div className='row'>

                {
                    stream && (
                        <div className="col-sm-4">
                        <h4>{name || "Name"}</h4>
                        <div className='card'>
                            <video controls playsInline muted ref={myVideo} autoPlay />
                        </div>
                    </div>
                    )
                }

                {
                    callAccepted && !callEnded && (
                    <div className="col-sm-4">
                        <h4>{call.name || "Name"}</h4>
                        <div className='card'>
                            <video controls playsInline  ref={userVideo} autoPlay />
                        </div>
                    </div>
                    )
                }
                

            </div>
            
        </div>
    )
}

export default VideoPalyer;