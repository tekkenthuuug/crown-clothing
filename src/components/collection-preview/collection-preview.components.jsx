import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.components';

import {
  CollectionPreviewContainer,
  Preview,
  TitleLink,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, match }) => (
  <CollectionPreviewContainer>
    <TitleLink to={`${match.path}/${routeName}`}>{title}</TitleLink>
    <Preview>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
