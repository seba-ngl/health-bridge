import { render, screen } from '@testing-library/react';

import { LanguageSelect } from './LanguageSelect';

describe('LanguageSelect', () => {
    it('should render the default select option', () => {
        render(<LanguageSelect />);
        const defaultLanguageLabel = screen.getByText('English');
        expect(defaultLanguageLabel).toBeInTheDocument();
    });
});
