import ErrorMessage from '../components/error-message';
import Spinner from '../components/spinner';

const setContent = (process, Component, data, ComponentLoading = Spinner) => {
   switch (process) {
      case 'waiting':
         return <Spinner />;
      case 'loading':
         return <ComponentLoading />;
      case 'confirmed':
         return <Component data={data} />;
      case 'error':
         return <ErrorMessage />;
      default:
         throw new Error('Unexpected process state');
   }
}

export default setContent;