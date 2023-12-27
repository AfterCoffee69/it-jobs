import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFIL_ROUTE } from '../utils/consts';

const NavBar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate(MAIN_ROUTE)
    }

    return (
        <Navbar style={{ backgroundColor: '#674175' }}>
            <Container>
                <NavLink
                    style={{
                        color: "white", textDecoration: "none"
                    }}
                    to={MAIN_ROUTE}
                >
                    Jobs
                </NavLink>
                {localStorage.getItem('isAuth') ?
                    <Nav className="ml-auto">
                        {localStorage.getItem('userRole') === 'ADMIN' ?
                            < Button
                                className="me-2"
                                variant='outline-light'
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ
                            </Button>
                            :
                            <></>
                        }
                        < Button
                            className="me-2"
                            variant='outline-light'
                            onClick={() => navigate(PROFIL_ROUTE + '/' + localStorage.getItem('userId'))}
                        >
                            Профиль
                        </Button>
                        <Button
                            variant='outline-light'
                            className='me-2'
                            onClick={() => navigate()}
                        >
                            О нас
                        </Button>
                        <Button
                            variant='outline-light'
                            onClick={() => logout()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <>
                        <Button
                            variant='outline-light'
                            onClick={() => navigate()}
                        >
                            О нас
                        </Button>
                        <Nav className="ml-auto">
                            <Button
                                variant='outline-light'
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Авторизация
                            </Button>
                        </Nav>
                    </>
                }
            </Container>
        </Navbar >
    );
};

export default observer(NavBar)
