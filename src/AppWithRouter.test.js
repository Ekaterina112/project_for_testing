import {render} from '@testing-library/react';
import AppWithRouter from "./AppWithRouter";


describe('app test', () => {
    test('renders learn react link', () => {
        render(<AppWithRouter/>);
    });
})

