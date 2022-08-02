import data, { Data } from "../../others/data";
import { useState } from "react";
import ImageContainer from "./subComponents/ImageContainer";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Works = () => {
  const { t } = useTranslation("works");
  interface Filter {
    product: string[];
    design: string[];
    ennoblement: string[];
  }

  const [filter, setFilter] = useState<Filter>({
    product: [],
    design: [],
    ennoblement: [],
  });
  const [input, setInput] = useState<string>("");

  const [opened, setOpened] = useState<string[]>([]);

  const [mOpened, setMOpened] = useState<boolean>(false);

  interface Filters {
    title: string;
    opts: string[];
  }

  //options
  const [options] = useState<Filters[]>([
    {
      title: "Product",
      opts: [
        "corporate",
        "image",
        "interactive",
        "wraping",
        "packaging",
        "point of sale",
      ],
    },
    {
      title: "Design",
      opts: [
        "ambitious",
        "classic",
        "contemporary",
        "recycled",
        "minimalist",
        "pop",
      ],
    },
    {
      title: "Ennoblement",
      opts: ["hot foil stamping", "embossing", "laser cut", "laser-gravur"],
    },
  ]);

  const [fData, setFData] = useState<Data[]>(data);

  const filterData = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    let arr = input
      ? data.filter((e) => e.ref.toLowerCase().includes(input.toLowerCase()))
      : data;

    console.log(arr);

    let fList: string[] = [];
    let newArr: Data[] = [];

    Object.keys(filter).forEach((el) => {
      fList = [...fList, ...filter[el as keyof Filter]];
    });

    if (fList.length < 1 && input.length < 1) {
      setFData(data);
      return;
    }

    if (Array.isArray(arr)) {
      if (fList.length) {
        newArr = arr.filter((e) => {
          return [...e.products, ...e.filters].some((value) =>
            fList.includes(value)
          );
        });
      } else {
        newArr = arr;
      }
    }

    setFData(newArr);
  };

  return (
    <div className="px-[15px] md:px-[30px]">
      <span className="before:content-['–'] mb-8 block text-lg">
        {t("span")}
      </span>
      <p className="text-sm mb-4">
        {t("search")}:{" "}
        <span
          className="underline lg:hidden cursor-pointer select-none"
          onClick={() => {
            setMOpened((prev) => !prev);
          }}
        >
          {t("filters")}
        </span>
      </p>
      <div
        className={`relative max-h-0 z-40 overflow-hidden lg:overflow-visible lg:max-h-32 lg:h-32 lg:pb-9 flex flex-col lg:flex-row flex-wrap justify-items-start transition-[max-height] duration-700 ease-in-out ${
          mOpened && "max-h-[2000px]"
        }`}
      >
        {options.map((e, i) => (
          <div
            key={i}
            className="inline-block lg:px-5 pt-2 lg:min-w-[240px] relative lg:bg-def-white lg:shadow-def lg:rounded-3xl lg:mr-9 mb-3 lg:mb-3 self-start"
          >
            <p
              className={`text-2xl lg:inline-block lg:mr-11 cursor-pointer lg:before:content-[''] lg:before:w-3 before:h-0.5 before:absolute before:right-6 before:bg-black-1 before:block before:rounded-sm before:bottom-5 lg:after:content-[''] lg:after:w-3 after:h-0.5  after:absolute after:right-4  after:bg-black-1 after:block after:rounded-sm after:bottom-5 ${
                !opened.includes(e.title)
                  ? "before:rotate-45 after:-rotate-45"
                  : "before:-rotate-45 after:rotate-45"
              } before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out`}
              onClick={() => {
                setOpened((prev) => {
                  if (prev.includes(e.title))
                    return prev.filter((k) => k !== e.title);
                  else return [e.title, ...prev];
                });
              }}
            >
              {t(e.title.toLowerCase())}
            </p>
            <div
              className={`lg:mt-2 w-[calc(100vw-30px)] lg:w-auto m-0 lg:mx-auto transition-all duration-1000 ease-out flex lg:block overflow-auto lg:overflow-hidden ${
                !opened.includes(e.title)
                  ? "lg:max-h-[1px]"
                  : "lg:max-h-[1800px]"
              }`}
            >
              {e.opts.map((el, j) => (
                <button
                  key={j}
                  type="button"
                  className={` whitespace-nowrap block my-4 mr-4 text-[15px] py-[6px] px-4 cursor-pointer border-[1px] border-black-1 rounded-full hover:bg-black-1 hover:text-white-1 hover:shadow-[0_3px_5px_#ccc] first-letter:capitalize ${
                    filter[e.title.toLowerCase() as keyof Filter].includes(
                      el
                    ) &&
                    "after:content-['x'] after:inline after:ml-3 bg-black-1 text-white-1"
                  } `}
                  onClick={() => {
                    setFilter((prev) => {
                      const arr = prev[e.title.toLowerCase() as keyof Filter];
                      let filArr =
                        arr && arr.includes(el)
                          ? arr.filter((k: string) => k !== el)
                          : [el, ...arr];
                      return {
                        ...prev,
                        [e.title.toLowerCase() as keyof Filter]: filArr,
                      };
                    });
                  }}
                >
                  {t(el.toLowerCase())}
                </button>
              ))}

              <p
                className="hidden lg:block mt-9 mb-6 underline cursor-pointer text-lg leading-[11px]"
                onClick={() => {
                  filterData();
                  setOpened([]);
                }}
              >
                {t("view")}
              </p>
            </div>
          </div>
        ))}
        <form
          className="flex-1 self-start flex justify-end"
          onSubmit={filterData}
        >
          <input
            className="w-full lg:w-auto bg-[url('/images/search.svg')] lg:min-w-[240px] bg-def-white bg-no-repeat bg-[1.2rem_center] shadow-[inset_2px_2px_3px_#CCC,inset_-2px_-2px_3px_#FFF] rounded-3xl py-2 pr-7 pl-12 mt-2 placeholder:text-[#6c757d] outline-none"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder={t("ref")}
          />
        </form>
        <button
          className="lg:hidden my-6 self-start inline-block shadow-def hover:shadow-hov text-xl transition duration-500 ease-out py-2 px-7 rounded-full"
          onClick={() => {
            filterData();
            setMOpened(false);
          }}
        >
          {t("view")}
        </button>
      </div>
      {fData.length < 1 ? (
        <div className="min-h-[350px] ml-4 text-lg">
          <p>{t("noRes")}</p>
        </div>
      ) : (
        <ImageContainer data={fData} />
      )}

      {fData.length > 0 && (
        <Link href="/mood">
          <a className="fixed left-1/2 -translate-x-2/4 top-[80%] my-6 bg-def-white self-start inline-block shadow-def hover:shadow-hov text-2xl transition duration-500 ease-out py-2 px-7 rounded-full whitespace-nowrap">
            ❤️ {t("mood")}
          </a>
        </Link>
      )}
    </div>
  );
};

export default Works;
