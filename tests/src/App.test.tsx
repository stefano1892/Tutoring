import { render } from '@testing-library/react';
import { getDegrees } from './api';
import userEvent from '@testing-library/user-event';
import App from './App';

vi.mock('./api')

describe('App', () => {
    const getDegreesMock = vi.mocked(getDegrees)
    
    /*
        test('at the beginning, counter value is 0', () => {
            const { getByText } = render(<App />)
    
            expect(getByText('Contatore: 0')).toBeDefined()
        })
    
        test('after clicking on button, counter value is 1', async () => {
            const { getByText, getByRole } = render(<App />)
    
            const incrementButton = getByRole('button', { name: 'Incrementa' })
            await userEvent.click(incrementButton)
    
            expect(getByText('Contatore: 1')).toBeDefined()
        })
    */

    test('after clicking the button n times, counter value is n', async () => {
        const clickTimes = 5
        const { getByText, getByRole } = render(<App />)

        const incrementButton = getByRole('button', { name: 'Incrementa' })
        for (let i = 0; i < clickTimes; i++) {
            await userEvent.click(incrementButton)
        }

        expect(getByText(`Contatore: ${clickTimes}`)).toBeDefined()
    })

    test('match snapshot - initial state', () => {
        const { asFragment } = render(<App />)
        expect(asFragment()).toMatchSnapshot()
    })

    test('match snapshot - clicking on button 1 time', async () => {
        const { asFragment, getByRole } = render(<App />)

        const incrementButton = getByRole('button', { name: 'Incrementa' })
        await userEvent.click(incrementButton)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('get degree api works correctly', () => {
        beforeEach(() => {
            getDegreesMock.mockResolvedValue(21)
        })

        test('match snapshot - expect degree to be invokes correctly', async () => {
            const { asFragment, getByRole } = render(<App />)
            const temperatureButton = getByRole('button', {name: 'Trova temperatura'})

            await userEvent.click(temperatureButton)
            expect(getDegreesMock).toHaveBeenCalledWith('Milano')
            expect(asFragment()).toMatchSnapshot()
        })

        test('match snapshot - expect degree to be the same if button clicked twice', async () => {
            const { asFragment, getByRole } = render(<App />)
            const temperatureButton = getByRole('button', {name: 'Trova temperatura'})

            await userEvent.click(temperatureButton)
            await userEvent.click(temperatureButton)
            expect(getDegreesMock).toHaveBeenCalledWith('Milano')
            expect(asFragment()).toMatchSnapshot()
        })
    })

    test('match snapshot - expect degree to be -1 when error happens', async () => {
        getDegreesMock.mockRejectedValue(new Error('FOOOOOO'))

        const { asFragment, getByRole } = render(<App />)
        const temperatureButton = getByRole('button', {name: 'Trova temperatura'})

        await userEvent.click(temperatureButton)
        expect(getDegreesMock).toHaveBeenCalledWith('Milano')
        expect(asFragment()).toMatchSnapshot()
    })
})