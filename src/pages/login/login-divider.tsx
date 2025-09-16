import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function LoginDivider() {
  return (
    <Divider component="div" sx={{ my: 2, '.MuiDivider-wrapper': { p: 0 } }}>
      <Typography
        component="span"
        sx={{
          border: '2px solid var(--mui-palette-divider)',
          borderRadius: 3,
          px: 1,
        }}
      >
        OR
      </Typography>
    </Divider>
  );
}
