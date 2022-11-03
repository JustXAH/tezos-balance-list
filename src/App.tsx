import React from 'react';
import {styled} from '@mui/system';
import {InputContainer} from "./components/InputContainer";
import {ListContainer} from "./components/ListContainer";

const Layout = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minWidth: '100vw',
    height: '100vh',
    minHeight: '100vh',
    backgroundImage: 'radial-gradient(ellipse farthest-corner at center top, #9ab1c7 0%, #1a242f 100%)',
});

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    minWidth: '350px',
    height: '75%',
    padding: '40px',
    boxSizing: 'border-box',
});

function App() {
  return (
    <Layout>
        <Container>
            <InputContainer />
            <ListContainer />
        </Container>
      {/*  <Counter />*/}
    </Layout>
  );
}

export default App;
