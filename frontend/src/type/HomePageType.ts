// Category Type
export type Category = "study" | "game" | "exercise" | "meal";

// Meeting Card Type
export type MeetingPreviewDataType = {
  id: number;
  title: string;
  category: Category;
  curMember: number;
  maxMember: number;
  expireAt: string;
};
