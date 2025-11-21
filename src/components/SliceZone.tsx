import React from "react";
import { Slice } from "@/data";

type SliceZoneProps = {
  slices: Slice[];
  components: Record<string, React.ComponentType<any>>;
};

export default function SliceZone({ slices, components }: SliceZoneProps) {
  return (
    <>
      {slices.map((slice, index) => {
        const Component = components[slice.slice_type];
        if (Component) {
          return <Component slice={slice} key={slice.id || index} />;
        }
        return null;
      })}
    </>
  );
}

