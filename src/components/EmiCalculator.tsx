import { useMemo, useState } from 'react';
import { Calculator, TrendingUp, Percent, Calendar } from 'lucide-react';
import { formatPrice } from '@/data/types';

interface Props {
  vehiclePrice: number;
  vehicleName?: string;
}

export function EmiCalculator({ vehiclePrice, vehicleName }: Props) {
  const [price, setPrice] = useState<number>(vehiclePrice);
  const [downPct, setDownPct] = useState<number>(20);
  const [tenure, setTenure] = useState<number>(60);
  const [rate, setRate] = useState<number>(9.5);

  const { emi, totalInterest, totalPayable, loanAmount } = useMemo(() => {
    const down = (price * downPct) / 100;
    const principal = Math.max(price - down, 0);
    const r = rate / 12 / 100;
    const n = tenure;
    const monthly = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    return {
      emi: monthly,
      totalInterest: total - principal,
      totalPayable: total + down,
      loanAmount: principal,
    };
  }, [price, downPct, tenure, rate]);

  return (
    <div className="glass-strong rounded-3xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-crimson-600 text-white shadow-glow-sm">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-white">EMI Calculator</h3>
          {vehicleName && <p className="text-xs text-ink-300">{vehicleName}</p>}
        </div>
      </div>

      <div className="space-y-5">
        <Slider
          label="Vehicle Price"
          icon={TrendingUp}
          value={price}
          min={50000}
          max={10000000}
          step={50000}
          format={formatPrice}
          onChange={setPrice}
        />
        <Slider
          label="Down Payment"
          icon={Percent}
          value={downPct}
          min={0}
          max={80}
          step={5}
          format={(v) => `${v}% · ${formatPrice((price * v) / 100)}`}
          onChange={setDownPct}
        />
        <Slider
          label="Loan Tenure"
          icon={Calendar}
          value={tenure}
          min={12}
          max={84}
          step={6}
          format={(v) => `${v} months (${(v / 12).toFixed(1)} yrs)`}
          onChange={setTenure}
        />
        <Slider
          label="Interest Rate"
          icon={Percent}
          value={rate}
          min={6}
          max={18}
          step={0.1}
          format={(v) => `${v.toFixed(1)}% p.a.`}
          onChange={setRate}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Result label="Monthly EMI" value={formatPrice(emi)} highlight />
        <Result label="Total Interest" value={formatPrice(totalInterest)} />
        <Result label="Total Payable" value={formatPrice(totalPayable)} />
      </div>
      <p className="mt-3 text-xs text-ink-300">
        Loan amount: {formatPrice(loanAmount)}. Figures are indicative; actual EMI depends on your
        bank&apos;s approval.
      </p>
    </div>
  );
}

function Slider({
  label,
  icon: Icon,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  icon: React.ElementType;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200">
          <Icon className="h-3.5 w-3.5 text-ember-400" />
          {label}
        </span>
        <span className="font-mono text-sm font-semibold text-white">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink-700 accent-ember-500"
      />
    </div>
  );
}

function Result({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 text-center ${
        highlight
          ? 'bg-gradient-to-br from-ember-500/20 to-crimson-500/10 border border-ember-400/30'
          : 'bg-white/[0.03] border border-white/10'
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-ink-200">{label}</p>
      <p className={`mt-1 font-display text-lg font-bold ${highlight ? 'gradient-text' : 'text-white'}`}>
        {value}
      </p>
    </div>
  );
}
