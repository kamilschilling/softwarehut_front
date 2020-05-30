import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme } from '@material-ui/core/styles';


const configura = makeStyles((theme: Theme) => ({
    menuButton: {
        marginRight: theme.spacing(8),
    },
    root: {
        flexGrow: 6,
    },
    title: {
        flexGrow: 6,
        color: "purple",
    }
}));

interface IMenuBarProps {
    onIconClick: () => void;
}

const MenuBar: React.FC<IMenuBarProps> = ({ onIconClick }) => {
    const classes = configura();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={() => onIconClick()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        className={classes.title}
                    >
                        Movie Searcher
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default MenuBar;