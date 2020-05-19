import React from 'react';
import ReactDom from 'react-dom';
import Demo from './demo';

document.write('123');

class App extends React.Component {
  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
