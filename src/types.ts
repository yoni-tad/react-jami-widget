export type JamiWidgetProps = {
  id: string;
  color?: string;
  text?: string;
  emoji?: string;
  position?: "left" | "right";
  enabled?: boolean;
  onLoad?: () => void;
  onError?: () => void;
};
