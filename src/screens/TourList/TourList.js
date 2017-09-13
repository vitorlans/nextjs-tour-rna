import React, { Component } from 'react';
import { Container, Header, 
  Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon, Text, Badge,
   List, ListItem, Switch } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class TourList extends Component {

  render() {
    return (
      <Container>
        <Header backgroundColor="purple">
          <Left />
          <Body>
            <Title>{this.props.tour.name}</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        </Content>

      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { tour: state.tour };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({/*action*/ }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(TourList);