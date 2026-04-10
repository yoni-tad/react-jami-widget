import { useEffect } from "react";

let currentScript: HTMLScriptElement | null = null;
let isScriptLoaded = false;

export function useJamiScript(
  props: Record<string, string | undefined>,
  onLoad?: () => void,
  onError?: () => void,
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (currentScript) {
      currentScript.remove();
      currentScript = null;
    }

    const existing = document.querySelector(
      'script[src="https://jami.bio/widget.js"]',
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = "https://jami.bio/widget.js";
    script.async = true;

    Object.entries(props).forEach(([key, value]) => {
      if (value) {
        script.setAttribute(`data-${key}`, value);
      }
    });

    script.onload = () => {
      isScriptLoaded = true;
      onLoad?.();
    };

    script.onerror = () => {
      onError?.();
    };

    document.body.appendChild(script);
    currentScript = script;

    return () => {};
  }, [props.id, props.color, props.text, props.emoji, props.position]);
}
