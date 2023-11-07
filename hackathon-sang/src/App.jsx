import React, { useState } from 'react'
import '../src/components/hack.css'
import Word from './components/Word'
import Letter from './components/Letter'
import Paragraph from './components/Paragraph'

function App() {
  const [word, setWord] = useState("")
  const [letter, setLetter] = useState("")
  const [para, setPara] = useState("")

  const renderWord = word.split(" ").join("").length
  const renderLetter = letter.split(/\s+/).filter(item => item !== '').length;
  const renderPara = para.split(/\n/).filter(paragraph => paragraph.trim() !== '').length;

  const handleChange = (e) => {
    setWord(e.target.value)
    setLetter(e.target.value)
    setPara(e.target.value)
    
  }
  // const UpperCase = () => {
  //   setLetter(letter.toUpperCase())
  // }
  // const LowerCase=()=>{
  //   setLetter(letter.toLowerCase())
  // }
  return (
    <>
      <div id='container'>
        <h1>Word Counter</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Word word={renderWord}></Word>
          <Letter letter={renderLetter}></Letter>
          <Paragraph para={renderPara}></Paragraph>
        </div>
        <textarea
          onChange={handleChange}
          placeholder='Enter/Paste Your Text Here'
          cols="50"
          rows="10"
          value={word}
        ></textarea>
        <div className='btn'>
          <button onClick={()=>setWord(word.toLowerCase())}>Click To LowerCase</button>
          <button onClick={()=>setWord(word.toUpperCase())}>Click To UpperCase</button>
        </div>
      </div>

    </>
  )
}
export default App;