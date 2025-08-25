
declare module "react-reveal/Fade" {
  import * as React from "react";

  interface FadeProps {
    children?: React.ReactNode;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    duration?: number;
    delay?: number;
    distance?: string;
    forever?: boolean;
  }

  const Fade: React.FC<FadeProps>;
  export default Fade;
}
// types/react-reveal.d.ts
