import React from 'react';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Page>
        <Switch></Switch>
      </Page>
    </ThemeProvider>
  );
}

export default App;
