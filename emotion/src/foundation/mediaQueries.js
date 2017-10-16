import { css } from 'emotion';

const breakPoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

const greaterThan = (size, styles) => (
 css`
  @media (min-width: ${breakPoints[size]}) {
    ${styles};
  }
 `
);


export default {
  greaterThan
}
