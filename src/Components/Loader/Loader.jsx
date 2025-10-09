import Spinner from 'react-bootstrap/Spinner';
import "../Loader/Loader.css"

function Loader() {
  return (
    <>
    <div className='loader'>
      <Spinner  animation="grow" variant="dark" />
      </div>
    </>
  );
}

export default Loader;