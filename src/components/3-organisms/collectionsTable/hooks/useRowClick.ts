import { useNavigate } from 'react-router-dom';

const useRowClick = () => {
  const navigate = useNavigate();
  return (id: string) => navigate(`/collection/${id}`);
};

export default useRowClick;
