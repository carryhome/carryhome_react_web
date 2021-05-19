import React, { useState, useEffect } from 'react';

let Card = props => {
  return (
    <div className="container-fluid" style={{ margin: '1em', backgroundColor:'#F0F8FF'}}>
      <h1> Hi we will come back soon...</h1>
      <h1>{props.header}</h1>
      <p>{props.para}</p>
      <div class="row">
        <div class="col-sm-3" style={{backgroundColor:'#EBF4FA', display: 'flex', justifyContent:'center'}}>
          <img alt="avatar" style={{ width: '250px', backgroundColor:'lightblue' }} src={props.avatar_url} />
        </div>
        <div class="col-sm-9" style={{backgroundColor:'lightblue'}}>
          <div style={{ fontWeight: 'bold' }}>{props.name}</div>
          <div>{props.login}</div>
          <div><a href={props.html_url} target="_blank">{props.html_url}</a></div>
          <div><a href={props.blog} target="_blank">{props.blog}</a></div>
          <div>{props.bio}</div>
          <div>{props.mobile}</div>
          <div>{props.mail}</div>
          <div>{props.website}</div>
          <div>{props.location}</div>
        </div>
      </div>
    </div>
  )
}

let CardList = props => <div>{props.cards.map(card => <Card {...card} />)}</div>

let Form = props => {
  const [username, setUsername] = useState('')
  
  const handleSubmit = async event => {
    event.preventDefault()
    
    let response = await (await fetch(`https://api.github.com/users/${username}`)).json();
    props.onSubmit(response)
    setUsername('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  )
}

const getDefaultProfileData = () => {
  return fetch('https://api.github.com/users/avinash2222')
  .then(response => response.json())
  .then(data => data);
}

const AboutUs = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    {getDefaultProfileData().then(data => {
      data.mobile = 9793973080
      data.mail = 'avinashcat.singh2222@gmail.com',
      data.website = 'https://carryhome.in',
      data.header = 'CarryHome | opensouce portal',
      data.para = "CarryHome is a public access repo, looking people's contribution.."
      setCards([data])
      })
    }
    
  }, [])
  
  
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
   
  return (
    <div className="container-fluid" style= {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div class="col">
        <div class="row-sm-6" style= {{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <Form onSubmit={addNewCard} />
        </div>
        <div class="row-sm-6">
          <CardList cards={cards} />
        </div>
      </div>
    </div>
  )
}


export default AboutUs