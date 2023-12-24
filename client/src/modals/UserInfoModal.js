import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { getUserData } from "../http/userApi";

const UserInfoModal = ({ show = false, hide, userId }) => {
    const [user, setUser] = useState()
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        getUserData(userId).then((response) => setUser(response.data)).then(setIsLogin(false))
    }, [userId])

    return (
        <>
            {isLogin ? (
                <Spinner animation="border" />
            ) : (
                <Modal show={show} onHide={hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {user ? user.email : ""}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {user ? user.userSkill.user_skills : ""}
                        <br></br>
                        {user ? user.userSkill.leetcode_url : ''}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={hide}>
                            Назад
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    )
}

export default UserInfoModal;