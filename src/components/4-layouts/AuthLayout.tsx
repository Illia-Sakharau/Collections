import { Outlet } from 'react-router-dom';
import SectionWrapper from '../1-atoms/SectionWrapper';

const AuthLayout = () => {
  return (
    <SectionWrapper>
      <div>IMAGE</div>
      <Outlet />
    </SectionWrapper>
  );
};

export default AuthLayout;
