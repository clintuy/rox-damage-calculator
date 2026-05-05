import { formatDamage } from "../utils/formatDamage";

type Props = {
  baseDmg: number;
  elementFactor: number;
  coreDmg: number;
  finalDmg: number;
};

export default function DamageResult({ finalDmg = 0 }: Props) {
  return (
    <h1 className="font-bold p-5">Final Damage: {formatDamage(finalDmg)}</h1>
  );
}
