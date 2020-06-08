import styled from 'styled-components';
import { device } from '../../device';

import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media ${device.mobile} {
    align-items: center;
  }
`;

export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
