import ErrorMessage from '../components/error-message/error-message';
import Spinner from '../components/spinner/spinner';

const setContent = (process, Component, data) => {
   switch (process) {
      case 'waiting':
         return <Spinner />;
      case 'loading':
         return <Spinner />;
      case 'confirmed':
         return <Component data={data} />;
      case 'error':
         return <ErrorMessage />;
      default:
         throw new Error('Unexpected process state');
   }
}

export default setContent;