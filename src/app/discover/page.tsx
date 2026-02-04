import Link from "next/link";

export default function Summary() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Link
          href="/discover/breakdown"
          className="inline-flex h-12 items-center justify-center rounded-full 
          bg-[#10131a] px-6 text-sm font-semibold uppercase tracking-[0.22em] 
          text-white transition hover:translate-y-[-2px] hover:bg-black"
        >
          Go to breakdown
        </Link>
      </div>
    </div>
  );
}
