export type LoadingProps = {
  text?: string;
};

export default function Loading({ text }: LoadingProps) {
  return text ? (
    <div className="flex gap-1.5 place-content-center">
      <span className="loading loading-spinner"></span>
      <span>{text}</span>
    </div>
  ) : (
    <span className="loading loading-spinner"></span>
  );
}
