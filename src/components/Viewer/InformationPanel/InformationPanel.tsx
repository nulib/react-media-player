import {
  Content,
  List,
  Scroll,
  Trigger,
  Wrapper,
} from "src/components/Viewer/InformationPanel/InformationPanel.styled";
import React, { useEffect, useState } from "react";

import Information from "src/components/Viewer/InformationPanel/About/About";
import { Label } from "src/components/Primitives";
import { LabeledResource } from "src/hooks/use-iiif/getSupplementingResources";
import { LabeledClip} from "src/hooks/use-iiif/getSupplementingClips";
import Resource from "src/components/Viewer/InformationPanel/Resource";
import Clip from "src/components/Viewer/InformationPanel/Clip";
import { useViewerState } from "src/context/viewer-context";

interface NavigatorProps {
  activeCanvas: string;
  resources?: Array<LabeledResource>;
  clips?: Array<LabeledClip>;
}

export const InformationPanel: React.FC<NavigatorProps> = ({
  activeCanvas,
  resources,
  clips,
}) => {
  const viewerState: any = useViewerState();
  const { configOptions } = viewerState;
  const { informationPanel } = configOptions;

  const [activeResource, setActiveResource] = useState<string>();

  const renderAbout =
    informationPanel?.renderAbout || configOptions?.renderAbout;
  const renderSupplementing = informationPanel?.renderSupplementing;
  const renderClips = informationPanel?.renderClips;

  useEffect(() => {
    if (renderAbout) {
      setActiveResource("manifest-about");
    } else if (resources && resources?.length > 0 && !renderAbout) {
      setActiveResource(resources[0].id);
    }
  }, [activeCanvas, resources]);

  const handleValueChange = (value: string) => {
    setActiveResource(value);
  };

  if (!resources) return <></>;

  return (
    <Wrapper
      data-testid="information-panel"
      defaultValue={activeResource}
      onValueChange={handleValueChange}
      orientation="horizontal"
      value={activeResource}
    >
      <List aria-label="select chapter" data-testid="information-panel-list">
        {renderAbout && <Trigger value="manifest-about">About</Trigger>}
        {renderSupplementing &&
          resources &&
          resources.map(({ id, label }) => (
            <Trigger key={id} value={id as string}>
              <Label label={label} />
            </Trigger>
          ))}
        {renderClips &&
          clips &&
          clips.map(({ id, label }) => (
            <Trigger key={id} value={id as string}>
              <Label label={label} />
            </Trigger>
          ))}
      </List>
      <Scroll>
        {renderAbout && (
          <Content value="manifest-about">
            <Information />
          </Content>
        )}
        {renderSupplementing &&
          resources &&
          resources.map((resource) => {
            return (
              <Content key={resource.id} value={resource.id as string}>
                <Resource resource={resource} />
              </Content>
            );
          })}
        {renderClips &&
          clips &&
          clips.map((clip) => {
            return (
              <Content key={clip.id} value={clip.id as string}>
                <Clip clip={clip} />
              </Content>
            );
          })}
      </Scroll>
    </Wrapper>
  );
};

export default InformationPanel;
