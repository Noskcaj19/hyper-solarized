const colors = {
  lightBlack: '#002833',
  black: '#003541',
  lightGreen: '#586e75',
  lightYellow: '#657b83',
  lightBlue: '#839496',
  lightCyan: '#93a1a1',
  white: '#eee8d5',
  lightWhite: '#fdf6e3',
  yellow: '#b58901',
  lightRed: '#cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  lightMagenta: '#6c6ec6',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859901'
};

exports.decorateConfig = config => {
  const light = config.solarized ? config.solarized.light : false;

  const backgroundColor = light ? '#fdf6e3' : '#002833';
  const foregroundColor = light ? '#657b83' : '#839496';
  const cursorColor     = light ? '#657b83' : '#839496';
  const splitplaneColor = light ? '#e6dfcb' : '#001f27';
  const tabsColor       = light ? '#e6dfcb' : '#001f27';
  const borderColor     = 'transparent';

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .tabs_list {
      	border: 0;
      }
      .tabs_nav {
      	background-color: ${tabsColor};
      }
      .tab_tab {
        color: ${foregroundColor};
        background-color: ${tabsColor};
				border-color: ${borderColor};
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: #b3b3b3;
        background-color: ${backgroundColor};
      }
      .splitpane_divider {
      	background-color: ${splitplaneColor};
      }
    `
  })
};
