import React, { useEffect } from 'react'
import "./norecords.css";
import { useDispatch } from 'react-redux';
import { actions } from '../../Slices/dataSlice';
function NoRecord({record,setRecord}) {
    
    return (
        <>
            <div className="empty-state">
                <div className="empty-state__content">
                    <div className="empty-state__icon">
                        <img src="https://res.cloudinary.com/dzmf1giby/image/upload/v1697006679/emptybox_ujwaob.png" alt="No records found" />
                    </div>
                    <div className="empty-state__message">No Entries yet.</div>
                </div>
            </div>
        </>
    )
}

export default NoRecord