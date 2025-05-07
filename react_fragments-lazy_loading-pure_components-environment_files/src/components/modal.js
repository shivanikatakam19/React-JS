import './modal.css'

export default function Modal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>This is modal.</h2>
                <div>This is modal content.</div>
                <button className="modal-close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}