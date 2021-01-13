import React from 'react';
import PageHead from '../components/PageHead.js';
import { Container, Row, Col } from 'react-grid-system';

export default () => (
    <>
        <PageHead pageTitle="Connect With Us" />
        <h2>Connect With Us</h2>
        <hr />

        <Container fluid style={{ padding: 0 }}>
            <Row justify="around" nogutter>
                <Col sm={12} md={4}>
                    <p>We would love to hear from you! You can email us at:
                     <br /><br />
                        <a href="mailto:mcgilleffectivealtruists@gmail.com"
                            style={{ display: 'inline-block', fontSize: '1.2em' }}>
                            mcgilleffectivealtruists@gmail.com
                    </a>
                    </p>
                </Col>

                <Col sm={12} md={4}>
                    <p>You can also like our Facebook page to keep up to date with our activities!</p>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feamcgill&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </Col>
            </Row>
        </Container>
    </>
);