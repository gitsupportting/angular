const systemFontStack = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

module.exports = {
  theme: {
    fontFamily: {
      body: [
        '"Open Sans"',
      ].concat(systemFontStack),
      display: [
        'Montserrat',
      ].concat(systemFontStack),
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ],
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      colors: {
        transparent: 'transparent',
        inherit: 'inherit',
      },
      margin: {
        28: '7rem',
      },
      maxWidth: {
        60: '15rem',
        '1/3': '33.333333%',
      },
      minWidth: {
        18: '4.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        34: '8.5rem',
        39: '9.75rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
      },
      maxHeight: {
        64: '16rem',
      },
      width: {
        6: '1.5rem',
        10: '2.5rem',
        18: '4.5rem',
        39: '9.75rem',
        50: '12.5rem',
      },
      inset: {
        '1/2': '50%',
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
    borderStyle: ['focus'],
    boxShadow: ['focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
    borderRadius: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'first', 'last'],
    display: ['responsive', 'hover', 'group-hover'],
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
  },
  plugins: [
    require('./theme.config'),
    require('@tailwindcss/custom-forms'),
  ],
};
