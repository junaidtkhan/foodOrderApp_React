import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div onClick={props.hideCart} className={classes.backdrop}/>
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        
        <div className={classes.content}>{props.children}</div>
    </div>
}
 const Modal = props => {
    const portalElement = document.getElementById('overlays')
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop hideCart={props.hideCart}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

    </Fragment>
}
export default Modal