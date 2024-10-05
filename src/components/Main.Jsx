import React from 'react'
import styled from 'styled-components'

function Main() {
  return (
    <Maindiv>
      <h1>I'm John Carter, a NFT Artist</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus cras
         curabitur eget facilisis nisl. Neque a porttitor .</p>
<button>
    <h1>open demo</h1>
</button>
    </Maindiv>
  )
}
const Maindiv=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1{
        color: var(--bg-neutral-100);
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 100px;
    font-weight: 700;
    line-height: 105px;
    }
    p{
        font-size: 24px;
    line-height: 38px;
    }
    button{
        padding: 30px;
    border-radius: 30px;
    color: #ffffff;
    }
`
export default  Main