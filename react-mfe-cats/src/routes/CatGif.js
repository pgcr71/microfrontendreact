import React from "react";
import Image from './../component/Image';

const CatGif = () =>{
    const greetingCatUrl = `https://cataas.com/cat/gif`;

    return (
        <div>
          <header>
              <div>CAT GIF</div>
              <div>
                  <Image src={greetingCatUrl} customStyle={{width:'400px'}} alt="cat"/>
              </div>
          </header>
        </div>
      );
}

export default CatGif;