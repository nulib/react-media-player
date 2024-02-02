import { InternationalString } from "@iiif/presentation-3";
import { LabeledIIIFExternalWebResource } from "src/types/presentation-3";
import React from "react";
import { getLabel } from "src/hooks/use-iiif";

export interface TrackProps {
  resource: LabeledIIIFExternalWebResource;
  ignoreCaptionLabels: string[];
}

const Track: React.FC<TrackProps> = ({ resource, ignoreCaptionLabels }) => {
  const label = getLabel(resource.label as InternationalString, "en");

  const isIgnored =
    Array.isArray(label) &&
    label.some((value: string) => ignoreCaptionLabels.includes(value));

  if (isIgnored) return null;

  return (
    <track
      key={resource.id}
      src={resource.id as string}
      label={Array.isArray(label) ? label[0] : label}
      srcLang="en"
      data-testid="player-track"
    />
  );
};

export default Track;
