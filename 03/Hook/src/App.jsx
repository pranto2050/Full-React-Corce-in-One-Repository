
import 'remixicon/fonts/remixicon.css';
import './App.css';
import IncrementDecrement from './Component/IncrementDecrement';
import Advance01 from './Component/Advance01';
import ArrayObject from './Component/ArrayObject/ArrayObject';
// import FromHandaling from './Component/From Handaling/FromHandaling';
// import TwoWayBainding from './Component/From Handaling/TwoWayBainding';
import TwoWayBainding from './Component/From Handaling/notApplycation';
import LocalSeoge from './Component/LocalStorage/LocalSeoge'
import ApiTest from './Component/ApiTest/ApiTest'

function App() {
  return(
<div>
  <IncrementDecrement/>
  <Advance01/>
  <ArrayObject/>
  <TwoWayBainding/>
  <LocalSeoge/>
  <ApiTest />

</div>

)}

export default App
