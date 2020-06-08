import styled from 'styled-components';
import { device } from '../../device';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    button {
      width: 40%;
    }
  }
`;
