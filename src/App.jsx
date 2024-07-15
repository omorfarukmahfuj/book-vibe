import { Toaster } from 'sonner'
import './App.css'
import HeroSection from './components/HeroSection';
import BooksContainer from './components/BooksContainer';

function App() {

  return (
    <>
      < Toaster richColors />
      <HeroSection></HeroSection>
      <BooksContainer></BooksContainer>
    </>
  )
}

export default App
