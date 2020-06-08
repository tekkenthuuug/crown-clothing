import styled from 'styled-components';
import { device } from '../../device';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
