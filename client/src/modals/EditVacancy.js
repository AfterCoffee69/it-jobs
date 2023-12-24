import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import { getAllCategoryVacansy } from "../http/categoryApi";
import { getAllReq, updateVacancy } from "../http/userApi";

const EditVacancy = ({ show = false, hide, vacancy }) => {
    const [name, setName] = useState("");
    const [requirements, setRequirements] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (vacancy) {
            setName(vacancy.name);
            setDescription(vacancy.description);
            setCategoryId(vacancy.categoryId);
        }
    }, [vacancy]);

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
            });
    }, []);


    const updateVacancyData = () => {
        const updatedData = {
            id: vacancy.id,
            name,
            categoryId,
            description,
        };

        updateVacancy(updatedData).then(hide);
    };

    return (
        <>
            <Modal show={show} onHide={hide}>
                {isLoading ? (
                    <Spinner animation="border" variant="dark" />
                ) : (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Изменить вакансию</Modal.Title>
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
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form>
                                <Form.Control
                                    className="mt-2"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Название"
                                />
                                <Form.Control
                                    className="mt-2"
                                    as={"textarea"}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Описание"
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="ms-2"
                                variant="outline-danger"
                                onClick={hide}
                            >
                                Отмена
                            </Button>
                            <Button variant="outline-dark" onClick={updateVacancyData}>
                                Изменить
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    );
};

export default EditVacancy;