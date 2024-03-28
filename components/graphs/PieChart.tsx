"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const PieChart = (props: any) => {
  return (
    <ResponsivePie
      data={props.data}
      margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      enableArcLinkLabels={false}
      enableArcLabels={false}
    />
  );
};
