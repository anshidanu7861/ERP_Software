import React from "react";

function Pagination({ limit, skip, total, increasOrDecreasSkip, updateSkip }) {
  return (
    <div className="flex flex-wrap gap-[10px] items-center justify-between">
      <span className="text-[13px] text-darkTextColor">
        Show {skip * limit + 1} to {(skip + 1) * limit} of {total} entries
      </span>
      <div className="flex items-center gap-[5px]">
        <button
          className="px-[10px] h-[32px] font-[500]  text-[13px] text-darkTextColor  disabled:cursor-not-allowed bg-transparent border text-textColor hover:bg-darkGrayColor hover:text-black disabled:hover:bg-[#fff]"
          onClick={() => increasOrDecreasSkip(-1)}
          disabled={skip === 0}
        >
          Previus
        </button>
        {Array.from({
          length: total <= 10 ? 1 : Math.ceil(total / limit),
        }).map((_, index) => {
          const numberOfButtons = Math.ceil(total / limit);

          if (
            numberOfButtons <= 5 ||
            index === skip ||
            index === numberOfButtons ||
            index === 0 ||
            skip + 1 === index
          ) {
            return (
              <button
                className={
                  "h-[32px] min-w-[32px] px-[10px] text-darkTextColor  " +
                  (skip === index
                    ? "font-medium  bg-myblue text-white rounded-full"
                    : "bg-transparent text-textColor font-normal border  hover:bg-[#f3f6f9] ")
                }
                key={index}
                onClick={() => updateSkip(index)}
              >
                {index + 1}
              </button>
            );
          }

          if (
            (skip + 2 !== numberOfButtons - 1 && skip + 2 === index) ||
            (skip - 1 !== 0 && skip - 1 === index)
          ) {
            return (
              <button
                key={index}
                className="h-[32px] min-w-[32px] px-[10px] text-darkTextColor "
              >
                ...
              </button>
            );
          }

          return <></>;
        })}
        <button
          className="px-[10px] h-[32px] font-[500] text-darkTextColor  text-[13px] disabled:cursor-not-allowed bg-transparent border text-textColor hover:bg-darkGrayColor hover:text-black disabled:hover:bg-[#fff]"
          onClick={() => increasOrDecreasSkip(1)}
          disabled={(skip + 1) * limit >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
