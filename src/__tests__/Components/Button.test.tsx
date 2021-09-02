import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../Components/Button';

describe('Button', () => {
    it('Button should be clicked', () => {
        const onClick = jest.fn();
        const background = 'red';
        const { container } = render(
            <Button onClick={onClick} background={background} />
        );
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
