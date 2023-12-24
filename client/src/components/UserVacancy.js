import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VACANCY_PAGE_ROUTE } from "../utils/consts";
import { Badge, Button, Card, CardBody, Col, FormLabel, Row } from "react-bootstrap";
import EditVacacy from "../modals/EditVacancy";
import EditVacancy from "../modals/EditVacancy";

function UserVacancy({ vacancies }) {
    const navigate = useNavigate()
    const [editVacancy, setEditVacancy] = useState(false)
    const [editData, setEditData] = useState("")

    return (
        <Col>
            <FormLabel>Мои объявления</FormLabel>
            {vacancies.map((item) => {
                return (
                    <Card className="mt-2" key={item.id}>
                        <CardBody>
                            <Row>
                                <Col>
                                    {item.name}
                                </Col>
                            </Row>
                            <Col>
                                <Row>
                                    {item.Responses.length > 0 ?
                                        <Col>
                                            Отзывов
                                            <Badge className="ms-2">{item.Responses.length}</Badge>
                                        </Col>
                                        :
                                        <></>
                                    }
                                </Row>
                                <Button
                                    className="mt-2"
                                    variant="outline-dark"
                                    onClick={() => navigate(VACANCY_PAGE_ROUTE + "/" + item.id)}
                                >
                                    Перейти
                                </Button>
                                <Button
                                    className="ms-2 mt-2"
                                    variant="outline-dark"
                                    onClick={() => {
                                        setEditData(item)
                                        setEditVacancy(true)
                                    }}
                                >
                                    Изменить
                                </Button>
                            </Col>
                        </CardBody>
                    </Card>
                )
            })}
            <EditVacancy show={editVacancy} hide={() => setEditVacancy(false)}  vacancy={editData}/>
        </Col>
    )
}

export default UserVacancy