import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { VACANCIES_LIST_ROUTER } from "../utils/consts";
import Form from 'react-bootstrap/Form';


function MainPage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <Container >
            <Row className="mt-2">
                <Col>
                    <Form.Control
                        placeholder={"Поиск вакансии..."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Col>
                <Col>
                    <Button
                        variant="outline-dark"
                        onClick={() => navigate(`${VACANCIES_LIST_ROUTER}?name=${searchQuery}`)}
                    >
                        Найти
                    </Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={5} >
                    <p>
                        <span style={{ color: '#674175' }}>Добро пожаловать </span>на нашу главную страницу веб-приложения поиска вакансий для работы в IT!
                        <br></br>
                        <Button className="mt-2 mb-2" variant="outline-dark" onClick={() => navigate(VACANCIES_LIST_ROUTER)}>
                            Список вакансий
                        </Button>
                        <br></br>
                        Здесь вы найдете широкий выбор вакансий, связанных с информационными технологиями, которые помогут вам найти идеальную работу в IT-индустрии. Независимо от вашего уровня опыта или специализации, мы стремимся предоставить вам самые актуальные и интересные предложения о работе.
                        <br></br>
                        Чтобы начать поиск вакансий, просто воспользуйтесь нашим удобным поисковым инструментом, где вы сможете указать свои предпочтения по местоположению, зарплатным ожиданиям, требованиям к навыкам и другим параметрам. Мы стремимся сделать процесс поиска работы максимально удобным и эффективным для вас.
                    </p>
                </Col>
            </Row>
        </Container >
    )
}

export default MainPage