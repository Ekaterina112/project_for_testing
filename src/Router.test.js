import {render, screen} from "@testing-library/react";
import AppWithRouter from "./AppWithRouter";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";


describe('router test', () => {
    test('renders learn react links', () => {
        render(<MemoryRouter>
            <AppWithRouter/>
        </MemoryRouter>);
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    });

    test('renders error page', () => {
        render(<MemoryRouter initialEntries={['/blabla']}>
            <AppWithRouter/>
        </MemoryRouter>);
        expect(screen.getByTestId('page-not-found')).toBeInTheDocument()
    });
})