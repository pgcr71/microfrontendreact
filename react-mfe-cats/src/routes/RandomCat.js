import React, { useState, useEffect } from "react";
import Image from './../component/Image';

export default function RandomCat() {
  const [randomCatImg, setRandomCatImg] = useState(null);

  const fetchRandomCat = () => {
    setRandomCatImg("");
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((res) => res.json())
      .then((catInfo) => {
        setRandomCatImg(catInfo[0].url);
      });
  };

  useEffect(() => {
      fetchRandomCat();
 
  },[]);

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div>
        {randomCatImg !== "" ? (
          <div>
            {/* <img src={randomCatImg} width="400px" alt="Cat" /> */}
            <Image src={randomCatImg} customStyle={{width:'400px'}} alt="cat"/>
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}