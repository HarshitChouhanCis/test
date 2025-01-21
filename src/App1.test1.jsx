import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import myfunction from './My'

// test("on change event testing",()=>{
//     render(<App/>);
//     let input = screen.getByRole('textbox');
//     fireEvent.change(input,{target:{value:'a'}});
//     expect(input.value).toBe("ab"+"test")

// })

test("click event test case111",()=>{
    render(<App/>);
    const btn = screen.getByRole("button",{name:"click Here"})
    // const btn = screen.getByRole("button",{name:"click Here"})
    const input1 = screen.getByRole("textbox",{name:"User Name"})
    const input2 = screen.getByRole("textbox",{name:"Name"})
    console.log("btmm ",fireEvent.click(btn));
    fireEvent.click(btn);
    const div1 = screen.getByRole("dummy")
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(div1).toBeInTheDocument();


})

test("test export function ",()=> {
    expect(myfunction()).toMatch("hi")
})