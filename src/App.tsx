import { ThemeProvider } from 'context/ThemeContext';
import { Main } from 'pages/Main';

export function App() {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
}
