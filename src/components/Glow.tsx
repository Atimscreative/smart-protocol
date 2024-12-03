import { cn } from "@/lib/utils";

const Glow = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "z-0 h-[200px] w-[200px] rounded-full bg-smarty-200/70 blur-3xl",
        className,
      )}
    />
  );
};

export default Glow;
