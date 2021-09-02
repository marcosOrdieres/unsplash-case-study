import React from 'react';
import { render } from '@testing-library/react';
import MainImageContainer from '../../Components/MainImageContainer';

describe('MainImageContainer', () => {
    it('MainImageContainer should be clicked', () => {
        const backgroundColor = 'red';
        const { container } = render(
            <MainImageContainer backgroundColor={backgroundColor} />
        );
        expect(container).toBeInTheDocument();
    });
});
