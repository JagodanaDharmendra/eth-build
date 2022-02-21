import { IDescriptionPanelProps } from "..";
import { TertiaryButton } from "../../..";

function DescriptionPanel({
  title,
  points,
  href,
  buttonTitle = "Build",
}: IDescriptionPanelProps) {
  return (
    <div className="flex flex-col w-full justify-start items-start p-4 justify-items-center">
      <div className="mb-4 text-4xl font-semibold">{title}</div>
      <ul className="mt-4 text-md md:text-lg list-disc list-inside space-y-2">
        {points.map((point, index) => {
          return (
            <li key={index} className="text-justify">
              {point}
            </li>
          );
        })}
      </ul>
      <a href={href} className="flex w-full mt-6">
        <TertiaryButton onClick={() => {}} styleClassNames="flex-1">
          <span>🔧</span>
          <span>{buttonTitle}</span>
        </TertiaryButton>
      </a>
    </div>
  );
}

export default DescriptionPanel;
