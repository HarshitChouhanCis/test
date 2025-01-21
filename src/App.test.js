import { render, screen } from "@testing-library/react";
import App from "./App";

test("test handing ",()=>{
    render(<App/>);
    const el = screen.getByRole("heading")
    expect(el).toBeInTheDocument();
})

test("testing mock API ",async()=>{
    render(<App/>);
    const el1 = await screen.findByRole('listitem');
    expect(el1).toHaveLength(4)
  
})