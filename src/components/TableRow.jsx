export const TableRow = ({ factor, webflow, customCode, isHeader = false }) => {
  const baseClasses =
    'flex-1 h-24 px-7 py-6 inline-flex flex-col justify-center items-start gap-2 overflow-hidden';

  return (
    <div className="self-stretch inline-flex justify-start items-start overflow-hidden">
      <div
        className={`${baseClasses} ${
          isHeader
            ? 'bg-Fedral-blue-950 border-b border-Neutrals-0'
            : 'bg-Fedral-blue-950 border-b border-Neutrals-0'
        }`}
      >
        <div className="inline-flex justify-center items-center gap-2">
          <div
            className={`text-4xl font-bold ${
              isHeader ? 'text-Neutrals-0' : 'text-Neutrals-0'
            }`}
          >
            {factor}
          </div>
        </div>
      </div>
      <div
        className={`${baseClasses} border-l border-r border-b border-Fedral-blue-950`}
      >
        <div className="inline-flex justify-center items-center gap-2">
          <div className="text-4xl ">{webflow}</div>
        </div>
      </div>
      <div className={`${baseClasses} border-b border-Fedral-blue-950`}>
        <div className="inline-flex justify-center items-center gap-2">
          <div className="text-4xl ">{customCode}</div>
        </div>
      </div>
    </div>
  );
};
