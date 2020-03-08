import { Document } from 'mongoose';

interface BodyField {
  key: string;
  type: string;
}

export interface Template extends Document {
  readonly _id: string;
  readonly name: string;
  readonly path_to_issues: string;
  readonly title_fields: string[];
  readonly body_fields: BodyField[];
  readonly compare_fields: string[];
  readonly merge_fields: string[];
  readonly title_pattern: string;
  readonly subtitle_pattern: string;
  readonly tags: string[];
}