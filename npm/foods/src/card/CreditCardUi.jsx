import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
function CreditCardUi() {
  const [ number, setNumber ] = useState('')
  const [ name, setName ] = useState('')
  const [ expiry , setExpiry ] = useState('')
  const [ cvc, setCvc ] = useState('')
  const [ focus, setFocus ] = useState('')

  return(
      <div className="Cardss">
        <img></img>
          <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
          />
          <form>
              <input type='tel'
              name="number"
              placeholder="Картын дугаар"
              value={number}
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              />
                 <input type='text'
              name="name"
              placeholder="Картын нэр"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              />
                 <input type='tel'
              name="expiry"
              placeholder="MM/YY Дуусах хугацаа"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              />
                 <input type='tel'
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              />
              <div className="d-grid">
             <button className="btn btn-dark" onClick={() => alert('Захиалга баталгаажлаа')}>Зөвшөөрөх</button>
           </div>
          </form>
      </div>
        )
}

export default CreditCardUi;