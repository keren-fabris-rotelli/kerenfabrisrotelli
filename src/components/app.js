import React, { Component } from 'react';
import { configureAnchors} from 'react-scrollable-anchor';
import HttpsRedirect from 'react-https-redirect';

import Header from './header';
import About from './about';
import Projects from './projects';
import Companies from './companies';
import Contact from './contact';

configureAnchors({offset: -70, scrollDuration: 200})

export default class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <div>
          <Header />
          <About />
          <Companies />
          <Projects />
          <Contact />
        </div>
      </HttpsRedirect>
    );
  }
}
