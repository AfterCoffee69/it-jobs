import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Form } from "react-bootstrap";
import { addLeetcodeUrl, addUserSkill } from "../http/userApi";
import { useNavigate } from "react-router-dom";

function UserData({ userData }) {
    const [inputUserSkills, setInputUserSkills] = useState()
    const [url, setUrl] = useState("");

    const addLeetCode = () => {
        if (url.includes("https://leetcode.com")) {
            addLeetcodeUrl({ id: userData.userSkill.id, url: url }).then(() => window.location.reload())
        } else {
            console.log("Ссылка на профиль LeetCode отсутствует.");
        }
    };

    return (
        <Col md={4}>
            <h5>Информация о пользователе</h5>
            <Card>
                <CardHeader>Данные о пользователе</CardHeader>
                <CardBody>
                    <ul>
                        <li>
                            Id: {userData.id}
                        </li>
                        <li>
                            Почта: {userData.email}
                        </li>
                        <li>
                            Роль: {userData.role}
                        </li>
                        <li>
                            Дата регистрации: {userData.createdAt.split('T')[0]}
                        </li>
                        {userData.userSkill.leetcode_url === "" ?
                            <>
                                <Form.Control
                                    placeholder="Добавьте ссылку на профиль Leetcode"
                                    onChange={(e) => setUrl(e.target.value)}
                                >
                                </Form.Control>
                                <Button
                                    variant="outline-dark"
                                    className="mt-2 mb-2"
                                    onClick={() => {
                                        addLeetCode()
                                    }}
                                >
                                    Добавить</Button>
                            </>
                            :
                            <>
                                <li>
                                    Leetcode url:
                                    <a href={userData.userSkill.leetcode_url} style={{ textDecoration: "none", color: "#674175" }} >
                                        {userData.userSkill.leetcode_url}
                                    </a>
                                </li>
                            </>
                        }
                        {userData.userSkill.user_skills === '' ?
                            <>
                                <Form.Control
                                    placeholder="Добавьте информацию о вас"
                                    onChange={(e) => setInputUserSkills(e.target.value)}
                                >
                                </Form.Control>
                                <Button
                                    variant="outline-dark"
                                    className="mt-2"
                                    onClick={() => {
                                        if (inputUserSkills) {
                                            addUserSkill({ id: userData.userSkill.id, user_skills: inputUserSkills })
                                                .then(() => window.location.reload());
                                        } else {
                                            console.log("Введите информацию о ваших навыках.");
                                        }
                                    }}
                                >
                                    Добавить
                                </Button>
                            </>
                            :
                            <>
                                <li>
                                    Skills data:
                                    {userData.userSkill.user_skills}
                                </li>
                            </>

                        }
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default UserData 