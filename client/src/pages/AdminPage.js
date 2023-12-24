import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import AddVacansyCategory from "../modals/AddVacansyCategory";
import AddReqCategory from "../modals/AddReqCategory";
import AddVacansyReq from "../modals/AddVacansyReq";
import AddVacansy from "../modals/AddVacansy";
import DelVacansyCategory from "../modals/DelVacansyCategory";

const AdminPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [vacansyModel, setVacansyModel] = useState(false)
    const [vacansyReq, setVacansyReq] = useState(false)
    const [vacansyCreateModel, setVacansyCreateModel] = useState(false)
    const [delVacancyModel, setDelVacancyModel] = useState(false)
    const [req, setReq] = useState(false)

    useEffect(() => {
        setIsLogin(false);
    }, []);

    return (
        <Container>
            {isLogin ?
                <Spinner></Spinner>
                :
                <Container className="mt-2">
                    <Row className="mt-2">
                        <Col>
                            <p>Admin</p>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={3}>
                            <Button variant="outline-dark"
                                onClick={() => setVacansyModel(true)}>Добавить категорию вакансий</Button>
                            <Button className="mt-2" variant="outline-dark"
                                onClick={() => setReq(true)}>Добавить категорию требований</Button>
                            <Button className="mt-2" variant="outline-dark"
                                onClick={() => setVacansyReq(true)}>Добавить требования</Button>
                            <Button className="mt-2" variant="outline-dark"
                                onClick={() => setVacansyCreateModel(true)}>Добавить вакансию</Button>
                        </Col>
                    </Row>
                    <Col md={3}>
                        <Button className="mt-2" variant="outline-danger"
                            onClick={() => setDelVacancyModel(true)}>Удалить категорию вакансий</Button>
                    </Col>
                </Container>
            }
            <AddVacansyCategory show={vacansyModel} hide={() => {
                setVacansyModel(false)
                window.location.reload()
            }} />
            <AddVacansyCategory show={vacansyModel} hide={() => {
                setVacansyModel(false);
                window.location.reload();
            }} />
            <AddReqCategory show={req} hide={() => {
                setReq(false);
                window.location.reload();
            }} />
            <AddVacansyReq show={vacansyReq} hide={() => {
                setVacansyReq(false);
                window.location.reload();
            }} />
            <AddVacansy show={vacansyCreateModel} hide={() => {
                setVacansyCreateModel(false);
                window.location.reload();
            }} />
            <DelVacansyCategory show={delVacancyModel} hide={() => {
                setDelVacancyModel(false);
                window.location.reload();
            }} />
        </Container>
    )
}

export default observer(AdminPage)