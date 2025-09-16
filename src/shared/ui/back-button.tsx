import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(-1)}>
      <ArrowBackIcon />
    </IconButton>
  );
}
