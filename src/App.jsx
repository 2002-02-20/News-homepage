import { useState } from "react";
import "./App.css";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20" >
        <Header/>
      <div className="sm:flex sm:gap-8">
  
        <MainArticle />
        <NewContainer />
      </div>
      
      </main>
    </>
  );
}

export default App;
