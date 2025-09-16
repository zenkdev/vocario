import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import { type ReactNode, useEffect } from 'react';
import { useAppSelector } from '@/lib/hooks';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    monospace: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    monospace?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    monospace: true;
  }
}

const theme = createTheme({
  typography: {
    monospace: {
      fontFamily: 'monospace',
      fontSize: '1.4rem',
      textTransform: 'lowercase',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          monospace: 'div',
        },
      },
    },
  },
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'data',
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MuiThemeProvider theme={theme} storageManager={null} noSsr>
      <CssBaseline enableColorScheme />
      <ThemeSwitcher />
      {children}
    </MuiThemeProvider>
  );
}

function ThemeSwitcher() {
  const { setMode } = useColorScheme();
  const { fontSize, darkTheme } = useAppSelector(state => state.app);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize * 16}px`;
    setMode(darkTheme ? 'dark' : 'light');
  }, [fontSize, darkTheme, setMode]);

  return null;
}
