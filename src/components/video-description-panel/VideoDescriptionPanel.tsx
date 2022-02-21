import classNames from "classnames";
import { IPropsVideoDescriptionPanel } from ".";
import { Container } from "..";
import { Video, DescriptionPanel } from "./components";

function VideoDescriptionPanel({
  videoData,
  descriptionPanelData: DescriptionPanelData,
  reverse = false,
  bgColor,
  whiteText = false,
}: IPropsVideoDescriptionPanel) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={classNames("py-4 px-2")}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className={classNames(
              reverse && "md:order-last",
              whiteText ? "text-white" : "text-black"
            )}
          >
            <DescriptionPanel {...DescriptionPanelData} />
          </div>
          <Video {...videoData} />
        </div>
      </Container>
    </div>
  );
}

export default VideoDescriptionPanel;
