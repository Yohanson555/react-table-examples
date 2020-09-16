/*
 * Copyright (c) 2020-present unTill Pro, Ltd.
 */

import { createStore, compose } from 'redux';

import reducer from './redux/reducer';

export default () => {
  const store = createStore(reducer, {}, compose);

  return store;
};
