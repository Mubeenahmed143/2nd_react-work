import logo from './logo.svg';
import UncontrolledExample from './header';
import ProductComponent from './pro_detail';
import DummyJsonComponent from './product';
import Movies from './one';
import './Movies.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datewalakam from './date_time';

function App() {


  const cardData = [
    {
      img: "https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
      title: "Kabir Singh",
      detail: "Kabir Singh Full Movie | Shahid Kapoor | Kiara Advani | Nikita Dutta | Teena Singh | Review & Facts",
      link: "https://www.youtube.com/watch?v=RiANSSgCuJk"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0x39X8OLLCxhAJ5_rymmebw1_12708qQ3Q&s",
      title: "Baaghi 3",
      detail: "Baaghi 3 Full Movie In Hindi | Tiger Shroff | Shraddha Kapoor | Riteish Deshmukh | Blockbuster Movie",
      link: "https://www.youtube.com/watch?v=qGT0ID_U73Q"
    },
    {
      img: "https://preview.redd.it/which-are-your-favorite-action-films-poster-and-how-they-v0-436p9cps2r3f1.png?width=1602&format=png&auto=webp&s=f1fd322ce797168355f8ace1b12274e515ac7737",
      title: " WAR ",
      detail: "WAR | Trailer | Hrithik Roshan | Tiger Shroff | Vaani Kapoor | Siddharth Anand | YRF Spy Universe",
      link: "https://www.youtube.com/watch?v=tQ0mzXRk-oM"
    },
    {
      img: "https://i0.wp.com/bollywoodmovieposters.com/wp-content/uploads/2024/06/prabhas-poster-salaar-telugu-movie.jpg?fit=872%2C1200&ssl=1",
      title: " SALAAR ",
      detail: "Salaar Hindi Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|Hombale Films| Vijay Kiragandur",
      link: "https://www.youtube.com/watch?v=HihakYi5M2I"
    },
    {
      img: "https://i.redd.it/the-best-bollywood-posters-2023-v0-5cvq722z5bcc1.jpg?width=937&format=pjpg&auto=webp&s=2645e77140d995650684ecdc0511d79be0298ef9",
      title: " JAWAN ",
      detail: "Jawan | Official Trailer | Shah Rukh Khan, Vijay Sethupathi, Nayanthara, Deepika Padukone",
      link: "https://www.youtube.com/watch?v=MWOlnZSnXJo"
    },
    {
      img: "https://preview.redd.it/the-best-bollywood-posters-2023-v0-3sdzn02z5bcc1.jpg?width=640&crop=smart&auto=webp&s=c3e7a2bc8154d082d3277dd79c68f3682334cdc1",
      title: " PATHAN ",
      detail: "Pathaan Trailer | Shah Rukh Khan | Deepika Padukone | John Abraham | Siddharth A | YRF Spy Universe",
      link: "https://www.youtube.com/watch?v=vqu4z34wENw"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ppUT8bbkGfZXR0r2hyqHC5-TO4mfcYun3w&s",
      title: " HOUSEFULL 4 ",
      detail: "Housefull 4 |Official Trailer|Akshay|Riteish|Bobby|Kriti S|Pooja|Kriti K|Sajid N|Farhad|",
      link: "https://www.youtube.com/watch?v=gcHH34cEl3Y"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqMc06vJiYtk1mLz5WCMSwDKQF-OTanmADA&s",
      title: " HOUSEFULL 5 ",
      detail: "Housefull 5 | Official Trailer | Sajid Nadiadwala | Tarun Mansukhani | In Cinemas on 6th June 2025",
      link: "https://www.youtube.com/watch?v=xGQuT1wm2qk"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz7WoxknCrNEsIJXFe023Ogk9-o6drYD4oA&s",
      title: " ANIMAL ",
      detail: "ANIMAL (OFFICIAL TRAILER): Ranbir Kapoor | Rashmika M, Anil K, Bobby D | Sandeep Vanga | Bhushan K",
      link: "https://www.youtube.com/watch?v=8FkLRUJj-o0"
    }

  ]

  return (
    <div className="dark-theme">
      <UncontrolledExample></UncontrolledExample>
  {/* Hero Section */}
  <div className="hero-section">
  <Datewalakam></Datewalakam>
    <div className="hero-overlay">
      <h1>Red Brothers</h1>
      <p>Action | Crime | Thriller</p>
    </div>
  </div>

  {/* Movie Cards */}
  <div className="container mt-5">
    <h2 className="section-title">Trending Now</h2>
    <div className="row g-4">
      {cardData.map((card, index) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
          <Movies
            img={card.img}
            title={card.title}
            detail={card.detail}
            link={card.link}
          />
        </div>
      ))}
    </div>
  </div>
  
<ProductComponent></ProductComponent>
<DummyJsonComponent></DummyJsonComponent>

</div>

  );  
}

export default App;


