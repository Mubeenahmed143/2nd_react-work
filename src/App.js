import logo from './logo.svg';
import UncontrolledExample from './header';
import ProductComponent from './pro_detail';
import DummyJsonComponent from './product'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
  <UncontrolledExample></UncontrolledExample>
  <ProductComponent></ProductComponent>
  <DummyJsonComponent></DummyJsonComponent>
    </div>
  );
}

export default App;

