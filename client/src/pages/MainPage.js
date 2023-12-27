import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { VACANCIES_LIST_ROUTER } from "../utils/consts";
import Form from 'react-bootstrap/Form';


function MainPage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div style={{ backgroundColor: "#D5A9FF" }}>
            <Container style={{ minHeight: "92.7vh" }}>
                <Row style={{ textAlign: "center", paddingTop: '15%' }}>
                    <h2>Добро пожаловать на IT-Jobs</h2>
                </Row>
                <Row style={{ textAlign: "center" }} className="mt-2">
                    <h5>Веб приложение поиска кандидатов и вакансий для работы в IT</h5>
                </Row>
                <Row style={{ textAlign: "center" }} className="mt-4">
                    <Col md={4} style={{ marginLeft: "30%" }}>
                        <div>
                            <Form.Control
                                placeholder={"Поиск вакансии..."}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col md={1}>
                        <Button
                            style={{ backgroundColor: "#674175", borderColor: "#674175" }}
                            onClick={() => navigate(`${VACANCIES_LIST_ROUTER}?name=${searchQuery}`)}
                        >
                            Найти
                        </Button>
                    </Col>
                </Row>
                <Row style={{ textAlign: "center" }} className="mt-4">
                    <Col>
                        <Button
                            variant="primary"
                            style={{ backgroundColor: "#bb49e6", borderColor: "#bb49e6" }}
                            onClick={() => navigate(`${VACANCIES_LIST_ROUTER}?name=${searchQuery}`)}
                        >
                            <h6>
                                Список вакансий
                            </h6>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default MainPage