import BarChartIcon from '@mui/icons-material/BarChart';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router';

export function AppFooter() {
  // const routeMatch = useRouteMatch(['/home', '/stats', '/profile']);
  // const currentTab = routeMatch?.path || false;

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/home" />
        <BottomNavigationAction label="Statistics" icon={<BarChartIcon />} component={Link} to="/stats" />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} component={Link} to="/profile" />
      </BottomNavigation>
    </Paper>
  );
}
