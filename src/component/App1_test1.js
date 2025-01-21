// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const title = screen.getByTitle(/abc/)
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(title).toBeInTheDocument();

// });

test('test case only for title', () => {
  render(<App />);
  const title = screen.getByTitle(/Edit/)
  expect(title).toBeInTheDocument();

});

// test('test case for input field', ()=>{
//   render(<App/>);
//   const checkinput = screen.getByRole('textbox')
//   const placeholder = screen.getByPlaceholderText('Enter User Name')
//   expect(checkinput).toBeInTheDocument();
//   expect(placeholder).toBeInTheDocument();
//   expect(checkinput).toHaveAttribute("name","username")
//   expect(checkinput).toHaveAttribute("id","userId")
//   expect(checkinput).toHaveAttribute("type","text")
//   expect(checkinput).toHaveAttribute("value","abcd")
// })

// test("describe test cases",()=>{
//   render(<App/>);
//   let checkinput = screen.getByRole('textbox')
//   let placeholder = screen.getByPlaceholderText('Enter User Name')
//   expect(checkinput).toBeInTheDocument();
//   expect(placeholder).toBeInTheDocument();
//   expect(checkinput).toHaveAttribute("name","username")
//   expect(checkinput).toHaveAttribute("id","userId")
//   expect(checkinput).toHaveAttribute("type","text")
//   expect(checkinput).toHaveAttribute("value","abcd")
// })

// describe("group test cases", () => {
//   test("renders learn react link", () => {
//     render(<App />);
//     const title = screen.getByTitle(/abc/);
//     const linkElement = screen.getByText(/learn react/i); 
//     expect(linkElement).toBeInTheDocument();
//     expect(title).toBeInTheDocument();
//   });

//   test("test case only for title", () => {
//     render(<App />);
//     const title = screen.getByTitle(/abcd/);
//     expect(title).toBeInTheDocument();
//   });

//   test("test case for input field", () => {
//     render(<App />);
//     const checkinput = screen.getByRole("textbox");
//     const placeholder = screen.getByPlaceholderText("Enter User Name");
//     expect(checkinput).toBeInTheDocument();
//     expect(placeholder).toBeInTheDocument();
//     expect(checkinput).toHaveAttribute("name", "username");
//     expect(checkinput).toHaveAttribute("id", "userId");
//     expect(checkinput).toHaveAttribute("type", "text");
//     expect(checkinput).toHaveAttribute("value", "abcd");
//   });

//   test("describe test cases", () => {
//     render(<App />);
//     let checkinput = screen.getByRole("textbox");
//     let placeholder = screen.getByPlaceholderText("Enter User Name");
//     expect(checkinput).toBeInTheDocument();
//     expect(placeholder).toBeInTheDocument();
//     expect(checkinput).toHaveAttribute("name", "username");
//     expect(checkinput).toHaveAttribute("id", "userId");
//     expect(checkinput).toHaveAttribute("type", "text");
//     expect(checkinput).toHaveAttribute("value", "abcd");
//   });
// });

// describe("group test cases22", () => {
//   test("renders learn react link", () => {
//     render(<App />);
//     const title = screen.getByTitle(/abc/);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//     expect(title).toBeInTheDocument();
//   });

//   test("test case only for title", () => {
//     render(<App />);
//     const title = screen.getByTitle(/abcd/);
//     expect(title).toBeInTheDocument();
//   });

//   test("test case for input field", () => {
//     render(<App />);
//     const checkinput = screen.getByRole("textbox");
//     const placeholder = screen.getByPlaceholderText("Enter User Name");
//     expect(checkinput).toBeInTheDocument();
//     expect(placeholder).toBeInTheDocument();
//     expect(checkinput).toHaveAttribute("name", "username");
//     expect(checkinput).toHaveAttribute("id", "userId");
//     expect(checkinput).toHaveAttribute("type", "text");
//     expect(checkinput).toHaveAttribute("value", "abcd");
//   });

//   test("describe test cases", () => {
//     render(<App />);
//     let checkinput = screen.getByRole("textbox");
//     let placeholder = screen.getByPlaceholderText("Enter User Name");
//     expect(checkinput).toBeInTheDocument();
//     expect(placeholder).toBeInTheDocument();
//     expect(checkinput).toHaveAttribute("name", "username");
//     expect(checkinput).toHaveAttribute("id", "userId");
//     expect(checkinput).toHaveAttribute("type", "text");
//     expect(checkinput).toHaveAttribute("value", "abcd");
//   });

//   describe("inner group test cases22", () => {
//     test("test case only for title", () => {
//       render(<App />);
//       const title = screen.getByTitle(/abcd/);
//       expect(title).toBeInTheDocument();
//     });
  
//     test("test case for input field", () => {
//       render(<App />);
//       const checkinput = screen.getByRole("textbox");
//       const placeholder = screen.getByPlaceholderText("Enter User Name");
//       expect(checkinput).toBeInTheDocument();
//       expect(placeholder).toBeInTheDocument();
//       expect(checkinput).toHaveAttribute("name", "username");
//       expect(checkinput).toHaveAttribute("id", "userId");
//       expect(checkinput).toHaveAttribute("type", "text");
//       expect(checkinput).toHaveAttribute("value", "abcd");
//     });
//   });
// });
