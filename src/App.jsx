
import './App.css'

function App() {

  function Greeting() {
    return (
      <>
        <h1>describing banglar salman khan:</h1>
        <Person />
        <Message/>

      </>
      
    )
  }

  function Person() {
    return (
      <h3>tahar nam zayed khan</h3>
    )
  }

  function Message() {
    return (
      <h4>sobai zayed er upor crush</h4>
    )
  }


  return (
    <>
      
      <h1 className='text-center text-3xl'>hello</h1>
      <button className='btn btn-secondary'>daisybtn</button>
      <Greeting></Greeting>
      
    </>
  )
}

export default App
