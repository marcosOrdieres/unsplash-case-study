import React from 'react';
import { render } from '@testing-library/react';
import ImageCarousel from '../../Components/ImageCarousel';

describe('ImageCarousel', () => {
    it('should render ImageCarousel', () => {
        const { container } = render(<ImageCarousel />);
        expect(container).toBeInTheDocument();
    });
});
