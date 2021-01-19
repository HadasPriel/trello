import React, { useState } from 'react'
import { Uploader} from '../cmps/Uploader'
// import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

export function AddDeutimeBar(props) {



    return (
        <div className="edit-bar">
            <header className="seconde">
                <h3>Upload image</h3>
                <button onClick={props.toggleAddImg}>x</button>
                
            </header>
            <main>
                <Uploader/>
                {/* <DatePicker
                    selected={startDate}
                    onSelect={date => setStartDate(() => { props.addDeuDate(date) })}
                    inline
                /> */}
            </main>
        </div>
    );

}