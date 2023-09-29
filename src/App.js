import Header from "components/Header"
import NumberGrid from "components/NumberGrid"

function App() {
  return (
    <div className="container-fluid">
      <div className="row vh-100 bg-primary-subtle align-items-center">
        <div className="col-md-12">
          <Header />
          <NumberGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
