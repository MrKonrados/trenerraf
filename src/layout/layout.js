import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import CssBaseline from '@material-ui/core/CssBaseline';
// import 'animate.css'

const Layout = ({ location, children }) => {
    return (
        <React.Fragment>
            {/* <GlobalStyle/> */}
            <Helmet
                title="Rafał Kiszło - Trener personalny Mokotów i Wilanów"
                meta={[
                    {
                        name: 'description',
                        content:
                            'Zapraszam na wspólne treningi na Mokotowie - Trener personalny Rafał Kiszło. Trening osobisty w Warszawie dostosowany do Twoich potrzeb. Stań się lepszą wersją siebie!',
                    },
                    { name: 'keywords', content: 'Rafał Kiszło, strona www' },
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1',
                    },
                ]}
            >
                <script type="application/ld+json">
                    {`
          {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://trenerrafal.pl/",
    "url": "https://trenerrafal.pl/",
    "name": "Rafał Kiszło - trener personalny Warszawa Mokotów",
    "image": "https://trenerrafal.pl/static/logo-e924d436df4a9eb6d5cd6c59043a7895.svg",
    "telephone": [
        "+48 608 472 294"
    ],
    "email": [
        "anubias19@op.pl"
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Józefa Piusa Dziekońskiego 1",
        "addressLocality": "Warszawa Mokotów",
        "postalCode": "00-728",
        "addressCountry": "PL"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.19525",
        "longitude": "21.04707"
    },
    "openingHours": [
        "Mo,Tu,We,Th,Fr 5:00-23:00",
		"Sat 5:00-18:00",
		"Sun 5:00-18:00"
    ],
    "priceRange": "PLN"
}
            `}
                </script>
                <html lang="pl" ł />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap"
                    // href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                {location && location.pathname != '/404'}
            </ThemeProvider>
        </React.Fragment>
    );
};
Layout.propTypes = {
    children: PropTypes.node,
    location: PropTypes.node,
};

export default Layout;
