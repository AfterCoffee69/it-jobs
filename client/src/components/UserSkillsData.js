import React from "react";
import { Card, CardBody, Col, FormLabel } from "react-bootstrap";

function UserSkillsData({ userData, leetcodeData }) {
    return (
        <Col md={4}>
            {userData.userSkill.leetcode_url !== '' ?
                <>
                    <h5>Решенные задачи</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <Card>
                                <CardBody>Easy Solved: {leetcodeData.easySolved}</CardBody>
                            </Card>
                        </li>
                        <li className="mt-2">
                            <Card>
                                <CardBody>Medium Solved: {leetcodeData.mediumSolved}</CardBody>
                            </Card>
                        </li>
                        <li className="mt-2">
                            <Card>
                                <CardBody>Hard Solved: {leetcodeData.hardSolved}</CardBody>
                            </Card>
                        </li>
                        <li className="mt-2">
                            <Card>
                                <CardBody>Total Solved: {leetcodeData.totalSolved}</CardBody>
                            </Card>
                        </li>
                    </ul>
                </>
                :
                <FormLabel>Добавьте ссылку на leetcode чтобы увидеть решенные задачи</FormLabel>
            }
        </Col>
    )
}

export default UserSkillsData