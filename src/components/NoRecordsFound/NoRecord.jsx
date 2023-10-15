import React, { useEffect } from 'react'
import "./norecords.css";
import { useDispatch } from 'react-redux';
import { actions } from '../../Slices/dataSlice';
function NoRecord({record,setRecord}) {
    
    return (
        <>
            <div class="empty-state">
                <div class="empty-state__content">
                    <div class="empty-state__icon">
                        <img src="https://res.cloudinary.com/dzmf1giby/image/upload/v1697006679/emptybox_ujwaob.png" alt="" />
                    </div>
                    <div class="empty-state__message">No Entries yet.</div>
                </div>
            </div>
        </>
    )
}

export default NoRecord