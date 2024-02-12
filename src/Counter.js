import { useState } from "react";

function App(props) {
  const [adet, setAdet] = useState(props.adet)
  
const [text, setText] = useState(props.text)

  return (
    <div className="App">
     <p>GİRİLEN METNİMİZ: {text}</p>
<p>BUTONA {adet} kez tıklandi.</p>
<button onClick={()=>setAdet(adet+1)}>+1 ARTTIR</button>
<button onClick={()=> setAdet(adet-1)}>-1 ÇIKAR</button>
<button onClick={()=> setAdet(props.adet)}>RESET</button>
<input type="text" value={text}  onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
}

export default App;
