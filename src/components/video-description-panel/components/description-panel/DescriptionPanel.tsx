import { IDescriptionPanelProps } from "..";

function DescriptionPanel({ title, points, buttons }: IDescriptionPanelProps) {
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
      <div className="flex w-full flex-col md:flex-row justify-between gap-1 md:gap-2 mt-6">
        {buttons}
      </div>
    </div>
  );
}

export default DescriptionPanel;
