import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

// Components
import CategorySelect from "../components/selects/CategorySelect";
import MeetingPreviewCard from "../components/cards/MeetingPreviewCard";

// Dummy Data
import data from "../dummy_data/dummy_data.json";

// Types
import type { Category } from "../type/HomePageType";
import type { MeetingPreviewDataType } from "../type/HomePageType";

// Icon
import { NotebookPen, Gamepad2, Utensils, HeartPulse } from "lucide-react";

const OPTIONS = [
  {
    value: "study",
    label: "공부",
    icon: <NotebookPen size={25} className="text-red-500" />,
  },
  {
    value: "game",
    label: "게임",
    icon: <Gamepad2 size={25} className="text-purple-500" />,
  },
  {
    value: "meal",
    label: "식사",
    icon: <Utensils size={25} className="text-orange-500" />,
  },
  {
    value: "exercise",
    label: "운동",
    icon: <HeartPulse size={25} className="text-green-500" />,
  },
];

function HomePage() {
  const [searchCategory, setSearchCategory] = useState<Category>("study");
  const [meetingCategory, setMeetingCategory] = useState<Category>("study");
  const [meetingPreviewData, setMeetingPreviewData] = useState<
    MeetingPreviewDataType[]
  >([]);

  useEffect(() => {
    setMeetingPreviewData(data as MeetingPreviewDataType[]);
  }, []);

  return (
    <>
      {/* Introduce */}
      <div
        className={[
          "flex flex-wrap w-full px-0 py-10 text-3xl font-bold",
          "lg:flex-row lg:justify-center lg:px-20 lg:py-20 lg:text-4xl",
        ].join(" ")}
      >
        <span>UNILINK에서&nbsp;</span>
        <span>어떤 모임을 찾고 계신가요?</span>
      </div>

      {/* Search */}
      <div
        className={[
          "flex items-center w-full rounded-full border border-stone-950/25 p-2 mb-10 divide-x divide-stone-900",
          "lg:max-w-200 lg:mx-auto lg:mb-20", // Responsive
          "dark:border-stone-100/25 dark:divide-stone-100/25", // Dark
        ].join(" ")}
      >
        {/* Category Select */}
        <div className="px-2.5">
          <CategorySelect
            options={OPTIONS}
            value={searchCategory}
            onChange={setSearchCategory}
          />
        </div>

        {/* Search Input */}
        <div className="pl-5 flex-1">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="검색어를 입력하세요"
          />
        </div>
      </div>

      {/* Meetings List */}
      <div className="flex flex-col">
        {/* Select Category */}
        <span className="text-3xl font-semibold mb-5">모임 찾아보기</span>
        <div className={["flex gap-5"].join(" ")}>
          {OPTIONS.map((opt) => {
            const isActive = meetingCategory === opt.value;

            return (
              <button
                key={opt.value}
                className={[
                  "px-2.5 py-0.5 rounded-full border",
                  isActive
                    ? "border-red-500 dark:border-blue-500"
                    : "border-stone-950/25 dark:border-stone-50/25",
                ].join(" ")}
                onClick={() => setMeetingCategory(opt.value as Category)}
              >
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Flat List */}
        <Marquee speed={100} className="py-10">
          {meetingPreviewData.map((data) => {
            const isActive = meetingCategory === data.category;

            return <>{isActive && <MeetingPreviewCard meeting={data} />}</>;
          })}
        </Marquee>

        {/* 모임 전체 보기 */}
        <div className="flex flex-wrap gap-2.5">
          {OPTIONS.map((opt) => {
            return (
              <button
                className={[
                  "flex flex-1 flex-col min-w-50 border border-stone-950/25 rounded-xl p-5 transition-colors",
                  "dark:border-stone-50/25 dark:hover:border-blue-500",
                  "hover:border-red-500", // Hover
                ].join(" ")}
              >
                <div className="flex flex-1">{opt.icon}</div>
                <div className="flex flex-1 justify-end-safe">
                  <span className="text-lg font-semibold">{opt.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
