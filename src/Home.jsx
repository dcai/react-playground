import React from 'react';
import Header from './components/Header';
import classNames from 'classnames';
import { Container } from './components/Container';

const Row = props => (
  <div className="columns is-8 is-variable ">{props.children}</div>
);

const Col = props => {
  let classes = 'column has-text-left';
  classes += ` ${props.sizeClass}`;
  return <div className={classes}>{props.children}</div>;
};

const Hero = props => (
  <section className="hero is-success">
    <div className="hero-body">{props.children}</div>
  </section>
);

const FormField = props => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      {props.textarea ? (
        <textarea className="textarea is-medium"></textarea>
      ) : (
        <input className="input is-medium" type="text" />
      )}
    </div>
  </div>
);
const Submit = props => (
  <div className="control">
    <button type="submit" className="button">
      {props.label}
    </button>
  </div>
);

const ContactForm = props => (
  <>
    <FormField label="Name" />
    <FormField label="Email" />
    <FormField label="Message" textarea={true} />
    <Submit label="Send Message" />
  </>
);

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
    <Header />
    <Hero>
      <Container>
        <Row>
          <Col sizeClass="is-two-thirds">
            <h1 className="title is-1">Contact Us</h1>
            <p className="is-size-4">{text}</p>
          </Col>
          <Col sizeClass="is-one-thirds">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Hero>
  </>
);
