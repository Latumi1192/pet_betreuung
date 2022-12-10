import * as React from 'react';
import Box from '@mui/material/Box';
import { UserRepositoryImpl } from '../../data/UserRepositoryImpl';
import Typography from '@mui/material/Typography';
import { UserData } from '../../domain/dto/UserData';

export default function ProfilePage() {
  const userRepo = new UserRepositoryImpl();
  const [userData, setUserData] = React.useState<UserData>();
  const signin = true;

  React.useEffect(() => {
    const foundUserData = userRepo.getUserFromID(734477);
    setUserData(foundUserData);
  }, []);

  return (
    <Box
      sx={{
        width: '500px',
        border: 3,
        borderColor: 'primary.main',
        borderRadius: '16px',
        '& .MuiTypography-root': { mt: 1, ml: 1 },
      }}
    >
      <Typography variant="h5">First name: {userData?.firstname}</Typography>
      <Typography variant="h5">Last name: {userData?.lastname}</Typography>
      <Typography variant="h5">Address: {userData?.addresse}, </Typography>
      <Typography variant="h5">
        {userData?.zipcode} {userData?.city},
      </Typography>
      <Typography variant="h5">{userData?.country}</Typography>
      <Typography variant="h5">Telephone: {userData?.telephone}</Typography>
      <Typography variant="h5">Gender: {userData?.gender}</Typography>
      <Typography variant="h5">Email: {userData?.email}</Typography>
    </Box>
  );
}
