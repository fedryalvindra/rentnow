import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link className="flex items-center gap-2 font-semibold" to={-1}>
      <HiArrowLeft /> Back
    </Link>
  );
}

export default BackButton;
