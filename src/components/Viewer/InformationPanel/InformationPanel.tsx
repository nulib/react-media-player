import {
  Content,
  List,
  Scroll,
  Trigger,
  Wrapper,
} from "src/components/Viewer/InformationPanel/InformationPanel.styled";
import React, { useEffect, useState } from "react";
import { ViewerContextStore, useViewerState } from "src/context/viewer-context";

import AnnotationPage from "src/components/Viewer/InformationPanel/AnnotationPage";
import { AnnotationPage as AnnotationPageType } from "@iiif/presentation-3";
import Information from "src/components/Viewer/InformationPanel/About/About";
import { Label } from "src/components/Primitives";
import { LabeledResource } from "src/hooks/use-iiif/getSupplementingResources";
import Resource from "src/components/Viewer/InformationPanel/Resource";

interface NavigatorProps {
  activeCanvas: string;
  resources?: Array<LabeledResource>;
  annotationResources?: AnnotationPageType[];
}

export const InformationPanel: React.FC<NavigatorProps> = ({
  activeCanvas,
  resources,
  annotationResources,
}) => {
  const viewerState: ViewerContextStore = useViewerState();
  const { configOptions } = viewerState;
  const { informationPanel } = configOptions;

  const [activeResource, setActiveResource] = useState<string>();

  const renderAbout =
    informationPanel?.renderAbout ||
    configOptions?.informationPanel?.renderAbout;
  const renderSupplementing = informationPanel?.renderSupplementing;
  const renderAnnotation = informationPanel?.renderAnnotation;

  useEffect(() => {
    if (renderAbout) {
      setActiveResource("manifest-about");
    } else if (resources && resources?.length > 0 && !renderAbout) {
      setActiveResource(resources[0].id);
    } else if (
      annotationResources &&
      annotationResources?.length > 0 &&
      !renderAbout
    ) {
      setActiveResource(annotationResources[0].id);
    }
  }, [activeCanvas, renderAbout, resources, annotationResources]);

  const handleValueChange = (value: string) => {
    setActiveResource(value);
  };

  // if (!resources) return <></>;

  return (
    <Wrapper
      data-testid="information-panel"
      defaultValue={activeResource}
      onValueChange={handleValueChange}
      orientation="horizontal"
      value={activeResource}
      className="clover-viewer-information-panel"
    >
      <List aria-label="select chapter" data-testid="information-panel-list">
        {renderAbout && <Trigger value="manifest-about">About</Trigger>}
        {/* {renderSupplementing &&
          resources &&
          resources.map(({ id, label }) => (
            <Trigger key={id} value={id as string}>
              <Label label={label} />
            </Trigger>
          ))} */}

        {renderAnnotation &&
          annotationResources &&
          annotationResources.map((resource, i) => (
            <Trigger key={i} value={resource.id}>
              <Label label={resource.label} />
            </Trigger>
          ))}
      </List>
      <Scroll>
        {renderAbout && (
          <Content value="manifest-about">
            <Information />
          </Content>
        )}
        {/* {renderSupplementing &&
          resources &&
          resources.map((resource) => {
            return (
              <Content key={resource.id} value={resource.id as string}>
                <Resource resource={resource} />
              </Content>
            );
          })} */}

        {renderAnnotation &&
          annotationResources &&
          annotationResources.map((annotationPage) => {
            return (
              <Content key={annotationPage.id} value={annotationPage.id}>
                <AnnotationPage annotationPage={annotationPage} />
              </Content>
            );
          })}
      </Scroll>
    </Wrapper>
  );
};

export default InformationPanel;
