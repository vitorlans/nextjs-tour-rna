import React, { Component } from 'react';
import { FlatList, Imagem, WebView, Dimensions, BackHandler, ToastAndroid} from 'react-native'
import {
  Header, Body, Container, Title
} from 'native-base';

class TourWebList extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.TIMERID = 0
    this.state = {
      backCounter: 0    
    }
  }
  
  componentDidMount() {
     
      BackHandler.addEventListener('hardwareBackPress', () => {       

        if(this.state.backCounter < 1) {
          ToastAndroid.show("Pressione voltar novamente para fechar.", ToastAndroid.SHORT)
          this.TIMERID = setTimeout(() => {
            this.setState({ backCounter: 0 });
          }, 8000)
          
          this.setState({backCounter : this.state.backCounter+1 });
          return true;
        }
        return false;

       });
    
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress")
    clearTimeout(this.TIMERID)
  }

  render() {
    let { height, width } = Dimensions.get("window")   
    
    let jsCode = `
    XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(value) {    
        this.addEventListener("load", function(){
            window.postMessage("loaded")            
        }, false);
        this.realSend(value);
    };

    document.querySelector('#header').remove();
    document.getElementsByClassName("_5i-y")[0].remove();
    Array.from(document.querySelectorAll('._22rc')).forEach(function (el) { el.remove()})
  `;
  

    return (
      <Container>
        <Header>
          <Body>
              <Title>Excursão e Viagens Ribeirão Preto</Title>
          </Body>
        </Header>
        <WebView style={{ height, width }} ref="webview"
          onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest} 
          onNavigationStateChange ={this._onShouldStartLoadWithRequest} 
          onMessage={this._onMessage}
          source={{uri: "https://m.facebook.com/groups/345949912422271/"}} injectedJavaScript={jsCode} />
      </Container>
    );
  }

  _onMessage = (data) => {
    this.refs["webview"].injectJavaScript(`
      Array.from(document.querySelectorAll('._22rc')).forEach(function (el) { el.remove()})    
    `)
  }

  _onShouldStartLoadWithRequest = (navigator) => {
      if(navigator.url === "https://m.facebook.com/groups/345949912422271/"){
        return true        
      }

      this.refs["webview"].stopLoading();

      if(navigator.canGoBack){
        this.refs["webview"].goBack();        
      }
      return false;  
  }
}


export default TourWebList;