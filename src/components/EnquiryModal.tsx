import { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { vehicles } from '@/data/vehicles';

interface Props {
  open: boolean;
  onClose: () => void;
  presetVehicleId?: string;
}

export function EnquiryModal({ open, onClose, presetVehicleId }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    vehicle_id: presetVehicleId ?? '',
    message: '',
  });

  useEffect(() => {
    if (open) {
      setDone(false);
      setError(null);
      setForm((f) => ({ ...f, vehicle_id: presetVehicleId ?? f.vehicle_id }));
    }
  }, [open, presetVehicleId]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const selectedVehicle = vehicles.find((v) => v.id === form.vehicle_id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        vehicle_id: form.vehicle_id || null,
        vehicle_name: selectedVehicle
          ? `${selectedVehicle.brand} ${selectedVehicle.model}`
          : null,
        message: form.message || null,
      };
      const { error: insertError } = await supabase.from('enquiries').insert(payload);
      if (insertError) throw insertError;
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg animate-scale-in">
        <div className="glass-strong max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-white">Send an Enquiry</h3>
              <p className="text-xs text-ink-300">
                Tell us what you&apos;re looking for — we&apos;ll get back to you.
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-200 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {done ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
              <h4 className="mt-4 font-display text-xl font-bold text-white">Enquiry sent!</h4>
              <p className="mt-2 text-sm text-ink-200">
                Thanks {form.full_name.split(' ')[0] || 'there'} — our sales team will reach out
                shortly.
              </p>
              <button onClick={onClose} className="btn-ghost mt-6">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="eq-name" className="label-field">Full Name</label>
                  <input
                    id="eq-name"
                    required
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="eq-phone" className="label-field">Phone Number</label>
                  <input
                    id="eq-phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input-field"
                    placeholder="+91 ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="eq-email" className="label-field">Email</label>
                <input
                  id="eq-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="eq-vehicle" className="label-field">Vehicle of Interest</label>
                <select
                  id="eq-vehicle"
                  value={form.vehicle_id}
                  onChange={(e) => setForm({ ...form, vehicle_id: e.target.value })}
                  className="input-field"
                >
                  <option value="">Any vehicle</option>
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.brand} {v.model} ({v.type})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="eq-message" className="label-field">Message</label>
                <textarea
                  id="eq-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-field min-h-[100px] resize-none"
                  placeholder="I'd like to know more about..."
                />
              </div>

              {error && (
                <p className="rounded-xl border border-crimson-500/30 bg-crimson-500/10 px-4 py-3 text-sm text-crimson-500">
                  {error}
                </p>
              )}

              <button type="submit" disabled={submitting} className="btn-primary w-full">
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
