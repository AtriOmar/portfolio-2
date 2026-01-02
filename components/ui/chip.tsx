interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="px-2 py-1 border border-zinc-700/50 group-hover:border-zinc-600/50 rounded-md bg-zinc-800/50 group-hover:bg-zinc-800 font-medium text-muted-foreground text-xs transition-all duration-300">
      {content}
    </div>
  );
}
