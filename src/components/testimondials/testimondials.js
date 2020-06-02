import React from 'react';
import { dataTestimondials } from './dataTestimondials';
import { dataTestimondials2 } from './dataTestimondials2';
import {
    withStyles,
    Container,
    Typography,
    Grid,
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
    Divider,
    CircularProgress,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        paddingTop: 200,
        paddingBottom: 100,
    },
    testimondialWrapper: {
        padding: 10,
    },
    small: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    avatarAndName: {
        '& li': {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
});

const allData = dataTestimondials.map((testimondial) => (
    <Box>
        <Box align="center" width="100%" m={2} mt={4}>
            <ChatBubbleOutlineIcon />
        </Box>
        <Box pl={8} pr={8}>
            <Typography key={testimondial.text}>{testimondial.text}</Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar
                            key={testimondial.name}
                            alt={testimondial.name}
                            src={require(`${testimondial.picture}`)}
                            // className={classes.small}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        key={testimondial.name}
                        primary={testimondial.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    key={testimondial.date}
                                    component="span"
                                    variant="body2"
                                    color="primary"
                                >
                                    {testimondial.date}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </Box>
        <Divider />
    </Box>
));
const perPage = 4;
const types = {
    start: 'START',
    loaded: 'LOADED',
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.start:
            return { ...state, loading: true };
        case types.loaded:
            return {
                ...state,
                loading: false,
                data: [...state.data, ...action.newData],
                more: action.newData.length === perPage,
                after: state.after + action.newData.length,
            };
        default:
            throw new Error("Don't understand action");
    }
};

function App2(classes) {
    const [state, dispatch] = React.useReducer(reducer, {
        loading: false,
        more: true,
        data: [],
        after: 0,
    });
    const { loading, data, after, more } = state;

    return (
        <div>
            {data.map((testimondial) => (
                <Box className={classes.testimondialWrapper}>
                    <Box align="center" width="100%" m={2} mt={4}>
                        <ChatBubbleOutlineIcon />
                    </Box>
                    <Box pl={8} pr={8}>
                        <Typography key={testimondial.text}>
                            {testimondial.text}
                        </Typography>
                        <List className={classes.avatarAndName}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        key={testimondial.name}
                                        alt={testimondial.name}
                                        src={require(`${testimondial.picture}`)}
                                        className={classes.small}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    key={testimondial.name}
                                    primary={testimondial.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                key={testimondial.date}
                                                component="span"
                                                variant="body2"
                                                color="primary"
                                            >
                                                {testimondial.date}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                    <Divider />
                </Box>
            ))}

            {loading && (
                <Box pt={11} display="flex" alignItems="center" justifyContent="center">
                    <CircularProgress color="secondary" />
                </Box>
            )}
            {!loading && more && (
                <Box pt={11} textAlign="center">
                    <Button
                        onClick={() => {
                            dispatch({ type: types.start });
                            setTimeout(() => {
                                const newData = dataTestimondials.slice(
                                    after,
                                    after + perPage,
                                );
                                dispatch({ type: types.loaded, newData });
                            }, 1500);
                        }}
                        size="large"
                        startIcon={<ExpandMoreIcon />}
                        variant="outlined"
                        color="primary"
                    >
                        Wyświetl więcej
                    </Button>
                </Box>
            )}
        </div>
    );
}
const Opinion = (classes) => {
    return dataTestimondials2.map((testimondial2, index) => (
        <Box className={classes.testimondialWrapper}>
            <Box align="center" width="100%" m={2} mt={4}>
                <ChatBubbleOutlineIcon />
            </Box>
            <Box pl={8} pr={8}>
                <Typography key={testimondial2.text}>
                    {testimondial2.text}
                </Typography>
                <List className={classes.avatarAndName}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                key={testimondial2.name}
                                alt={testimondial2.name}
                                src={require(`${testimondial2.picture}`)}
                                className={classes.small}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            key={testimondial2.name}
                            primary={testimondial2.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        key={testimondial2.date}
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                    >
                                        {testimondial2.date}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
            <Divider />
        </Box>
    ));
};
function Testimondials({ classes, id }) {
    return (
        <React.Fragment>
            <section id={id} name="testimondials" className={classes.root}>
                <Container maxWidth="md">
                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box pb={10}>
                            <Typography variant="h3" align="center">
                                Opinie Klientów
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Opinion />
                            <App2 />

                            {/* <Opinion /> */}
                        </Box>
                        {/* <Box pt={11} textAlign="center">
                            <Button
                                size="large"
                                startIcon={<ExpandMoreIcon />}
                                variant="outlined"
                                color="primary"
                            >
                                Wyświetl więcej
                            </Button>
                        </Box> */}
                    </Box>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default withStyles(useStyles)(Testimondials);
