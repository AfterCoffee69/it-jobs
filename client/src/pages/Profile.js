import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getLeetcodeData, getUserData } from "../http/userApi";
import UserData from "../components/UserData";
import UserSkillsData from "../components/UserSkillsData";
import UserVacancy from "../components/UserVacancy";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState()
    const [leetcodeData, setLeetcodeData] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUserData(id)
            .then((response) => {
                setUserData(response.data);
                if (response.data.userSkill.leetcode_url !== "") {
                    getLeetcodeData(response.data.userSkill.leetcode_url.split('/')[3])
                        .then((data) => {
                            setLeetcodeData(data.data);
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            console.error('Error fetching LeetCode data:', error);
                            setIsLoading(false);
                        });
                } else {
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <Container>
            {isLoading ? (
                <Spinner animation="border" variant="dark" />
            ) : (
                <>
                    <Row className="mt-2">
                        <UserData userData={userData} />
                        <UserSkillsData userData={userData} leetcodeData={leetcodeData} />
                        <UserVacancy vacancies={userData.vacancies} />
                    </Row>
                </>
            )}
        </Container>
    )
}

export default Profile