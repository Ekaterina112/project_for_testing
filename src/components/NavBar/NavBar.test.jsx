import {screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "../../tests/helpers/renderWithRouters";
import NavBar from "./NavBar";


describe('navbar test', () => {
    test('renders links', () => {
        renderWithRouter(<NavBar/>);
        const mainLink =  screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    });
    test('renders links', () => {
        renderWithRouter(<NavBar/>);
        const aboutLink =  screen.getByTestId('about-link')
        userEvent.click(aboutLink)
    });
    test('renders links', () => {
        renderWithRouter(<NavBar/>);
        const usersLink =  screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    });
})
