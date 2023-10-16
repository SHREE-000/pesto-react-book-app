import './App.css';
import BookList from './components/book/BookList';
import { ThemeProvider } from './components/contextAPI/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <BookList />
    </ThemeProvider>
  );
}

export default App;
