import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// test("on change event testing",()=>{
//     render(<App/>);
//     let input = screen.getByRole('textbox');
//     fireEvent.change(input,{target:{value:'a'}});
//     expect(input.value).toBe("ab"+"test")

// })

test("click event test case111",()=>{
    render(<App/>);
    const btn = screen.getByRole("button")

    console.log("btmm ",fireEvent.click(btn));
    fireEvent.click(btn);
    expect(screen.getByText("hello")).toBeInTheDocument();
})