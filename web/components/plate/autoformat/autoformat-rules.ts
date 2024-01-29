import { autoformatIndentLists } from './autoformat-indent-list';
import { autoformatMarks } from './autoformat-marks';

export const autoformatRules = [...autoformatIndentLists, ...autoformatMarks];
