import './App.css'
import Post from './Post'
import Logo from './assets/images/header.png'

function App() 
{

  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="Instagram" />
      </div>

      <Post username="conrad96" caption="This is my first post" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mops_oct09_cropped2.jpg/440px-Mops_oct09_cropped2.jpg" />
      <Post username="elon96" caption="This is my test post" imageUrl="https://www.dogbreedinfo.com/images32/GermanShepherdAdultDogLayInGrassOutside.jpg" />
      <Post username="mark2" caption="This is a test post"  imageUrl="https://www.bil-jac.com/media/nhyd0qet/rottweiler-868607572.jpg?center=0.48541458426682293,0.2815947395058393&mode=crop&width=600&height=400&rnd=132169062074100000" />

      {/**comments */}
    </div>
  );
}

export default App;
