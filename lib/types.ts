// Types describing the normalized FedRAMP Consolidated Rules data.

export type Force = "MUST" | "MUST NOT" | "SHOULD" | "SHOULD NOT" | "MAY" | string;
export type ApplType = "20x" | "Rev5";
export type ApplPath = "Program" | "Agency";
export type ClassLetter = "A" | "B" | "C" | "D";
export type DatasetKey = "FRD" | "FRR" | "KSI" | "CTL";

export interface UpdateEntry {
  date: string;
  comment: string;
}

export interface EffectiveDate {
  is?: string;
  current_status?: string;
  date?: {
    obtain?: string;
    maintain?: string;
    optional_adoption?: string;
    grace?: { default?: string; until_next_assessment?: boolean };
  };
}

export interface Applicability {
  types?: string[];
  paths?: string[];
  classes?: string[];
  affects?: string[];
}

export interface ClassVariant {
  class: ClassLetter;
  statement?: string;
  force?: Force;
  timeframe_type?: string;
  timeframe_num?: number;
  artifacts?: Record<string, string[]>;
  note?: string;
}

export interface NotificationRef {
  method?: string;
  target?: string;
  name?: string;
}

export interface SchemaRef {
  name?: string;
  url?: string;
}

export interface RuleExample {
  id?: string;
  key_tests?: string[];
  examples?: string[];
}

// A single normalized requirement (FRR) rule.
export interface Rule {
  id: string;
  family: string; // e.g. "AFC"
  familyName: string;
  type: string; // "all" | "20x" | "rev5"
  subset: string; // e.g. "FRP" | "CSO"
  subsetName?: string;
  name?: string;
  statement?: string;
  force?: Force;
  note?: string;
  notes?: string[];
  following_information?: string[];
  following_information_bullets?: string[];
  timeframe_type?: string;
  timeframe_num?: number;
  affects?: string[];
  terms?: string[];
  related?: string[];
  artifacts?: Record<string, string[]>;
  danger?: string;
  notification?: NotificationRef[];
  schema?: SchemaRef;
  reference?: string;
  reference_url?: string;
  corrective_actions?: string[];
  examples?: RuleExample[];
  rev5_controls_list?: string[];
  variesByClass?: ClassVariant[];
  updated?: UpdateEntry[];
}

export interface Subset {
  code: string;
  name: string;
  description?: string;
  applicability?: Applicability;
}

export interface RequirementFamily {
  code: string; // "AFC"
  name: string;
  webName: string;
  purpose?: string;
  status?: string;
  tag?: string;
  effective?: EffectiveDate;
  subsets: Subset[];
  rules: Rule[];
  ruleCount: number;
}

export interface Definition {
  id: string;
  term: string;
  definition: string;
  note?: string;
  tag?: string;
  alts?: string[];
  updated?: UpdateEntry[];
}

export interface Indicator {
  id: string;
  name: string;
  statement: string;
  controls: string[];
  terms?: string[];
  updated?: UpdateEntry[];
}

export interface KsiFamily {
  code: string;
  id: string;
  name: string;
  webName: string;
  status?: string;
  indicators: Indicator[];
}

export interface ControlParam {
  parameterId: string;
  value: string;
}

export interface ControlEntry {
  id: string; // "AC-20"
  family: string; // "AC"
  parameters: ControlParam[];
  guidance: string[];
  variesByClass?: { class: ClassLetter; parameters?: ControlParam[]; guidance?: string[] }[];
}

export interface ControlFamily {
  code: string; // "AC"
  controls: ControlEntry[];
}

export interface DatasetInfo {
  title: string;
  description: string;
  version: string;
  last_updated: string;
  default_artifacts?: Record<string, string[]>;
}

export interface FedRampData {
  info: DatasetInfo;
  definitions: Definition[];
  termToId: Record<string, string>; // term / alt -> definition id
  requirements: RequirementFamily[];
  ksi: KsiFamily[];
  controls: ControlFamily[];
  stats: {
    requirementFamilies: number;
    rules: number;
    definitions: number;
    ksiFamilies: number;
    indicators: number;
    controlFamilies: number;
    controls: number;
  };
}
