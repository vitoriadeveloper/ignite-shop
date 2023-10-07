import { styled } from "@/src/styles";


export const ButtonCartContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    padding: '0.75rem',
    backgroundColor: '$gray800',
    color: '$gray500',

    position: 'relative',

    '&:(disabled)':{
        opacity: 0.6,
        cursor: 'not-allowed',
    },
    span: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      width: 24,
      height: 24,
      borderRadius: '100%',
      backgroundColor: '$green500',
      color: '$white',
      fontSize: '0.875rem',
      fontWeight: 'bold',


    },
    variants: {
        color: {
          gray: {
            background: "$gray800",
            color: "$gray500",
          },
          green: {
            background: "$green500",
            color: "$white",
    
            "&:not(:disabled):hover": {
              backgroundColor: "$green300",
            },
          },
        },
        size: {
          medium: {
            width: "3rem",
            height: "3rem",
    
            svg: {
              fontSize: 24,
            },
          },
          large: {
            width: "3.5rem",
            height: "3.5rem",
    
            svg: {
              fontSize: 32,
            },
          },
        },
      },
    
      defaultVariants: {
        color: "gray",
        size: "medium",
      },

})