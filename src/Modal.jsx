import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import './bootstrap/css/bootstrap-grid.css'
import './bootstrap/css/bootstrap-reboot.css'
import './bootstrap/css/bootstrap-utilities.css'
import './bootstrap/css/bootstrap.css'

export function Modal({ onClose, children, title })
{

    return createPortal(
        <>
            <div className="modal fade show" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {title}
                            </h5>
                            <button className="close" type="button" aria-label="Close">
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>                
            </div>
            <div className="modal-backdrop fade show"></div>
        </>, document.body
    )

}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}