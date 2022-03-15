import * as React from 'react';
import {Box, styled} from '@mui/material';


const Sidebar = () => {
  return (
    <SidebarSection>
        <img src="./src/assets/brand-icon.svg" alt="" />
    </SidebarSection>

  )
}

export default Sidebar;

const SidebarSection = styled(Box)({

})
