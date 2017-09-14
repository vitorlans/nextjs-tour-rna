import React, { Component } from 'react';
import { Container, Content, Text, Header, Body, Title } from 'native-base'

class TourDetail extends Component {
    render() {
        console.log("");

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Details</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>{this.props.navigation.state.params.id}</Text>
                </Content>
            </Container>
        );
    }
}

export default TourDetail;