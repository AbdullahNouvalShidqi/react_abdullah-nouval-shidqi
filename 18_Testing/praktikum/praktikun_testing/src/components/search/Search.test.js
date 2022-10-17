import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import axios from 'axios';
import Search from './Search';

jest.mock('axios');

describe('Search', () => {
    test('fetches storied from API and displays them', async () => {
        const stories = [
            {objectID: 1, title: 'Hello Wordl'},
            {objectID: 2, title: 'Hi Wordl'},
        ]

        axios.get.mockImplementationOnce(() => {
            Promise.resolve({data: {hits: stories}});
        })

        render(<Search/>);

        await userEvent.click(screen.getByRole('button'));
    })
})