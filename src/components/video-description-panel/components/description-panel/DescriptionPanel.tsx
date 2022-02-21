import { IDescriptionPanelProps } from "..";

function DescriptionPanel({ title, points, buttons }: IDescriptionPanelProps) {
  return (
    <div className="flex flex-col w-full justify-start items-start p-4 justify-items-center">
      <h1 className="flex w-full md:mb-4 text-xl md:text-4xl font-semibold text-center md:text-start items-center md:items-start justify-center md:justify-start uppercase">
        {title}
      </h1>
      <ul className="mt-4 list-disc list-inside space-y-2">
        {points.map((point, index) => {
          return (
            <li
              key={index}
              className="md:text-justify text-xs md:text-lg text-gray"
            >
              {point}
            </li>
          );
        })}
      </ul>
      <div className="flex w-full flex-col md:flex-row justify-between gap-2 md:gap-4 mt-6">
        {buttons}
      </div>
    </div>
  );
}

export default DescriptionPanel;
