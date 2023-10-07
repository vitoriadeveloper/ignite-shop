import { styled } from '@/src/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const ShoppingCartContainer = styled(Dialog.Content, {
     display: 'flex',
     alignItems: 'flex-start',
     justifyContent: 'space-between',
     flexDirection: 'column',
     padding: '3rem',
     width: '480px',
     boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
     position: 'fixed',
     top: 0,
     right: 0,
     bottom: 0,

     

     backgroundColor: '$gray800',

     "> section": {
        //  overflowY: "auto",
         display: 'flex',
         alignItems: 'flex-start',
         flexDirection: 'column',
         gap: '1rem',


     },

    h2: {
        fontSize: '$lg',
        color: '$gray100',
        marginBottom: '1.875rem',
        fontWeight: '700',
        lineHeight: '160%',

    },
    button: {
        cursor: 'pointer',
    }

})

export const CardProduct = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})
export const ContainerImage = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',

    
    
    img: {
       objectFit: 'cover',
        
    }
})

export const ImageContent = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height: '94.788px',
    width: '94.788px',
    borderRadius: 8,
})

export const CartDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '8px',

    p: {
        fontSize: '$md',
        color: '$gray300',
        fontWeight: 'normal'
    },

    span: {
        fontSize: '$md', 
        fontWeight: 'bold',
        color: '$gray100',
    },

    button: {
        border: 'none',
        background: 'none',
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '1rem',
    },

})

export const CartInfo = styled('div', {
    width: '100%',
    
   div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '6px',


    p: {
        color:'$gray100',
        fontSize: '1rem',
    },

    span: {
        fontSize: '$md',
        color: '$gray300',
    },
   
   },
   ".last-child": {
    p: {
        fontWeight: 'bold',
        fontSize: '$xl',
        marginBottom: '3.5625rem',
    },
    span: {
        fontWeight: 'bold',
        fontSize: '$xl',
        marginBottom: '3.5625rem',
    }
},

})

export const BtnFinalization = styled('button', {
    width: '100%',
    border: 'none',
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    padding: '1.25rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    cursor: 'pointer',

    "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
  
      "&:not(:disabled):hover": {
        backgroundColor: "$green300",
      },
    })
export const CartClose = styled(Dialog.Close, {
    color: '$gray500',
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    border: 'none',
    background: 'none',
})