import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import profile from '../../assets/profile.jpg';
import './intro.css';


const Intro = () => {
    const IntroSectionStyles = styled('section')(() => ({
        height: '800px',
        width: '100vw',
        maxWidth: '75rem',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
    }));

    const IntroStyles = styled('div')(({ theme }) => ({
        color: theme.palette.primary.main,
        height: '800px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'default',
    }));

    const IntroContentStyles = styled('div')(() => ({
        display: 'flex',
    }));

    const IntroContentNameStyles = styled(Typography)(({ theme }) => ({
        paddingLeft: '10px',
        color: theme.palette.secondary.main,
    }));

    const IntroTextStyles = styled(Typography)(({ theme }) => ({
        fontWeight: theme.sizings.fontWeight.NORMAL,
        fontSize: theme.sizings.font.xl3,
    }));

    return (
        <IntroSectionStyles className="introSection">
            <IntroStyles className="intro">
                <Typography
                    className="intro__label"
                    variant="subtitle1"
                >
                    Hello,
                </Typography>
                <IntroContentStyles
                    className="intro__content"
                >
                    <Typography
                        className="intro__content-text"
                        variant="h3"
                    >
                        I'm
                    </Typography>
                    <IntroContentNameStyles
                        className="intro__content-name"
                        variant="h3"
                    >
                        Dang Nhi Ngo
                    </IntroContentNameStyles>
                </IntroContentStyles>
                <IntroTextStyles
                    className="intro__text"
                >
                    Software Engineer
                </IntroTextStyles>
                <Typography
                    className="intro__para"
                    variant="subtitle1"
                >
                    I am a skilled software engineer with experience in <br /> front-end web developments
                </Typography>
            </IntroStyles>
            <img src={profile} alt="Profile" className="profile" />
        </IntroSectionStyles>
    );
};

export default Intro;
