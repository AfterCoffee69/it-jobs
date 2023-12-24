import React, { useEffect, useState } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { getAllCategoryVacansyReq } from "../http/categoryApi";
import { createReq } from "../http/adminApi";
import { observer } from "mobx-react-lite";

const AddVacansyReq = ({ show = false, hide }) => {
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllCategoryVacansyReq().then((data) => setCategories(data)).then(setIsLoading(false))
    }, [])

    return (
        <>
            <Modal show={show} onHide={hide}>
                {isLoading ? (
                    <Spinner animation="border" variant="dark" />
                ) : (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Добавить требования
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Select
                                style={{ cursor: "pointer" }}
                                value={categoryId || ""}
                                onChange={(e) => { setCategoryId(e.target.value) }}
                            >
                                <option disabled value="">
                                    Выберите категорию
                                </option>
                                {categories.map((e) => (
                                    <option
                                        key={e.id}
                                        value={e.id}
                                    >
                                        {e.name}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form>
                                <Form.Control className="mb-2 mt-2" type="text" value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Название" />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="ms-2" variant="outline-danger" onClick={hide}>
                                Отмена
                            </Button>
                            <Button variant="outline-dark" onClick={() => {
                                createReq({name: name, id: categoryId }).then(hide)
                            }}>
                                Добавить
                            </Button>
                        </Modal.Footer>

                    </>
                )}
            </Modal>
        </>
    )
}

export default observer(AddVacansyReq);