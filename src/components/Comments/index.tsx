/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line prettier/prettier
import { Component } from 'react';

export default class Comments extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'marcoscode404/Ignite-Chapter-III');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'dark-blue');
    anchor.appendChild(script);
  }

  render() {
    return (
      <div
        id="inject-comments-for-uterances"
        style={{ marginBottom: '4rem' }}
      />
    );
  }
}
