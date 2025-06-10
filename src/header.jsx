import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://i.redd.it/the-best-bollywood-posters-2023-v0-5cvq722z5bcc1.jpg?width=937&format=pjpg&auto=webp&s=2645e77140d995650684ecdc0511d79be0298ef9"
          alt="First slide"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Jawan</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg"
          alt="Kabir Singh"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Kabir Singh</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqMc06vJiYtk1mLz5WCMSwDKQF-OTanmADA&s"
          alt="Housefull 5"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Housefull 5</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
