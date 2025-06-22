import React, { useEffect, useState } from "react";
import Comics from "../data/comics";
import GraphicNovels from "../data/graphicnovels";
import FunkoPops from "../data/funkopops";

function Products() {
  const [comicData, setComicData] = useState([]);
  const [graphicNovelData, setGraphicNovelData] = useState([]);
  const [funkoPopsData, setFunkoPopData] = useState([]);

  const url = "";

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
        Tha Cr8 is a collection of comics books, graphic novels, actions
        figures, Funko pops, toys, and auction site for rare valuable items
        created by black comic book creators. Products sold by the site can be
        found on the product page and the auctions can be found on the auctions
        page. History about the comic book creators can be found on the POC
        Creators page while there is a blog post were we will share blog
        articles speaking on current events and opinion pieces on black
        superheroes.
      </p>
      <div>
        <h2>Comic Books</h2>
        {Comics.map((Comics) => (
          <div key={Comics._id} className="comic-cover">
            <div>
              <div className="comic-card">
                <h3>{Comics.title}</h3>
                {Comics.imageUrl}
              </div>
              <div className="comic-data">
                <li>{Comics.author}</li>
                <li>{Comics.artist}</li>
                <li>{Comics.publisher}</li>
                <li>{Comics.published}</li>
                <li>{Comics.about}</li>
                <li>{Comics.price}</li>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Graphic Novels</h2>
      {GraphicNovels.map((GraphicNovels) => (
        <div key={GraphicNovels._id} className="comic-cover">
          <div className="comic-card">
            <h3>{GraphicNovels.title}</h3>
            {GraphicNovels.imageUrl}
          </div>
          <div className="comic-data">
            <li>{GraphicNovels.author}</li>
            <li>{GraphicNovels.artist}</li>
            <li>{GraphicNovels.publisher}</li>
            <li>{GraphicNovels.published}</li>
            <li>{GraphicNovels.about}</li>
            <li>{GraphicNovels.price}</li>
          </div>
        </div>
      ))}
    <h2>Funko Pops</h2>
      {FunkoPops.map((FunkoPops) => (
        <div key={FunkoPops.itemNumber} className="comic-cover">
          <div className="comic-card">
            {FunkoPops.imageUrl}
            <h3>{FunkoPops.name}</h3>
          </div>
          <div className="comic-data">
            <li>{FunkoPops.license}</li>
            <li>{FunkoPops.details}</li>
            <li>{FunkoPops.price}</li>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Products;
