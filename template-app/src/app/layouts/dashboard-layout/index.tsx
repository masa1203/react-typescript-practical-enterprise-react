import React from 'react';
import Grid from '@mui/material/Grid';

import DashBoardSidebarNavigation from './dashboard-sidebar-navigation';

type Props = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <DashBoardSidebarNavigation />
      {children}
    </Grid>
  );
};

export default Dashboard;
