import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  BackgroundImage,
  Content,
  MenuItemContainer,
  SubTitle,
  Title,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title}</Title>
      <SubTitle>Shop now</SubTitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);

/* 
import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>Shop now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

*/
