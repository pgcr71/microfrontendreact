
import React from "react";
import Image from './../component/Image';

export default function GreetingCat(props) {
  const {history,match} =  props;
  const { greeting } = match.params;
  const greetingCatUrl = `https://cataas.com/cat/says/${greeting}`;

  const handleOnClick = () => {
    history.push(`/`);
  };

  const handleOnGetGifClick = () =>{
    history.push('/gif');
  }

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!greeting ? (  
          <div>Needs a greeting</div>
        ) : (
          <div>
            <Image src={greetingCatUrl} customStyle={{width:'400px'}} />
            {/* <img src={greetingCatUrl} width="400px" alt="Cat" /> */}
          </div>
        )}
      </header>
      <button onClick={handleOnGetGifClick}> Get Cat GIF</button>
      <button onClick={handleOnClick}>Back</button>
     
    </div>

  );
}