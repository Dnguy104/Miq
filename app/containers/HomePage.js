// @flow
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Sidebar />;
  }
}
