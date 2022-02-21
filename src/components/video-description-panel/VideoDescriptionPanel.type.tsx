import { IDescriptionPanelProps, IVideoProps } from "./components";

export default interface IPropsVideoDescriptionPanel {
  videoData: IVideoProps;
  descriptionPanelData: IDescriptionPanelProps;
  reverse?: boolean;
  bgColor: string;
  whiteText: boolean;
}
