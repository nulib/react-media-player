import React, { useEffect, useState } from "react";
import {
  ExternalResourceTypes,
  InternationalString,
  ManifestNormalized,
} from "@iiif/presentation-3";
import {
  getPaintingResource,
  getSupplementingResources,
} from "@/hooks/use-iiif";
import { useViewerState } from "@/context/viewer-context";
import { Wrapper } from "@/components/Viewer/Viewer.styled";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useBodyLocked } from "@/hooks/useBodyLocked";
import { media } from "@/stitches";
import * as Collapsible from "@radix-ui/react-collapsible";
import ViewerHeader from "@/components/Viewer/Header";
import ViewerContent from "@/components/Viewer/Content";
import { LabeledResource } from "@/hooks/use-iiif/getSupplementingResources";
import { IIIFExternalWebResource } from "@iiif/presentation-3";
import ErrorFallback from "@/components/Viewer/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

interface ViewerProps {
  manifest: ManifestNormalized;
  theme?: any;
}

const Viewer: React.FC<ViewerProps> = ({ manifest, theme }) => {
  /**
   * Viewer State
   */
  const viewerState: any = useViewerState();
  const { activeCanvas, informationExpanded, vault, configOptions } =
    viewerState;

  /**
   * Local state
   */
  const [isMedia, setIsMedia] = useState(false);
  const [isNavigator, setIsNavigator] = useState<boolean>(false);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState<boolean>(true);
  const [painting, setPainting] = useState<IIIFExternalWebResource | undefined>(
    undefined,
  );
  const [resources, setResources] = useState<LabeledResource[]>([]);

  /**
   * Hooks
   */
  const [isBodyLocked, setIsBodyLocked] = useBodyLocked(false);
  const isSmallViewport = useMediaQuery(media.sm);

  useEffect(() => {
    if (!isSmallViewport) {
      setIsNavigatorOpen(true);
      return;
    }
    setIsNavigatorOpen(false);
  }, [isSmallViewport]);

  useEffect(() => {
    if (!isSmallViewport) {
      setIsBodyLocked(false);
      return;
    }
    setIsBodyLocked(isNavigatorOpen);
  }, [isNavigatorOpen]);

  useEffect(() => {
    const painting = getPaintingResource(vault, activeCanvas);
    const resources = getSupplementingResources(
      vault,
      activeCanvas,
      "text/vtt",
    );
    if (painting) {
      setIsMedia(
        ["Sound", "Video"].indexOf(painting.type as ExternalResourceTypes) > -1
          ? true
          : false,
      );
      setPainting({ ...painting });
    }
    setResources(resources);
    setIsNavigator(resources.length !== 0);
  }, [activeCanvas]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Wrapper
        className={`${theme} clover-iiif`}
        data-body-locked={isBodyLocked}
        data-navigator={isNavigator}
        data-navigator-open={isNavigatorOpen}
      >
        <Collapsible.Root
          open={isNavigatorOpen}
          onOpenChange={setIsNavigatorOpen}
        >
          <ViewerHeader
            manifestLabel={manifest.label as InternationalString}
            manifestId={manifest.id}
          />
          <ViewerContent
            activeCanvas={activeCanvas}
            painting={painting as IIIFExternalWebResource}
            resources={resources}
            items={manifest.items}
            isAbout={configOptions.renderAbout}
            isMedia={isMedia}
            isInformation={informationExpanded}
            isNavigator={isNavigator}
            isNavigatorOpen={isNavigatorOpen}
          />
        </Collapsible.Root>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Viewer;
