export interface IFromRow {
  type?: string;
  name?: string;
  value?: string | number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
}
