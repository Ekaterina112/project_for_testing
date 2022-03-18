import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";


describe('app test', () => {
    test('renders learn react link', () => {
        render(<App/>);
        const helloWorldEle = screen.getByText(/hello world/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(helloWorldEle).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input).toMatchSnapshot();
        //screen.debug()
    });


    test('renders', async () => {
        render(<App/>);
        const data = await screen.findByText(/data/i)
        expect(data).toBeInTheDocument()
        //expect(data).toHaveStyle({color: 'red'})
    });

    test('click events', () => {
        render(<App/>);
        const btn = screen.getByTestId('toggle-btn')
        expect(btn).toBeInTheDocument()
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    });

    test('input events', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        //Fake event
        //userEvent like real user event (keydown, keyup, etc)
       /* fireEvent.input(input, {target: {
            value: '123123'
            }})*/
        userEvent.type(input, '123123')
        expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
    });

})

