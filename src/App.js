import React from "react";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<List />} />
     
        <Route path='story1' element={<Story1 />} />
        <Route path='story2' element={<Story2 />} />
        <Route path='story3' element={<Story3 />} />
        <Route path='story4' element={<Story4 />} />
        <Route path='story5' element={<Story5 />} />
        <Route path='story6' element={<Story6 />} />
        <Route path='story7' element={<Story7 />} />
        <Route path='story8' element={<Story8 />} />
        <Route path='story9' element={<Story9 />} />
      </Routes>
      <Footer />
    </Router>
  
  );
}



const List = () => {
    return(
       <div className='list'>
         
          <h2 className-="list">
           {/* 9. <Link to="story8">Story9</Link ><small> - date</small><br/> */}
           {/* 8. <Link to="story8">Story8</Link ><small> - date</small><br/> */}
           7. <Link to="story7">Paris Hilton is now in the Metaverse</Link ><small> - June 22, 2022</small><br/>
           6. <Link to="story6">Great TV Series About the Future Metaverse</Link><small> - June 11, 2022</small><br/>
           5. <Link to="story5">Avatars Now Have Legs</Link><small> - June 9, 2022</small><br/>
           4. <Link to="story4">Knittel Music School Founders Day</Link><small> - May 7, 2022</small><br/>
           3. <Link to="story3">Los Angeles Police Now Using VR</Link><small> - April 29, 2022</small><br/>
           2. <Link to="story2">Metaverse Music School</Link><small> - May 3, 2022</small><br/>
           1. <Link to="story1">House in Houston sold in the Metaverse</Link><small> - May 3, 2022</small><br/>
          </h2>
       </div>
    )
}

const Story1 = () => {
  return(
    <div className="story">  
    <h1>House in Houston Sold in the Metaverse</h1> May 3, 2022
    <p>Congratulations to my FIRST client from the multiverse, Elvis, aka Tatatel on the closing of your house in Houston, TX What an amazing opportunity. I was given to help someone from the Multiverse buy a home. When I bought this Oculus, I never imagined in my wildest dreams that I would be doing real life work from relationships built online. But it’s happening, we are living in the future and it’s absolutely amazing! Thank you so much Tatatel for giving me the opportunity to help you and your family. If anyone is looking for a realtor in Houston, I would love to help 281-702-0556S</p>
    <p><a href="https://www.facebook.com/brittany.blue.58"  target="_blank">
    <img src="/media/Story1.jpg" alt="PHOTO"/></a> </p>
    </div>
    )
}
const Story2 = () => {
  return(
    <div className="story">  
    <h1>Metaverse Music School</h1> May 3, 2022
    <p>Here is an example of making a shcool in the Metaverse.</p>
    <p><a href="https://youtu.be/Sze8j6q9Yhk"  target="_blank">
    <img src="/media/Story2.png" alt="PHOTO"/></a> </p>
    </div>
    )
}
const Story3 = () => {
  return(
    <div className="story">  
    <h1>Los Angeles Police Now Using VR</h1> April 29, 2022
    <p>NBC Nightly News story about police training in the Metaverse.</p>
    <p><a href="https://youtu.be/bDb7hiHGhzg?t=930"  target="_blank">
    <img src="/media/Story3.png" alt="PHOTO"/></a> </p>
    </div>
    )
}
const Story4 = () => {
  return(
    <div className="story">  
    <h1>Knittel Music School Founders Day</h1> May 7, 2022
    <p>We decided to create more rooms for different instruments and give the ownership of these rooms to members of Anthony’s band meet-up group. We also decided that this school is going to be for the public good of education and not for profit of the owners.</p>
    <p><a href="https://youtu.be/XqpdffJ8q3w"  target="_blank"><img src="." alt="PHOTO"/></a> </p>
    </div>
    )
}
const Story5 = () => {
  return(
    <div className="story">  
    <h1>Avatars Now Have Legs</h1> June 9, 2022
    <p>You can now have an avatar with legs in the Spatial program on your headset. It uses your web cam or photo to generate an avatar for you. It really makes you recognizable in your meetings. You can also attend meetings with your avatar from a computer or smart phone. It is also a lot easier to set up your meeting room from your computer.</p>
    <p><a href="https://youtu.be/0ZfZj2bn_xg"  target="_blank"><img src="." alt="PHOTO"/></a> </p>
    </div>
    )
}
  const Story6 = () => {
  return(
    <div className="story">  
    <h1>Great TV Series About the Future Metaverse</h1>   June 11, 2022
    <p>This TV show happens mostly in the Metaverse. You will like watching what can happen there. A lot of the things in there are already available today</p>
    <p><a href="https://youtu.be/0ZfZj2bn_xg"  target="_blank"><img src="." alt="PHOTO"/></a> </p>
    </div>
    )
}
const Story7 = () => {
  return(
    <div className="story">  
    <h1>Paris Hilton is now in the Metaverse</h1>June 22, 2022
    <p>Paris Hilton now has a place in the Metaverse that she can use to give her 16 million followers some new experiences with NFT's</p>
    <p><a href="https://twitter.com/i/status/1538993311704399873"  target="_blank">
      <img src="../media/Story7.png" alt="x"/></a> </p>
    </div>
  )
}
const Story8 = () => {
  return(
    <div className="story">  
    <h1>Story8</h1>date
    <p>text</p>
    <p><a href="link"  target="_blank">
    <img src="../media/Story8.png" alt="PHOTO"/></a></p>
  </div>
  )
}
const Story9 = () => {
  return(
    <div className="story">  
    <h1>Story9</h1>date
    <p>text</p>
    <p><a href="link"  target="_blank">
    <img src="../media/Story9.png" alt="PHOTO"/></a></p>
  </div>
  )
}

export default App;
