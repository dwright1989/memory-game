import React from "react"
import ReactDom from 'react-dom'
import '../App.css';

const MODAL_STYLE={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE={
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function Modal({open, children, onClose}){

    if(!open) return null;

    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLE}/>
            <div style={MODAL_STYLE} id="modal">
                {children}
                <button onClick={onClose}>Reset</button>
            </div>
        </>, document.getElementById('portal')
    )

}
   