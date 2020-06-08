import styled from 'styled-components';
import { device } from '../../device';

import CustomButton from '../custom-button/custom-button.component';

export const StyledImg = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const StyledCustomButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 255px;
  display: none;
  opacity: 0.7;

  @media ${device.mobile} {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${StyledCustomButton} {
      display: flex;
      opacity: 0.85;
    }

    ${StyledImg} {
      opacity: 0.8;
    }
  }

  @media ${device.mobile} {
    width: 40vw;

    &:hover {
      ${StyledCustomButton} {
        opacity: unset;
      }

      ${StyledImg} {
        opacity: unset;
      }
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 4px;
`;

export const Name = styled.span`
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Price = styled.span``;
