import React, { useEffect, useState } from "react";
import Comics from "../data/comics";
import GraphicNovels from "../data/graphicnovels";
import FunkoPops from "../data/funkopops";

function Home() {
  const [comicData, setComicData] = useState([]);
  const [graphicNovelData, setGraphicNovelData] = useState([]);
  const [funkoPopsData, setFunkoPopData] = useState([]);

  const url = "https://afro-comics-server.onrender.com/";

  useEffect(() => {
    setComicData(comicData);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setComicData(result.data);
        console.log(result.data);
      })
      .catch(console.log("error"));
  }, []);

  useEffect(() => {
    setGraphicNovelData(graphicNovelData);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setGraphicNovelData(result.data);
        console.log(result.data);
      })
      .catch(console.log("error"));
  }, []);

  useEffect(() => {
    setFunkoPopData(funkoPopsData);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setFunkoPopData(result.data);
        console.log(result.data);
      })
      .catch(console.log("error"));
  }, []);

  return (
    <main>
      <h2>Tha Cr8</h2>
      <p>
        [Tha Cr8] is a collection of comics books, graphic novels, actions
        figures, Funko pops, toys, and auction site for rare valuable items
        created by black comic book creators. Products sold by the site can be
        found on the product page and the auctions can be found on the auctions
        page. History about the comic book creators can be found on the POC
        Creators page while there is a blog post were we will share blog
        articles speaking on current events and opinion pieces on black
        superheroes.
      </p>
      <div className="comic-cover">
        <h2>Comic Book Collection</h2>
        {Comics.map((Comics) => (
          <div key={Comics._id} className="comic-data">
            <ul>
              <li>{Comics.title}</li>
              <li>{Comics.imageUrl}</li>
              <li>{Comics.author}</li>
              <li>{Comics.artist}</li>
              <li>{Comics.publisher}</li>
              <li>{Comics.genre}</li>
              <li>{Comics.published}</li>
              <li>{Comics.about}</li>
            </ul>
          </div>
        ))};
      </div>
      <div className="comic-cover">
      <h2>Graphic Novel Collection</h2>
      {GraphicNovels.map((GraphicNovels) => (
        <div key={GraphicNovels._id} className="comic-data">
          <ul>
            <li>{GraphicNovels.title}</li>
            <li>{GraphicNovels.imageUrl}</li>
            <li>{GraphicNovels.author}</li>
            <li>{GraphicNovels.artist}</li>
            <li>{GraphicNovels.publisher}</li>
            <li>{GraphicNovels.genre}</li>
            <li>{GraphicNovels.published}</li>
            <li>{GraphicNovels.about}</li>
          </ul>
        </div>
      ))};
      </div>
      <div className="comic-cover">
              <h2>Funko Pops</h2>
      {FunkoPops.map((FunkoPops) => (
        <div key={FunkoPops.itemNumber} className="comic-data">
          <ul>
            <li>{FunkoPops.imageUrl}</li>
            <li>{FunkoPops.name}</li>
            <li>{FunkoPops.itemNumber}</li>
            <li>{FunkoPops.details}</li>
          </ul>
        </div>
      ))};
      </div>
    </main>
  );
}

export default Home;
