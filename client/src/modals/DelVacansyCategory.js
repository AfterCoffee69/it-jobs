import React, { useEffect, useState } from "react";
import { Col, Form, Modal, ModalBody } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { getAllCategoryVacansy } from "../http/categoryApi";
import { delVacancyCategory } from "../http/adminApi";
import { observer } from "mobx-react-lite";

const DelVacansyCategory = ({ show = false, hide }) => {
    const [categories, setCategories] = useState()
    const [id, setId] = useState()

    useEffect(() => {
        getAllCategoryVacansy().then((data) => setCategories(data))
    }, [])

    return (
        <>
            {categories ?
                <Modal show={show} onHide={hide}>
                    <ModalBody>
                        <Form.Select
                            style={{ cursor: "pointer" }}
                            value={id}
                            onChange={(e) => setId(e.target.value)}
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
                    </ModalBody>
                    <Modal.Footer>
                        <Col>
                            <Button variant={'outline-dark'} onClick={hide}>
                                Отмена
                            </Button>
                        </Col>
                        <Col>
                            <Button variant={'outline-danger'} onClick={() => {
                                delVacancyCategory(id)
                                hide()
                            }}>
                                Удалить
                            </Button>
                        </Col>
                    </Modal.Footer>
                </Modal>
                :
                <></>
            }
        </>
    )
}

export default observer(DelVacansyCategory);