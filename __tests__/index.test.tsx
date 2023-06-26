import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import userEvent from '@testing-library/user-event';

describe("Home", () => {
  
  describe("Rendering", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a sub heading", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument;
  });

  it("should have a button with text click me", () => {
    render(<Home/>)
    expect(screen.getByRole('button', {name : 'Click Me'})).toBeInTheDocument;
  });
  it('should have input field with label Enter Random Text', () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });

  it('should have input field with label Enter Specific Text', () => {
    render(<Home />);
    expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
  });

  it('should find input field by placeholder text Search', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });

  it('should find input field by display value', () => {
    render(<Home />);
    screen.getByDisplayValue(/AUDI/);
  });
  it('should not find element with text: This is the text!', () => {
    render(<Home />);
    expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
  });
});

describe("Behaviour", () => {
  it('should click on Show Text button and find new text', async () => {
    render(<Home />);
    expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
    const showTextButton = screen.getByRole('button', { name: 'Show Text' });
    await userEvent.click(showTextButton);
    expect(
      await screen.findByText('This is the text!', {}, { timeout: 5000 })
    ).toBeInTheDocument();
  });

});

});
