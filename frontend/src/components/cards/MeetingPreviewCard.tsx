import { UserRound } from "lucide-react";

// Type
import type { MeetingPreviewDataType } from "../../type/HomePageType";

type MeetingPreviewCardProps = {
  meeting: MeetingPreviewDataType;
};

export function getRemainingLabel(expireAt: string | Date): string {
  const target = expireAt instanceof Date ? expireAt : new Date(expireAt);

  const now = new Date();
  const diffMs = target.getTime() - now.getTime();

  // 이미 지난 경우
  if (diffMs <= 0) {
    return "마감";
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // 1일 이상
  if (diffDays >= 1) {
    return `D-${diffDays}`;
  }

  // 1시간 이상
  if (diffHours >= 1) {
    return `${diffHours}시간`;
  }

  // 1분 이상
  if (diffMinutes >= 1) {
    return `${diffMinutes}분`;
  }

  // 1분 미만
  return "곧 마감";
}

export default function MeetingPreviewCard({
  meeting,
}: MeetingPreviewCardProps) {
  return (
    <button
      key={meeting.id}
      className={[
        "flex flex-col min-w-50 px-5 py-2.5 mr-5 bg-stone-50 border border-stone-950/25 rounded-2xl shadow-md",
        "dark:bg-stone-950 dark:border-stone-50/25 dark:shadow-stone-950", // dark
        "hover:scale-105 transition-transform duration-300", // hover
      ].join(" ")}
    >
      <span className="text-left text-lg font-semibold ">{meeting.title}</span>
      <div className="flex flex-row items-center-safe gap-2.5 mb-10 ">
        <UserRound size={17.5} />
        <span className="text-sm">
          {meeting.curMember} / {meeting.maxMember}
        </span>
      </div>

      <div className="flex flex-row justify-end-safe items-center-safe">
        <span className="text-sm font-semibold">
          {getRemainingLabel(meeting.expireAt)}
        </span>
      </div>
    </button>
  );
}
