import BoltIcon from '@mui/icons-material/Bolt';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type TitleProps = {
  text: string;
  isNew?: boolean;
};

function Title({ text, isNew }: TitleProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography component="h1" variant="h3">
        {text}
      </Typography>
      {isNew && <BoltIcon />}
    </Stack>
  );
}

export default Title;
