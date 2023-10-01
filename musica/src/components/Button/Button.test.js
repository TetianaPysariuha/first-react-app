import Button from "./Button";
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button snapshot testing', ()=>{
    test("Should Button render", ()=>{
        const { asFragment } = render(<Button btnText = 'testButton' handleClick={()=>{}} backgroundColor='green' color= 'white'/>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Button click work testing', ()=>{
    test("Should Button click calls the function", ()=>{
        const clickFn = jest.fn();
        render(<Button btnText = 'testButton' handleClick={clickFn} backgroundColor='green' color= 'white'/>);
        fireEvent.click(screen.getByText('testButton'));
        expect(clickFn).toHaveBeenCalledTimes(1);
    })
})