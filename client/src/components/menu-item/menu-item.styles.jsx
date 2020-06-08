import styled from 'styled-components';
import { device } from '../../device';

export const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Content = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(35, 35, 35);
  background-color: white;
  opacity: 0.7;
`;

const getContainerHeight = (props) => {
  switch (props.size) {
    case 'large':
      return '380px';
    default:
      return '240px';
  }
};

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${getContainerHeight};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(35, 35, 35);
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

  @media ${device.mobile} {
    height: 200px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
