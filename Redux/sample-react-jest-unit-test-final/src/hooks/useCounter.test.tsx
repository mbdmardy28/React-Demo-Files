import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import useCounter, { Counter } from "./useCounter";
import { mount, configure } from "enzyme";
import { TestHook } from '../utility/testUtility';
import { act } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('useCounter', () => {
    const testHook = (callback:() => void) => {
        mount(<TestHook callback={callback} />);
    };
    let counter: Counter 
    beforeEach(() => {
        testHook(() => {
            counter = useCounter();
        })
    })
    test('should have an increment function', () => {
        expect(counter.increment).toBeInstanceOf(Function);
    });

    it("should counter has 0 default value", () => {
        expect(counter.count).toEqual(0);
    })

    it("should counter increment by 1", () => {
        act(() => counter.increment());
        expect(counter.count).toEqual(1);
    }) 

    it("should counter increment by 4", () => {
        act(() => counter.increment());
        act(() => counter.increment());
        act(() => counter.increment());
        act(() => counter.increment());
        expect(counter.count).toEqual(4);
    }) 
})