import styled from 'styled-components';
import { device } from '../../device';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    width: 100%;
    margin: unset;
  }
`;
