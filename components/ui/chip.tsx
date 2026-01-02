interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="inline-block relative px-3 py-2 border border-border rounded-md bg-background font-sans font-medium text-primary text-xs align-baseline leading-none whitespace-nowrap select-none center">
      {content}
    </div>
  );
}
