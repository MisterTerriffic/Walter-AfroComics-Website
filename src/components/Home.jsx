import React, { useEffect, useState } from "react";
import Comics from "../data/comics";
import GraphicNovels from "../data/graphicnovels";
import FunkoPops from "../data/funkopops";

function Home() {
  const [comicData, setComicData] = useState([]);
  const [graphicNovelData, setGraphicNovelData] = useState([]);
  const [funkoPopsData, setFunkoPopData] = useState([]);

  const deployedurl = "https://afro-comics-server.onrender.com/";
  const url = "http://localhost:3000";

  const comicbooks = "api/comicsbooks";
  const funkopops = "api/funkopops";
  const graphicnovels = "api/graphicnovels";

  useEffect(() => {
    fetch(`${url/comicbooks}`,{
      method: "Get",
      headers:{
        "content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((result) => {
        setComicData(result.data.comicData);
        console.log(result.data.comicData, "Track comic data");
      })
      .catch(console.log("error"));
  }, []);

  useEffect(() => {
     fetch(`${url/graphicnovels}`,{
      method: "Get",
      headers:{
        "content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((result) => {
        setGraphicNovelData(result.data.graphicNovelData);
        console.log(result.data.graphicNovelData);
      })
      .catch(console.log("error"));
  }, []);

  useEffect(() => {
  fetch(`${url/funkopops}`,{
      method: "Get",
      headers:{
        "content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((result) => {
        setFunkoPopData(result.data.funkoPopsData);
        console.log(result.data).funkoPopsData;
      })
      .catch(console.log("error"));
  }, []);

  return (
    <main>
      <img src="/images/The_Cr8_ComicSans.jpeg" alt="The Cr8 Comic Sans"/>
      <p>
        The Cr8 is a collection of comics books, graphic novels, actions
        figures, Funko pops, toys, and auction site for rare valuable items
        created by black comic book creators. Products sold by the site can be
        found on the product page and the auctions can be found on the auctions
        page. History about the comic book creators can be found on the POC
        Creators page while there is a blog post were we will share blog
        articles speaking on current events and opinion pieces on black
        superheroes.
      </p>
      <h2>Comic Book Collection</h2>
      <div className="comic-cover">
        {Comics.map((Comics) => (
          <div key={Comics._id} className="comic-data">
            <ul>
              <img src={Comics.imageUrl} className="cover-image" alt="Comic Cover" />
              <h3>{Comics.title}</h3>
              <li>Author: {Comics.author}</li>
              <li>Illustrator: {Comics.artist}</li>
              <li>{Comics.publisher}</li>
              <li>{Comics.published}</li>
              <li>{Comics.about}</li>
            </ul>
          </div>
        ))};
      </div>
      <h2>Graphic Novel Collection</h2>
      <div className="comic-cover">
      {GraphicNovels.map((GraphicNovels) => (
        <div key={GraphicNovels._id} className="comic-data">
          <ul>
            <img src={GraphicNovels.imageUrl} className="cover-image" alt="Graphic Novel Covers"/>
            <h3>{GraphicNovels.title}</h3>
            <li>Author: {GraphicNovels.author}</li>
            <li>Illustrator: {GraphicNovels.artist}</li>
            <li>{GraphicNovels.publisher}</li>
            <li>{GraphicNovels.genre}</li>
            <li>{GraphicNovels.published}</li>
            <li>{GraphicNovels.about}</li>
          </ul>
        </div>
      ))};
      </div>
          <h2>Funko Pops</h2>
      <div className="comic-cover">
      {FunkoPops.map((FunkoPops) => (
        <div key={FunkoPops.itemNumber} className="comic-data">
          <ul>
            <img src={FunkoPops.imageUrl} className="funkopop-image" alt="Funko Pop Image"/>
            <h3>{FunkoPops.name}</h3>
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
