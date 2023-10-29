import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </Header>
      <Main>
        <Form>
          <Input />
          <TextArea></TextArea>
          <Submit></Submit>
        </Form>
        <Entries>
          <Tabs>
            <Tab>
              <Badge></Badge>
              <NumberEntries></NumberEntries>
            </Tab>
            <Tab>
              <Badge></Badge>
              <NumberEntries></NumberEntries>
            </Tab>
          </Tabs>
          <EntryList>
            <Entry>
              <Title></Title>
              <Date></Date>
              <Text></Text>
              <FavIconButton></FavIconButton>
            </Entry>
            <Entry></Entry>
            <Entry></Entry>
          </EntryList>
        </Entries>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
