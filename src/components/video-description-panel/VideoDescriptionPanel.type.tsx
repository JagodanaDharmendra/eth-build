import { IDescriptionPanelProps, IVideoProps } from "./components";

export default interface IPropsVideoDescriptionPanel {
  videoData: IVideoProps;
  DescriptionPanelData: IDescriptionPanelProps;
  reverse?: boolean;
  bgColor: string;
  whiteText: boolean;
}
