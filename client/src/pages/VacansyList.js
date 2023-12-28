import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategoryVacansy } from "../http/categoryApi";
import { getAllVacansy } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { VACANCY_PAGE_ROUTE } from "../utils/consts";
import NoResult from "../components/NoResult";

function VacansyList() {
    const location = useLocation();
    const navigate = useNavigate();
    const search = new URLSearchParams(location.search).get("name");
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [vacansies, setVacansies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoriesId, setCategoriesId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await getAllVacansy({ name: search });
                if (search) {
                    setSearchQuery(search)
                }
                setVacansies(response.data.rows);
                const categoryResponse = await getAllCategoryVacansy();
                setCategories(categoryResponse);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [search]);

    return (
        <Container>
            <Row className="mt-2">
                <Row>
                    <Col>
                        <Form.Control
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button
                            onClick={() => getAllVacansy({ name: searchQuery, categoryId: categoriesId })
                                .then((data) => setVacansies(data.data.rows))}
                            variant="outline-dark"
                        >
                            Найти
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={4}>
                        <Form.Select
                            style={{ cursor: "pointer" }}
                            value={categoriesId}
                            onChange={(e) => setCategoriesId(e.target.value)}
                        >
                            <option value="">Выберите категорию</option>
                            {categories.map((e) => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button
                            variant="outline-secondary"
                            className="ms-2"
                            onClick={() => {
                                getAllVacansy()
                                    .then((data) => {
                                        setVacansies(data.data.rows);
                                        setCategoriesId('');
                                        setSearchQuery('');
                                    });
                            }}
                        >
                            Очистить
                            {categoriesId !== '' || searchQuery !== '' ? (
                                <Badge className="ms-2">!</Badge>
                            ) : null}
                        </Button>
                    </Col>
                </Row>
            </Row>
            <Row className="mt-2">
                {isLoading || vacansies.length === 0 ? (
                    <NoResult />
                ) : (
                    vacansies.map((item) => {
                        return (
                            <Col md={3} key={item.id}>
                                <Card style={{ height: "100%" }}>
                                    <Card.Img
                                        variant="top"
                                        style={{ height: "200px" }}
                                        src={process.env.REACT_APP_API_URL + item.img}
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text>{item.vacanciseCategory.name}</Card.Text>
                                        <Card.Text>
                                            Требования:
                                            {item.requirements.map((req, index) => {
                                                const isLast = index === item.requirements.length - 1;
                                                return isLast ? ` ${req.name}.` : ` ${req.name},`;
                                            })}
                                        </Card.Text>
                                        <Card.Text>
                                            <Button
                                                onClick={() => navigate(VACANCY_PAGE_ROUTE + '/' + item.id)}
                                                variant="outline-dark"
                                            >
                                                Подробнее
                                            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                )}
            </Row>
        </Container>
    );
}

export default observer(VacansyList);