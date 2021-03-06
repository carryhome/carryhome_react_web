import React from 'react'
require('dotenv').config()
import { Container, Row, Col } from 'react-bootstrap';
import { io } from "../../api/io";
import { observer } from "mobx-react-lite";
import MovieCard from '../../components/MovieCard'
import {movieData} from '../../data/movie_data'
import Counter from '../../components/Counter'
import ToDo from '../../components/ToDo' 
import Axios from '../../components/Axios'
import SearchInMockData from '../../components/SearchInMockData'
import '../../styles/LandingPage.css'
import WeatherFetch from '../../components/WeatherFetch'
import '../../App.scss'

let ColMyStyle1 = {fontFamily: 'areal', backgroundColor: 'powderblue', width: '80rem' }
let ColMyStyle2 = {fontFamily: 'areal', backgroundColor: 'lightblue', width: '80rem' }

const Home = observer(() => {
  return(
  <div>
    <center>
    
    {/* <Slider slides={images}/> */}
    <p style={{fontFamily: 'Fantasy', fontSize: 34, color: '#41bc9d', textAlign:'center'}}>React:- All in a single page </p>
    {/* <NormalContext /> */}

    <Container>
      <Row>
        { movieData.map(data => <Col sm><MovieCard imgsrc = {data.imgsrc} name={data.name} decs={data.decs} /> </Col>) } {/* Movie Card component */}
      </Row>
    </Container>

    <Container>
      <Row xs="8">
        <Col style= {ColMyStyle1}>
       
          <div className="separator"><br/><span>... props:- variables passed by its parent component ...</span><br/></div>
          <br/><Counter /><br/> {/* Counter component */}

          <div className="separator"><br/><span>... useState:- variables, localStorage, directly initialized and managed by the component ...</span><br/></div>
          <br/><ToDo /><br/>   {/* ToDo component */} 

        </Col>

        <Col style= {ColMyStyle2}>
          <div className="separator"><br/><span>... Axios get data ...</span><br/></div>
          <br/><Axios /><br/>
          
          <div className="separator"><br/><span>... Weather App:- useEffect, fetch api call ...</span><br/></div>
          <br/><WeatherFetch /><br/>

          <div className="separator"><br/><span>... mochdata:mockaroo.com, filter search ...</span><br/></div>
          <br/><SearchInMockData /><br/>
        </Col>
      </Row>
    </Container>


    



    </center>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
  )
})

export default Home;