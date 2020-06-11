import React from 'react';
import { render } from '@testing-library/react';
import App, { sum } from './App';

describe('App', () => {
  beforeAll(() => {
    console.log("beforeAll")
  })
  beforeEach(() => {
    console.log("beforeEach")
  })

  afterEach(() => {
    console.log("afterEach")
  })

  afterAll(() => {
    console.log("afterAll")
  });

  it('sum 1 plus 1 equals 2', () => {
    console.log("sum 1 plus 1 equals 2")
    expect(sum(1,1)).toEqual(2);
  })

  it('sum 2 plus 2 equals 2', () => {
    console.log("sum 2 plus 2 equals 2")
    expect(sum(2,2)).toEqual(4);
  })
 
})