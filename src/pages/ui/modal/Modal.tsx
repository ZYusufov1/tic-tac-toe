import { FC, ReactNode } from 'react'
import './Modal.css'

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default Modal
