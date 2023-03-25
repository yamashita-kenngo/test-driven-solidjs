// Solidjs component with styled by macaron-css
import { styled } from '@macaron-css/solid';

const Card = styled('div',{
  base: {
    borderRadius: 10,
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
    maxWidth: 200,
    border: 0,
    margin: 12,
    cursor: 'pointer',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  variants: {
    color: {
      neutral: { background: 'whitesmoke', color: '#333' },
      brand: { background: 'blueviolet' },
      accent: { background: 'slateblue' },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: 30  },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: 'neutral',
        size: 'large',
      },
      style: {
        background: 'ghostwhite',
      },
    },
  ],

  defaultVariants: {
    color: 'accent',
    size: 'medium',
  },
});

export default Card;