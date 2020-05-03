export default function percent(value?: number, base?: number) {
  return !value || !base ? 0 : Math.round((value / base) * 100) / 100;
}
