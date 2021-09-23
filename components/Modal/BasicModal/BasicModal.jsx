import React from 'react'
import { Modal, Icon } from 'semantic-ui-react'

export default function BasicModal({ show, setShow, title, children, ...rest }) {
    const onClose = () => setShow(false)
    return (
        <Modal open={show} onClose={onClose} {...rest}>
            <Modal.Header>
                <span>{title}</span> <Icon name="close" onClose={onClose} />
            </Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    )
}
