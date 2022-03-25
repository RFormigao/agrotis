
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { GlobalStyle } from '../src/styles/global'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <GlobalStyle/>
    </div>
  );
}


