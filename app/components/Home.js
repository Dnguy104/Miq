// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

<<<<<<< HEAD
=======

export class Container extends Component<Props> {
constructor(props) {
  super(props);
}

  render() {
    return (
      <div>{this.props.loaded}</div>
    );
  }
}

>>>>>>> 3e05f77a2daebd0c99c3577085bb363aa5c69932
type Props = {};

export default class Home extends Component<Props> {
  props: Props;

<<<<<<< HEAD
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
=======
  constructor(props) {
    super(props);
    this.state = {
      loaded: 'false',
      widgetScript: 0
    };

  }

  setLoaded() {
    this.setState({
      loaded: 'true'
    }, () => {
      console.log(this.state.loaded);
      });

  }
  //
  // loadWidgetScript() {
  //   loadScript('https://widget.uservoice.com/urstDguk2K0aOkLlEfWZzw.js')
  //     .then((script) => {
  //       // Grab the script object in case it is ever needed.
  //       this.widgetScript = script;
  //       this.setState({ loaded: true });
  //     })
  //     .catch((err: Error) => {
  //       console.error(err.message);
  //     });
  // }
  componentWillMount() {
    if (document.getElementById('widget') == null) {
      var uv=document.createElement('script');
      uv.id='widget'
      uv.type='text/javascript';
      uv.async=true;
      uv.src='https://widget.uservoice.com/urstDguk2K0aOkLlEfWZzw.js';
      // document.body.appendChild(uv);
      var s=document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(uv,s);
    }

    var script = document.getElementById('widget');
    script.onload = function() {
      var UserVoice = window.UserVoice || [];

      // Identify the user and pass traits
      // To enable, replace sample data with actual user traits and uncomment the line
      UserVoice.push(['identify', {
        //email:      'john.doe@example.com', // User’s email address
        //name:       'John Doe', // User’s real name
        //created_at: 1364406966, // Unix timestamp for the date the user signed up
        //id:         123, // Optional: Unique id of the user (if set, this should not change)
        //type:       'Owner', // Optional: segment your users by type
        //account: {
        //  id:           123, // Optional: associate multiple users with a single account
        //  name:         'Acme, Co.', // Account name
        //  created_at:   1364406966, // Unix timestamp for the date the account was created
        //  monthly_rate: 9.99, // Decimal; monthly rate of the account
        //  ltv:          1495.00, // Decimal; lifetime value of the account
        //  plan:         'Enhanced' // Plan name for the account
        //}
      }]);

      // Set global widget options
      UserVoice.push(['set', {
        accent_color: '#448dd6'
      }]);

      // Add default trigger to the bottom-right corner of the window:
      UserVoice.push(['addTrigger', {
        mode: 'post_idea',
        trigger_color: 'white',
        trigger_background_color: 'rgba(46, 49, 51, 0.6)',
        trigger_position: 'bottom-right'
      }]);

      // Or, use your own custom trigger:
      //UserVoice.push(['addTrigger', '#give_feedback', { mode: 'satisfaction' }]);

      // Autoprompt for Satisfaction and SmartVote (only displayed under certain conditions)
      UserVoice.push(['autoprompt', {}]);
    };
  }


  render() {
    return (
      <div>
        <Container loaded={this.state.loaded} ></Container>
        <a id="give_feedback">hello world</a>
        <h1> hello </h1>
>>>>>>> 3e05f77a2daebd0c99c3577085bb363aa5c69932
      </div>
    );
  }
}
