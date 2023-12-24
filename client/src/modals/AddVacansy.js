import React, { useEffect, useState } from "react";
import { Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { getAllCategoryVacansy } from "../http/categoryApi";
import { AddVacancy, getAllReq } from "../http/userApi";
import { observer } from "mobx-react-lite";

const AddVacansy = ({ show = false, hide }) => {
    const [name, setName] = useState("");
    const [requirements, setRequirements] = useState([])
    const [reqIds, setReqIds] = useState([])
    const [categoryId, setCategoryId] = useState("");
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState();
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const createVacansy = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('userId', localStorage.getItem('userId'))
        formData.append('vacanciseCategoryId', categoryId)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('requirements', reqIds)

        AddVacancy(formData).then(hide)
    }

    useEffect(() => {
        getAllCategoryVacansy()
            .then((data) => {
                setCategories(data);
            })
            .then(() => {
                getAllReq()
                    .then((response) => {
                        setRequirements(response.data);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            })
    }, []);

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleCategorySelection = (reqId) => {
        setReqIds((prevCategoryIds) => {
            if (prevCategoryIds.includes(reqId)) {
                return prevCategoryIds.filter((id) => id !== reqId);
            } else {
                return [...prevCategoryIds, reqId];
            }
        });
    };


    return (
        <>
            <Modal show={show} onHide={hide}>
                {isLoading ? (
                    <Spinner animation="border" variant="dark" />
                ) : (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Добавить вакансию
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Select
                                style={{ cursor: "pointer" }}
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
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
                                <Form.Control className="mt-2" type="text" value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Название" />
                                <Form.Control className="mt-2" as={"textarea"} value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Описание" />
                                <Form.Group className="mt-2" controlId="">
                                    <Form.Label>Добавить фото</Form.Label>
                                    <Form.Control
                                        required
                                        type="file"
                                        onChange={selectFile}
                                        placeholder="Добавить фото..."
                                    />
                                </Form.Group>
                                <Row className="mt-2">
                                    {requirements.map((item) => (
                                        <Col
                                            xs={5}
                                            key={item.id}
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                id={`category-${item.id}`}
                                                label={item.name}
                                                onChange={() => handleCategorySelection(item.id)}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="ms-2" variant="outline-danger" onClick={hide}>
                                Отмена
                            </Button>
                            <Button variant="outline-dark" onClick={() => {
                                createVacansy()
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

export default observer(AddVacansy);