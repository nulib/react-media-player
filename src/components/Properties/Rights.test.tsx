import { render, screen } from "@testing-library/react";
import PropertiesRights from "@/components/Properties/Rights";
import React from "react";

const json = "https://creativecommons.org/publicdomain/zero/1.0/";

describe("IIIF rights property component", () => {
  it("renders", () => {
    render(<PropertiesRights rights={json} />);

    /**
     * test anchor
     */
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent(json);
    expect(link.getAttribute("href")).toBe(json);
    expect(link.getAttribute("target")).toBe("_blank");
  });
});
