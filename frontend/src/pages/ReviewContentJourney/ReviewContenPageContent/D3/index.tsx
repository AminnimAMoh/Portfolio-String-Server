import React, { useRef, useMemo, useEffect, useState, memo } from "react";
import { select, Selection } from "d3-selection";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnnualrainData,
  fetchSlumsData,
  fetchPopulationData,
  fetchMonthData,
  fetchMap,
} from "@hooks/useRootInfo/redux/slices/fetchSlice";
import { RootState } from "@hooks/useRootInfo/store";

function D3(): React.ReactElement {
  const {
    dataStore: { annualrain, slums, population, months, mapJSON, refresh },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgSetupTrigger, setSVGSetupTrigger] = useState<boolean>(false);

  const [svg, setSvg] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  useMemo(() => {
    if (annualrain.state === "empty") dispatch(fetchAnnualrainData());
    if (slums.state === "empty") dispatch(fetchSlumsData());
    if (population.state === "empty") dispatch(fetchPopulationData());
    if (months.state === "empty") dispatch(fetchMonthData());
    if (mapJSON.state === "empty") dispatch(fetchMap());
  }, [
    refresh,
    JSON.stringify(annualrain.state),
    JSON.stringify(slums.state),
    JSON.stringify(population.state),
    JSON.stringify(months.state),
    JSON.stringify(mapJSON.state),
    dispatch,
  ]);

  useMemo(() => {
    annualrain.state === "fulfilled" &&
      slums.state === "fulfilled" &&
      population.state === "fulfilled" &&
      months.state === "fulfilled" &&
      mapJSON.state === "fulfilled" &&
      setSVGSetupTrigger(true);
  }, [
    JSON.stringify(annualrain.state),
    JSON.stringify(slums.state),
    JSON.stringify(population.state),
    JSON.stringify(months.state),
    JSON.stringify(mapJSON.state),
  ]);

  useEffect(() => {
    !svg && svgSetupTrigger && setSvg(select(svgRef.current));
    if (annualrain.data.length > 0 && svg) {
      import(/* webpackChunkName: 'D3-Draw' */ "./Draw").then(
        ({ default: Draw }) => {
          Draw(
            svg,
            svgRef,
            annualrain,
            slums,
            population,
            months,
            mapJSON.data
          );
        }
      );
    }
  }, [svg, svgSetupTrigger, annualrain, slums, population, months]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <svg style={{ width: "100%", height: "100%" }} ref={svgRef} />
    </div>
  );
}

export default memo(D3);
