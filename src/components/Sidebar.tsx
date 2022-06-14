import * as React from 'react';
import {Box, Button, styled} from '@mui/material';


const Sidebar = () => {
  return (
    <SidebarSection>
        <Logo src="./src/assets/brand-icon.svg" alt="" />
        <ButtonContainer>
          <Buttons variant="contained">All</Buttons>
          <Buttons variant="contained">Dashboard</Buttons>
          <Buttons variant="contained">Favourites</Buttons>
          <Buttons variant="contained">Downloads</Buttons>
        </ButtonContainer>
        <ButtonContainer>
          <Buttons variant="contained">Share</Buttons>
          <Buttons variant="contained">Settings</Buttons>
          <Buttons variant="contained">Exit</Buttons>
        </ButtonContainer>
    </SidebarSection>

  )
}

export default Sidebar;

const SidebarSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '420px',
  width: '100%',
  height: '100vh',
  backgroundColor: '#09080F',
})

const ButtonContainer = styled(Box)({
  display: 'flex',
  padding: '65px 0',
  flexDirection: 'column',
})


const Logo = styled('img')({
  maxWidth: '160px',
  width: '100%',
  alignSelf: 'flex-end',
  padding: '40px 25px 20px 0',
})

const Buttons = styled(Button)({
  textTransform: 'capitalize',
  fontFamily: 'inter',
  backgroundColor: '#09080F',
  justifyContent: 'flex-start',
  width: '100%',
  paddingLeft: '240px',

  '&:hover': {
    background: '#12111C',    
                 
    }
})