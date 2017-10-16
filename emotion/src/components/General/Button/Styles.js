import styled from 'react-emotion';
import { css } from 'emotion';
import media from '../../../foundation/mediaQueries';

const buttonBase = (props) => {
  return css`
     display: block;
     width: 100%;
     padding: ${props.theme.spaces.base} ${props.theme.spaces.wide};
     transition: background 0.2s;
     font-family: ${props.theme.fonts.telus};
     text-align: center;
     cursor: pointer;
     font-size: 1rem;
     letter-spacing: -0.8px;
     line-height: 1.5;
     font-weight: ${props.theme.fontWeights.medium};
     border-width: 0;
     border-radius: 4px;
     
     :hover {
       box-shadow: 0 0 0 1px;
     }
     
     ${media.greaterThan('sm', css`
       width: auto;
       display: inline-block;
       + button {
         margin-left: 16px;
       }
  `)}
`};

export const PrimaryButton = styled('button')`
  ${props => buttonBase(props)};
  background-color: ${props => (props.theme.colors.primary)};
  color: ${props => (props.theme.colors.white)};
  :hover {
    background-color: ${props => (props.theme.colors.white)};
    color: ${props => (props.theme.colors.primary)};
  }
`;

export const SecondaryButton = styled('button')` 
  ${ props => buttonBase(props)};
  background-color: ${props => (props.theme.colors.secondary)};
  color: ${props => (props.theme.colors.white)};
  :hover {
    background-color: ${props => (props.theme.colors.white)};
    color: ${props => (props.theme.colors.secondary)};
  }
`;

export const DisabledButton = styled('button')` 
  ${ props => buttonBase(props)};
  background-color: ${props => (props.theme.colors.athensGrey)};
  color: ${props => (props.theme.colors.disabled)};
  cursor: not-allowed;
  :hover {
    box-shadow: none;
  }
`;

export const DangerButton = styled('button')`
  ${ props => buttonBase(props)};
  background-color: ${props => (props.theme.colors.danger)};
  color: ${props => (props.theme.colors.white)};
  :hover {
    background-color: ${props => (props.theme.colors.white)};
    color: ${props => (props.theme.colors.danger)};
  }
`;

export const InvertedButton = styled('button')`
  ${ props => buttonBase(props)};
  background-color: ${props => (props.theme.colors.white)};
  color: ${props => (props.theme.colors.shark)};
  
  :hover {
    box-shadow: 0 0 0 1px;
    background-color: transparent;
    color: ${props => (props.theme.colors.white)};
  }
`;
