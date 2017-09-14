import React, { Component } from 'react';
import { Container, Header, 
  Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon, Text, Badge,
   List, ListItem, Switch } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  fetchTours } from '../../actions/tourAction'

class TourList extends Component {

  render() {
    return (
      <Container>
        <Header backgroundColor="purple">
          <Left />
          <Body>
            <Title>TITLE PAGE</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            {JSON.stringify(this.props.tour.tours, null, 2)}
          </Text>
          <Button full onPress={this.props.fetchTours} >
          <Text>
            click
          </Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { tour: state.tour };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    /*action*/ 
    fetchTours
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(TourList);