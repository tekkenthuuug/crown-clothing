import styled from 'styled-components';
import { device } from '../../device';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
