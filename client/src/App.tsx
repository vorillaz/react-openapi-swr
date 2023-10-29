import { Routes, Route } from 'react-router-dom';
import Listing from './components/listing';
import AddPizza from './components/add';

export default function App() {
  //

  return (
    <Routes>
      <Route path="/" element={<Listing />}></Route>
      <Route path="/add" element={<AddPizza />}></Route>
    </Routes>
  );
}
