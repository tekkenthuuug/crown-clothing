import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionFooter,
  CollectionItemContainer,
  Name,
  Price,
  StyledImg,
  StyledCustomButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <StyledImg style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <StyledCustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </StyledCustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
