import {render, screen} from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import React from "react";
import {renderWithRouter} from "../tests/helpers/renderWithRouters";

jest.mock('axios')

describe('users  test', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [{"id": 1, "name": "Leanne Graham"},
                {"id": 2, "name": "Ervin Howell"},
                {"id": 3, "name": "Clementine Bauch"}]
        }

        axios.get.mockReturnValue(response);
    })

    afterEach(() => {
        jest.clearAllMocks()
    })


    test('renders', async () => {
        render(<Users/>);
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    });

    test('renders user details page', async () => {
        renderWithRouter(null, '/users');
        const users = await screen.findAllByTestId('user-item')
        userEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    });
})

