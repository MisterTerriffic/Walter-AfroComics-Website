import { useEffect, useState } from "react";
import PocCreators from "../data/poccreators";

function PocCreatorsList() {
  const [pocCreatorData, setPocCreatorData] = useState([]);

  const url = "http://localhost:3000";

  useEffect(() => {
    fetch(`${url}`, {
      method: "Get",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then((response) => response.json())
      .then((result) => {
        setPocCreatorData(result.data.pocCreator);
        console.log(result.data.pocCreator, "creator data");
      })
      .catch(console.log("Error"));
  }, []);

  return (
    <main>
      <div>
        <h1>POC Creators</h1>
        <p>
          {""}
          This page is to honor comic book creators, artist, and writers of the
          past.
        </p>
      </div>
      {PocCreators.map((PocCreators) => (
        <div key={PocCreators._id} className="comic-data">
          <ul>
            <img src={PocCreators.imageUrl} alt="Profile Photos"/>
            <li>{PocCreators.name}</li>
            <li>{PocCreators.publications}</li>
            <li>{PocCreators.publisher}</li>
            <li>{PocCreators.about}</li>
          </ul>
        </div>
      ))}
    </main>
  );
}

export default PocCreatorsList;
