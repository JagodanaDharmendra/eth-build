import classNames from "classnames";
import { IPropsVideoDescriptionPanel } from ".";
import { Container } from "..";
import { Video, DescriptionPanel } from "./components";

function VideoDescriptionPanel({
  videoData,
  DescriptionPanelData,
  reverse = false,
  bgColor,
}: IPropsVideoDescriptionPanel) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className={classNames(reverse && "md:order-last")}>
            <DescriptionPanel {...DescriptionPanelData} />
          </div>
          <Video {...videoData} />
        </div>
      </Container>
    </div>
  );
}

export default VideoDescriptionPanel;
