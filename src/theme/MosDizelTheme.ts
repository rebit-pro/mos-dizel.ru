import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

/**
 * Тема Vuetify по дизайн-системе v3 «цвет нефти» (docs/design/tokens.css).
 * primary = жёлтый CTA, secondary = бренд-зелёный (ссылки, success) — design-system §12.1.
 * Дополнительные ключи (lightprimary и др.) — совместимость с berry-override scss.
 */
const MosDizelTheme: ThemeTypes = {
  name: 'MosDizelTheme',
  dark: true,
  variables: {
    'border-color': '#2F3336',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#F2D31B',
    secondary: '#3DB273',
    info: '#4C9BE8',
    success: '#3DB273',
    accent: '#F2D31B',
    warning: '#E39B00',
    error: '#F2555A',
    lightprimary: '#2B2811',
    lightsecondary: '#16291D',
    lightsuccess: '#16291D',
    lighterror: '#3A1A1C',
    lightwarning: '#2E2410',
    darkText: '#F1EFEA',
    lightText: '#A9AEB1',
    darkprimary: '#E3C412',
    darksecondary: '#2E9C61',
    borderLight: '#2F3336',
    inputBorder: '#4B5155',
    containerBg: '#121314',
    background: '#121314',
    surface: '#1A1C1E',
    'on-primary': '#121314',
    'on-secondary': '#121314',
    'on-surface': '#F1EFEA',
    'on-background': '#F1EFEA',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#1A1C1E',
    primary200: '#F7DD3F',
    secondary200: '#5CC58B'
  }
};

export { MosDizelTheme };
