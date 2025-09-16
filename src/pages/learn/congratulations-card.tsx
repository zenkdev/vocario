import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router';

interface CongratulationsProps {
  more?: boolean;
}

function Congratulations({ more }: CongratulationsProps) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader title="Congratulations!" />
      <CardContent>
        <Typography variant="body2">
          You have learned all the words in this dictionary.
          {more && <span> Come back tomorrow for more tasks.</span>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate('/home')}>Back to home</Button>
      </CardActions>
    </Card>
  );
}

export default Congratulations;
