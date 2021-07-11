import { Row, Col, Container, ContactForm, Counter } from '../components';

const Hero = props => {
  const typeclass = `is-${props.type || 'info'}`;
  return (
    <section className={`hero is-halfheight ${typeclass}`}>
      {props.header && <div className="hero-head">{props.header}</div>}
      <div className="hero-body">{props.children}</div>
      <div className="hero-foot">{props.footer}</div>
    </section>
  );
};

const text = `
Vivamus tempus convallis efficitur. Etiam ac sem vitae sem laoreet
viverra. Fusce at finibus turpis. Maecenas lectus leo, aliquet eu
neque sed, vulputate accumsan ligula. Sed dapibus a odio eget
lacinia. Integer vitae augue ut lectus laoreet consequat. Etiam
tristique ultricies semper. Praesent ut turpis tempor felis
tincidunt accumsan at sit amet lorem. Vivamus molestie est eu
rhoncus mollis. Suspendisse ultrices efficitur aliquet. Nunc
aliquam nec neque in viverra. Sed volutpat dignissim purus nec
placerat. Phasellus erat dolor, iaculis id iaculis vitae,
pellentesque faucibus eros. Donec vel ornare magna. Vivamus
egestas elit vel sagittis finibus.`;

export const Home = () => (
  <>
    <Hero>
      }>
      <Container>
        <Row cols={8}>
          <Col sizeclassName="is-two-thirds">
            <h1 className="title is-1">Contact Us</h1>
            <p className="is-size-4">{text}</p>
          </Col>
          <Col sizeclassName="is-one-thirds">
            <ContactForm />
            <hr />
            <Counter />
          </Col>
        </Row>
      </Container>
    </Hero>
  </>
);

export default Home;
