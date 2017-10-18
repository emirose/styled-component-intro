import glamorous from 'glamorous'
import media from '../../../foundation/mediaQueries';

const DefaultButton = glamorous.button({
     display: 'block',
     width: '100%',
     transition: 'background 0.2s',
     textAlign: 'center',
     cursor: 'pointer',
     fontSize: '1rem',
     letterSpacing: '-0.8px',
     lineHeight: 1.5,
     borderWidth: 0,
     borderRadius: '4px',
     ':hover': {
       boxShadow: '0 0 0 1px',
     },
     [media.greaterThanSmall]: {
       width: 'auto',
       display: 'inline-block',
       '+ button': {
         marginLeft: '16px',
       },
     }
}, ({ theme }) => ({
  padding: `${theme.spaces.base} ${theme.spaces.wide}`,
  fontFamily: theme.fonts.telus,
}))


export const PrimaryButton =  glamorous(DefaultButton)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  ':hover': {
        backgroundColor: theme.colors.white,
        color: theme.colors.primary
      }
}))

export const SecondaryButton = glamorous(DefaultButton)(({ theme }) => ({
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
      ':hover': {
        backgroundColor: theme.colors.white,
        color: theme.colors.secondary
      }
}))

export const DisabledButton = glamorous(DefaultButton)({
  cursor: 'notAllowed',
    ':hover': {
      boxShadow: 'none',
    }
},
({ theme }) => ({
  backgroundColor: theme.colors.athensGrey,
  color: theme.colors.disabled
}))

export const DangerButton = glamorous(DefaultButton)(({ theme }) => ({
    backgroundColor: theme.colors.danger,
    color: theme.colors.white,
      ':hover': {
        backgroundColor: theme.colors.white,
        color: theme.colors.danger
      }
}))

export const InvertedButton = glamorous(DefaultButton)(({ theme }) => ({
    backgroundColor: theme.colors.white,
    color: theme.colors.shark,
      ':hover': {
        boxShadow: '0 0 0 1px',
        backgroundColor: 'transparent',
        color: theme.colors.white
      }
}))
