import styled from 'styled-components';

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
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Price = styled.span`
  width: 10%;
`;
