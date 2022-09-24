import React from "react";
import { render, screen } from "@testing-library/react";
import { NectarExternalWebResource } from "@samvera/nectar-iiif/dist/types/nectar";
import PropertiesSeeAlso from "@/components/Properties//SeeAlso";

const json: NectarExternalWebResource[] = [
  {
    format: "text/xml",
    id: "https://harvester-bl.britishart.yale.edu/oaicatmuseum/OAIHandler?verb=GetRecord\u0026identifier=oai:tms.ycba.yale.edu:21168\u0026metadataPrefix=lido",
    label: { none: ["Schema Definition"] },
    type: "Dataset",
  },
  {
    format: "text/rdf+n3",
    id: "http://collection.britishart.yale.edu/id/page/object/21168",
    label: { none: ["Linked Data"] },
    type: "Dataset",
  },
];

describe("IIIF seeAlso property component", () => {
  it("renders", () => {
    render(<PropertiesSeeAlso seeAlso={json} />);

    /**
     * test anchors
     */
    const links = screen.getAllByRole("link");
    links.forEach((element, index) => {
      const text = json[index].label?.none?.join(", ") as string;
      expect(element).toHaveTextContent(text);

      const href = json[index].id as string;
      expect(element.getAttribute("href")).toBe(href);
    });
  });
});
