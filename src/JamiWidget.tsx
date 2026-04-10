import type { JamiWidgetProps } from "./types";
import { useJamiScript } from "./useJamiScript";

export function JamiWidget({
  id,
  color,
  text,
  emoji,
  position,
  enabled = true,
  onLoad,
  onError,
}: JamiWidgetProps) {
  useJamiScript(
    {
      id,
      color,
      text,
      emoji,
      position,
    },
    onLoad,
    onError,
  );

  if (!enabled) return null;

  return null;
}
