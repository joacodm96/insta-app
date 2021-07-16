import { Header } from "./shared-components/Header"
import { Stories } from "./shared-components/Stories"
import "./styles/index.css"


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="main-container">
          <Stories />

        </div>
      </main>
    </div>
  );
}

export default App;
