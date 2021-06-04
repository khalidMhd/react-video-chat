import React, { useContext, useState } from 'react'
import {CopyToClipBoard} from 'react-copy-to-clipboard'
import {SocketContext} from '../SocketContext'

const Opetions = ({children}) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [ idToCall, setIdToCall ] = useState("")

    return (
        <div className="container my-4">
            <div className='row'>
                <div className="col-sm-4">
                    <div className="card">
                        <form  noValidate autoComplete="off">
                            <h3>Account Info</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            {/* <CopyToClipBoard text={me}> */}
                                <p> {me}</p>
                            {/* </CopyToClipBoard> */}
                        </form>

                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="card">
                        {/* <form > */}
                            <h3>Make a call</h3>
                            <div className="form-group">
                                <label>Id to call</label>
                                <input value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                            </div>

                            {
                                callAccepted && !callEnded ? (
                                    <button className="btn btn-secondary" onClick={leaveCall}>Hang Up</button>
                                ): (
                                    <button className="btn btn-primary" onClick={() => callUser(idToCall)}>Call </button>
                                )

                            }

                           
                        {/* </form> */}

                    </div>
                </div>
            </div>
            {children}

        </div>
    )
}

export default Opetions;