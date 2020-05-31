import { StyleSheet, css } from 'aphrodite/no-important';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// version v0.11

export const config = {
  anchorScrollOffset: 100,
  hashName: true,
  debug: false,

  StyleSheet,
  css,
  AnchorLink,

  enableInject: false,
  canInjectWrappedComponent: null,
  injectWrappedComponent: null
};

export const shareStyles = {
  fit: {
    width: '100%',
    height: '100%'
  },

  fitFlex: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },

  fitFlexCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },

  fitFlex2Center: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fitFlexCenterHidden: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  fitFlex2CenterHidden: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  fitFlexColumn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  imageContain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  imageFill: {
    width: '100%',
    height: '100%',
    resizeMode: 'fill'
  },

  imageCover: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  flex2Center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  flexLeftCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  flexRightCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
};

export const commonStyles = StyleSheet.create({
  anchor: {
    cursor: 'pointer',
    textDecoration: 'none',

    ':visited': { textDecoration: 'underline' },

    ':hover': {
      opacity: 0.7,
      textDecoration: 'underline'
    }
  },

  clickable: {
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': { opacity: 0.7 }
  },

  textInput: {
    border: 0,
    padding: 0,
    width: '100%',
    verticalAlign: 'top',
    backgroundColor: 'transparent',
    ':focus': { outline: 'none' }
  }
});
