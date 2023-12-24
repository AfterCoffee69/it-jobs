import React, { useState } from "react";
import { Form, Modal, Alert } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { createCategory } from "../http/categoryApi";
import { observer } from "mobx-react-lite";

const AddVacansyCategory = ({ show = false, hide }) => {
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const handleAddCategory = () => {
        createCategory({ name })
            .then(hide)
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    setError("Ошибка: имя уже существует");
                } else {
                    setError("Произошла ошибка сервера");
                }
            });
    };

    const handleCloseAlert = () => {
        setError(null);
    };

    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Добавить категорию вакансий
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            className="mb-2"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Название"
                        />
                    </Form>
                    {error && (
                        <Alert variant="danger" onClose={handleCloseAlert} dismissible>
                            {error}
                        </Alert>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="ms-2" variant="outline-danger" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="outline-dark" onClick={handleAddCategory}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default observer(AddVacansyCategory);