import Box from "./Box";
import './row.css';

const Row = ({ guess }) => {
 return (
  <>
    <div className='row top-row'>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
    </div>
    <div className='row'>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
    </div>
    <div className='row'>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
    </div>
    <div className='row'>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
    </div>
    <div className='row'>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
    </div>
    <div className='row'>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
      <Box letter='M'/>
    </div>
  </>

 );
};

export default Row;