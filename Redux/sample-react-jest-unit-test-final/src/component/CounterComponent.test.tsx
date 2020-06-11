import React from 'react';
import CounterComponent from './CounterComponent';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe("CounterComponent",() => {
    let onCountChange:any;
    let wrapper:any;
    beforeEach(() => {
        onCountChange = jest.fn();
        wrapper = mount(<CounterComponent onCountChange={onCountChange} />);
    })
    it('should renders counter component ', () => {
        console.log(wrapper.debug())
        expect(wrapper).not.toBeNull();
    })

    it('should show my default text',() => {
        expect(wrapper.find('p').text()).toEqual('Count: 0');
    })

    it('should correctly increments the count by 1', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 1')
    })

    it('should correctly increments the count by 4', () => {
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 4')
    })

    it('should onCountChange is invoke', () => {
       expect(onCountChange).toBeCalledTimes(1)
       wrapper.find('button').simulate('click');
       expect(onCountChange).toBeCalledTimes(2)
    })

    it('create snapshot test', () => {
        let onCountMock = jest.fn()
        const tree = renderer
        .create(<CounterComponent onCountChange ={onCountMock}>Facebook</CounterComponent>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})


