import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { createReqCategory } from "../http/categoryApi";
import { observer } from "mobx-react-lite";

const AddReqCategory = ({ show = false, hide }) => {
    const [name, setName] = useState("");

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить категорию требований 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control className="mb-2" type="text" value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="ms-2" variant="outline-danger" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="outline-dark" onClick={() => {
                        createReqCategory({name: name}).then(hide)
                    }}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default observer(AddReqCategory);