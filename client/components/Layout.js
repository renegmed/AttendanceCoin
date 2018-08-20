import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default class Layout extends Component { 
  render () {
    console.log('........ Layout.render() currentAccount ..........')
    console.log(this.props.currentAccount)
    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />      
        </Head>     
        <Header currentAccount={this.props.currentAccount} />   
    
        {this.props.children}
      </Container>
    );
  }
};
