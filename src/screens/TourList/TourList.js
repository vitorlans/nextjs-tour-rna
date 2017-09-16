import React, { Component } from 'react';
import { FlatList, Image} from 'react-native'
import Placeholder from 'rn-placeholder'
import {
  Container, Header,
  Title, Content, Footer, FooterTab, Item, Input,
  Button, Left, Right, Body, Icon, Text, Badge,
  List, ListItem, Switch, Separator
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTours } from '../../actions/tourAction'

class TourList extends Component {

  componentDidMount() {
      this.props.fetchTours();
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Placeholder.ImageContent
      onReady={!this.props.tour.isFetching}
      lineNumber={2}
      animate="shine"
      lastLineWidth="40%"
    >
    <ListItem onPress={() => this.props.navigation.navigate('TourDetail', item)} >
        <Body>
            <Image source={{uri: item.photos[0].url}} style={{height: 200, width: 200, flex: 1}}/>
            <Text>
              {item.title}
            </Text>
        </Body>
     </ListItem>
    </Placeholder.ImageContent>
  );

  render() {
    let { tours } = this.props.tour
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Where?" />
            <Icon name="ios-pin" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <FlatList refreshing={this.props.tour.isFetching} onRefresh={this.props.fetchTours} data={tours} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
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