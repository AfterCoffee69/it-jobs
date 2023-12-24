import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { createRes, getVacancyById } from "../http/userApi";
import { MAIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import UserInfoModal from "../modals/UserInfoModal";

const VacancyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [userInfo, setUserInfo] = useState(false);
    const [userInfoId, setUserInfoId] = useState(0);
    const [vacancyData, setVacancyData] = useState();

    useEffect(() => {
        getVacancyById(id)
            .then((response) => {
                setVacancyData(response.data);
                setIsLogin(false);
            })
    }, [id]);

    return (
        <Container>
            {isLogin ? (
                <Spinner animation="border" />
            ) : (
                <Container className="mt-2">
                    <Row className="mt-2">
                        <Col md={2}>
                            <img
                                style={{ width: "200px", height: "200px" }}
                                alt="img"
                                src={process.env.REACT_APP_API_URL + vacancyData.img}
                            />
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardBody>
                                    {vacancyData.name}
                                    <br></br>
                                    {vacancyData.description}
                                    <br></br>
                                    Дата размещения: {vacancyData.createdAt.split('T')[0]}
                                    <br></br>
                                    {vacancyData.vacanciseCategory.name}
                                    <br></br>
                                    Список технологий:
                                    {vacancyData.requirements.map((req) => {
                                        return req.name + " ";
                                    })}
                                </CardBody>
                            </Card>
                            <Card className="mt-2">
                                <CardBody>
                                    Создатель вакансии: {vacancyData.user.email}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {parseInt(localStorage.getItem('userId')) !== parseInt(vacancyData.user.id) && 
                                !vacancyData.Responses.some(res => res.user.id === parseInt(localStorage.getItem('userId'))) ?
                                    <Button
                                        variant="outline-dark"
                                        onClick={() => {
                                            createRes({
                                                userId: localStorage.getItem('userId'),
                                                vacancyId: id
                                            });
                                            navigate(MAIN_ROUTE);
                                        }}
                                    >
                                        Откликнуться
                                    </Button>
                                    :
                                    <Row className="mt-2">
                                        <Col md={5}>
                                            <Card>
                                                <CardBody>
                                                    <CardText>Отклики</CardText>
                                                    <ul>
                                                        {vacancyData.Responses.map((res) => {
                                                            return (
                                                                <li key={res.user.id}>
                                                                    {res.user.email}
                                                                    <Button
                                                                        className="ms-2"
                                                                        variant="outline-dark"
                                                                        onClick={() => {
                                                                            setUserInfoId(res.user.id);
                                                                            setUserInfo(true);
                                                                        }}
                                                                    >
                                                                        Инфо
                                                                    </Button>
                                                                    <br></br>
                                                                    Дата отклика: {res.createdAt.split('T')[0]}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                            }
                        </Col>
                    </Row>
                    <UserInfoModal show={userInfo} hide={() => setUserInfo(false)} userId={userInfoId} />
                </Container>
            )}
        </Container>
    );
};

export default observer(VacancyPage);