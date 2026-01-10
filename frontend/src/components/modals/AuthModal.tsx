import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

// Type
import type { SocialProvider } from "../../type/AuthType";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  //   onSelectProvider: (provider: SocialProvider) => void;
};

export default function AuthModal({
  isOpen,
  onClose,
}: //   onSelectProvider,
AuthModalProps) {
  const modalRoot = useMemo(() => {
    if (typeof document === "undefined") {
      console.log("여기 실행됨");
      return null;
    }
    return document.getElementById("modal-root");
  }, []);

  // ESC 닫기
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onclose]);

  if (!isOpen || !modalRoot) return null;

  const handleSelect = (provider: SocialProvider) => {
    // onSelectProvider?.(provider);
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close auth modal"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 min-w-80 rounded-2xl bg-stone-100 px-10 py-20 shadow-xl dark:bg-stone-900 dark:shadow-2xl dark:shadow-stone-950">
        {/* Header */}
        <div className="flex flex-wrap flex-col mb-8">
          <div className="flex flex-wrap flex-row text-2xl font-semibold text-stone-950 mb-2.5 dark:text-stone-50">
            <span>안녕하세요,&nbsp;</span>
            <span>UNILINK 입니다.</span>
          </div>
          <div className="flex flex-wrap flex-row text-sm text-stone-950/50 dark:text-stone-50/50">
            <span>원활한 서비스 이용을 위해&nbsp;</span>
            <span>로그인이 필요합니다.</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleSelect("kakao")}
            className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-black
                       bg-[#FEE500] hover:brightness-95
                       disabled:cursor-not-allowed disabled:opacity-50"
          >
            카카오로 계속하기
          </button>

          <button
            type="button"
            onClick={() => handleSelect("naver")}
            className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white
                       bg-[#03C75A] hover:brightness-95
                       disabled:cursor-not-allowed disabled:opacity-50"
          >
            네이버로 계속하기
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-stone-950/50 dark:text-stone-50/50 hover:underline"
          >
            닫기
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
