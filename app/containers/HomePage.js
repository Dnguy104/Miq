// @flow
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {};

var data = [
    {
      name: "test",
      set: {
        key: "asdfgfdsgfdsh",
        key1: "asdfgfdsgfdsh",
        key2: "asdfgfdsgfdsh",
        key3: "asdfgfdsgfdsh",
        key4: "asdfgfdsgfdsh",
        key5: "asdfgfdsgfdsh"
      }
    },
    {
      name: "test",
      set: {
        key: "asdfgfdsgfdsh",
        key1: "asdfgfdsgfdsh",
        key2: "asdfgfdsgfdsh",
        key3: "asdfgfdsgfdsh",
        key4: "asdfgfdsgfdsh",
        key5: "asdfgfdsgfdsh"
      }
    },
    {
      name: "test",
      set: {
        key: "asdfgfdsgfdsh",
        key1: "asdfgfdsgfdsh",
        key2: "asdfgfdsgfdsh",
        key3: "asdfgfdsgfdsh",
        key4: "asdfgfdsgfdsh",
        key5: "asdfgfdsgfdsh"
      }
    },
    {
      name: "test",
      set: {
        key: "asdfgfdsgfdsh",
        key1: "asdfgfdsgfdsh",
        key2: "asdfgfdsgfdsh",
        key3: "asdfgfdsgfdsh",
        key4: "asdfgfdsgfdsh",
        key5: "asdfgfdsgfdsh"
      }
    }
  ]


export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Sidebar />;
  }
}
