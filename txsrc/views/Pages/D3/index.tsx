import React, { useRef, useEffect, useState } from "react";
import { select, Selection } from "d3-selection";
import { draw } from "./draw";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnnualrainData,
  fetchSlumsData,
  fetchPopulationData,
  fetchMonthData,
} from "../../../redux/slices/fetchSlice";
import { RootState } from "../../../store";

function D3(): React.ReactElement {
  const {
    dataStore: { annualrain, slums, population, months, refresh },
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

  useEffect(() => {
    if (annualrain.state === "empty" || annualrain.state === "rejected")
      dispatch(fetchAnnualrainData());
    if (slums.state === "empty" || slums.state === "rejected")
      dispatch(fetchSlumsData());
    if (population.state === "empty" || population.state === "rejected")
      dispatch(fetchPopulationData());
    if (months.state === "empty" || months.state === "rejected")
      dispatch(fetchMonthData());
  }, [
    refresh,
    annualrain.state,
    slums.state,
    population.state,
    months.state,
    dispatch,
  ]);

  useEffect(() => {
    annualrain.state === "fulfilled" &&
      slums.state === "fulfilled" &&
      population.state === "fulfilled" &&
      months.state === "fulfilled" &&
      setSVGSetupTrigger(true);
  }, [annualrain.state, slums.state, population.state, months.state]);

  useEffect(() => {
    !svg && svgSetupTrigger && setSvg(select(svgRef.current));
    if (annualrain.data.length > 0 && svg) {
      draw(svg, svgRef, annualrain, slums, population, months);
    }
  }, [svg, svgSetupTrigger, annualrain, slums, population, months]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <svg style={{ width: "100%", height: "100%" }} ref={svgRef} />
    </div>
  );
}

export default D3;
