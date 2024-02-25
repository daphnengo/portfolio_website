import React, { useState } from 'react';
import {
    AppBar,
    Button,
    CardMedia,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.jpeg';
import contact from '../../assets/contact.png';
import './navbar.css';

const Navbar2 = () => {
    const NavbarSectionStyles = styled('section')(() => ({
        height: '120px',
        width: '100vw',
        maxWidth: '75rem',
        margin: '0 auto',
        padding: '0 32px',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 3,
        overflow: 'hidden',
    }));
    const AppBarStyles = styled(AppBar)(() => ({
        background: 'rgb(30, 30, 30)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }));

    const NavbarItemButton = styled(Button)(({ theme }) => ({
        textTransform: 'none',
        margin: '16px',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            paddingBottom: '4px',
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
        }
    }));

    const ContactButtonStyles = styled(Button)(() => ({
        background: 'white',
        color: 'black',
        border: 'none',
        textTransform: 'none',
        display :'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px 0 16px',
        borderRadius: '32px',
        cursor: 'pointer',
        height: '45px',
        marginTop: '50px',

        '&:hover': {
            backgroundColor: 'white',
        }
    }));

    const IconButtonStyles = styled(IconButton)(() => ({
        '& svg': {
            height: 70,
            width: 70,
        },

        '&:hover': {
            background: 'transparent',
        },
    }));

    const MenuItemStyles = styled(MenuItem)(({ theme }) => ({
        '&:hover': {
            backgroundColor: 'rgb(30, 30, 30)',
            color: theme.palette.secondary.main,
            paddingBottom: '4px',
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
        },
    }));

    const NavbarOptions = [
        {
            id: 'intro',
            text: 'Home',
        },
        {
            id: 'aboutMe',
            text: 'About Me',
        },
        {
            id: 'portfolio',
            text: 'Portfolio',
        },
        {
            id: 'skills',
            text: 'Skills',
        },
        {
            id: 'contact',
            text: 'Contact Me',
        },
    ];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const _constructNavbar = () => (
        NavbarOptions.map((option, index) => {
            if (option.id === 'contact') {
                return null;
            }

            return (
                <NavbarItemButton
                    id={index}
                    onClick={() => {
                        document.getElementById(option.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <Typography variant="h6">{option.text}</Typography>
                </NavbarItemButton>
            );
        })
    );

    const _constructMenuItemList = () => (
        NavbarOptions.map((option, index) => {
            return (
                <MenuItemStyles
                    id={index}
                    onClick={() => {
                        document.getElementById(option.id)?.scrollIntoView({ behavior: 'smooth' });
                        handleClose();
                    }}
                >
                    <Typography variant="h6">{option.text}</Typography>
                </MenuItemStyles>
            );
        })
    );

    return (
        <NavbarSectionStyles className="navbarSection">
            <AppBarStyles position="static">
                <CardMedia
                    sx={{
                        height: 150,
                        width: 150,
                        objectFit: 'cover',
                    }}
                    src='img'
                    image={logo}
                    title="logo"
                />
                <Toolbar variant="dense" disableGutters className="toolbar">
                    {_constructNavbar()}
                </Toolbar>
                <ContactButtonStyles
                    onClick={() => {
                        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="contactButton"
                >
                    <CardMedia
                        sx={{
                            height: 20,
                            width: 20,
                            objectFit: 'cover',
                            margin: '16px',
                        }}
                        src='img'
                        image={contact}
                        title="contact"
                    />
                    <Typography variant="subtitle1">Contact Me</Typography>
                </ContactButtonStyles>

                <IconButtonStyles
                    id="basic-button"
                    className="menuIconBtn"
                    color="primary"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButtonStyles>
                <Menu
                    id="basic-menu"
                    autoFocus
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {_constructMenuItemList()}
                </Menu>
            </AppBarStyles>
        </NavbarSectionStyles>
    )
};

export default Navbar2;
