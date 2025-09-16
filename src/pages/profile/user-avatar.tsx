import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

type UserAvatarProps = {
  photoURL?: string;
};

function UserAvatar({ photoURL }: UserAvatarProps) {
  if (photoURL) {
    return <Avatar alt="avatar" src={photoURL} />;
  }

  return <PersonIcon fontSize="large" color="primary" />;
}

export default UserAvatar;
