import { render } from "@testing-library/react";
import Main from "../Main";

test("Main component renders without crashing", () => {
  const mockHandleSelection = jest.fn();
  expect(() => {
    render(<Main handleBuildSelection={mockHandleSelection} buildingId="f1" />);
  }).not.toThrow();
});
