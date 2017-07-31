import React from 'react';

import { storiesOf } from '@storybook/react';

import ContentLoader from '../src/index';
import {Rect, Circle} from '../src/index';

let defaultStyle = {
	width: 400,
	marginLeft: 'auto',
	marginRight: 'auto'
}

const Container = (props) => (<div style={defaultStyle}>{props.children}</div>)

const MyLoader = () => {
  return(
   <ContentLoader style={{"padding":"30"}} height={210} speed={2} primaryColor={'#f0f0f0'} secondaryColor={'#e0e0e0'}>
       <Circle x={20} y={30} radius={20} />
       <Rect x={70} y={20} height={5} radius={5} width={100} />
       <Rect x={5} y={80} height={10} radius={5} width={350} />
       <Rect x={5} y={100} height={200} radius={5} width={350} />
   </ContentLoader>
  ) 
}


storiesOf('ContentLoader', module)
	.add('facebook style', () => <Container><ContentLoader /></Container>)
	.add('instagram style', () => <Container><ContentLoader type='instagram' /></Container>)
	.add('code style', () => <Container><ContentLoader type='code' /></Container>)
	.add('list style', () => <Container><ContentLoader type='list' /></Container>)
	.add('custom style', () => <Container><MyLoader /></Container>)
