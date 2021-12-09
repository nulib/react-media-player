import React, { useEffect, useState } from "react";
import OpenSeadragon, { Viewer } from "openseadragon";
import {
  IIIFExternalWebResource,
  ImageService,
} from "@hyperion-framework/types";
import { Navigator, Viewport, Wrapper } from "./ImageViewer.styled";
import Controls from "./Controls";

const ImageViewer: React.FC<IIIFExternalWebResource> = ({ service }) => {
  const [openSeadragonInstance, setOpenSeadragonInstance] = useState<Viewer>();
  const [imageService, setImageService] = useState<ImageService>();

  /**
   * Initiate OpenSeadragon
   */
  useEffect(() => {
    initOpenSeadragon();
    return () => {
      openSeadragonInstance?.destroy();
    };
  }, []);

  /**
   * Set IIIF image service from given content resource
   */
  useEffect(() => {
    if (Array.isArray(service))
      setImageService(service[0] as any as ImageService);
  }, [service]);

  /**
   * Loads tileSource of current canvas from IIIF image service
   */
  useEffect(() => {
    if (imageService) openSeadragonInstance?.open(imageService.id);
  }, [openSeadragonInstance, imageService]);

  /**
   * Set OpenSeadragon instance
   */
  function initOpenSeadragon() {
    const controls: object = {
      homeButton: "zoomReset",
      showFullPageControl: false,
      zoomInButton: "zoomIn",
      zoomOutButton: "zoomOut",
    };

    const navigator: object = {
      showNavigator: true,
      navigatorBorderColor: "transparent",
      navigatorId: "openseadragon-navigator",
    };

    setOpenSeadragonInstance(
      OpenSeadragon({
        id: "openseadragon-viewport",
        loadTilesWithAjax: true,
        ...controls,
        ...navigator,
      }),
    );
  }

  return (
    <Wrapper data-testid="image-viewer">
      <Controls />
      <Navigator id="openseadragon-navigator" />
      <Viewport id="openseadragon-viewport" />
    </Wrapper>
  );
};

export default ImageViewer;
