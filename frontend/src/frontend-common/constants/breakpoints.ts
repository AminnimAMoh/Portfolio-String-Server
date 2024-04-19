export enum Breakpoint {
    micro = 320,
    xxs = 375,
    xs = 414,
    s = 768,
    m = 1024,
    l = 1280,
  }
  
  export interface BreakpointSizes {
    micro?: string;
    xxs?: string;
    xs: string;
    s: string;
    m: string;
    l: string;
  }
  
  export interface DeferitBreakpoints extends BreakpointSizes {
    utils: {
      from: BreakpointSizes;
      to: BreakpointSizes;
    };
  }
  
  export const BreakpointUtils = {
    from: {
      micro: `(min-width: ${Breakpoint.micro}px)`,
      xxs: `(min-width: ${Breakpoint.xxs}px)`,
      xs: `(min-width: ${Breakpoint.xs}px)`,
      s: `(min-width: ${Breakpoint.s}px)`,
      m: `(min-width: ${Breakpoint.m}px)`,
      l: `(min-width: ${Breakpoint.l}px)`,
    },
    to: {
      xxs: `(max-width: ${Breakpoint.xxs}px)`,
      xs: `(max-width: ${Breakpoint.xs}px)`,
      s: `(max-width: ${Breakpoint.s}px)`,
      m: `(max-width: ${Breakpoint.m}px)`,
      l: `(max-width: ${Breakpoint.l}px)`,
    },
  };
  
  export const Media = {
    xs: `${BreakpointUtils.from.micro} and ${BreakpointUtils.to.xs}`,
    s: `${BreakpointUtils.from.xs} and ${BreakpointUtils.to.s}`,
    m: `${BreakpointUtils.from.s} and ${BreakpointUtils.to.m}`,
    l: `${BreakpointUtils.from.m} and ${BreakpointUtils.to.l}`,
    utils: BreakpointUtils,
  };
  