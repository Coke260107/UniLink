import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

// Types
import type { Category } from "../../type/HomePageType";

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value: string;
  onChange: (value: Category) => void;
};

export default function CategorySelect({ options, value, onChange }: Props) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      {/* Trigger (상단 버튼) */}
      <Select.Trigger
        className={[
          "inline-flex items-center-safe",
          "gap-2 px-2 py-1",
          "rounded-full",
          "font-semibold",
          "outline-none",
        ].join(" ")}
        aria-label="Category"
      >
        <Select.Value />
        <Select.Icon className="flex items-center-safe">
          <ChevronDown className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>

      {/* Dropdown */}
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={16}
          alignOffset={-8}
          className={[
            "z-50 min-w-20 overflow-hidden",
            "rounded-xl border border-stone-700/60 bg-stone-100 shadow-xl",
            "dark:border-stone-700/60 dark:bg-stone-900",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          ].join(" ")}
        >
          <Select.Viewport className="py-2">
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className={[
                  "relative mx-2 flex cursor-pointer select-none justify-center-safe items-center-safe rounded-xl px-3 py-2 text-sm",
                  "outline-none",
                  "text-stone-950/50 dark:text-stone-50/50",
                  "data-highlighted:bg-stone-200 dark:data-highlighted:bg-stone-800",
                  " data-[state=checked]:font-bold data-[state=checked]:text-stone-950 dark:data-[state=checked]:text-stone-50",
                ].join(" ")}
              >
                <Select.ItemText>
                  <span>{opt.label}</span>
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
