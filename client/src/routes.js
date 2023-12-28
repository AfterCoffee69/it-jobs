import Main from "./pages/MainPage";
import Auth from "./pages/AuthPage";
import { MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE, PROFIL_ROUTE, VACANCIES_LIST_ROUTER, VACANCY_PAGE_ROUTE, ABOUT_ROUTE } from "./utils/consts";
import AdminPage from "./pages/AdminPage";
import Profile from "./pages/Profile";
import VacansyList from "./pages/VacansyList";
import VacancyPage from "./pages/VacancyPage";
import About from "./pages/AboutPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ABOUT_ROUTE,
        Component: About 
    },
    {
        path: VACANCY_PAGE_ROUTE + '/:id',
        Component: VacancyPage 
    },
    {
        path: VACANCIES_LIST_ROUTER,
        Component: VacansyList 
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PROFIL_ROUTE + '/:id',
        Component: Profile
    },
];