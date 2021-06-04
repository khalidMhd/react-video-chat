import React, { useContext } from 'react'
import {SocketContext} from '../SocketContext'


const Notification = () => {
    const {answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <div>        
            {call.isReceivingCall && !callAccepted && (
            <div>
                <h1>{call.name} is calling</h1>
                <button className='btn btn-primary' onClick={answerCall} >Answer Call </button>
            </div>
            )}
        </div>
    )
}

export default Notification;