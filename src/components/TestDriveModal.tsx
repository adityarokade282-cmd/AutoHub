import { useEffect, useState } from 'react';
import { X, Calendar, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { vehicles } from '@/data/vehicles';

interface Props {
  open: boolean;
  onClose: () => void;
  presetVehicleId?: string;
}

const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'];

export function TestDriveModal({ open, onClose, presetVehicleId }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    vehicle_id: presetVehicleId ?? '',
    preferred_date: '',
    preferred_time: timeSlots[0],
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
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        message: form.message || null,
      };
      const { error: insertError } = await supabase
        .from('test_drive_bookings')
        .insert(payload);
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
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-crimson-600 text-white shadow-glow-sm">
                <Calendar className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Book a Test Drive</h3>
                <p className="text-xs text-ink-300">We&apos;ll confirm your slot within 24 hours.</p>
              </div>
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
              <h4 className="mt-4 font-display text-xl font-bold text-white">Request received!</h4>
              <p className="mt-2 text-sm text-ink-200">
                Thanks {form.full_name.split(' ')[0] || 'there'} — our team will call you on{' '}
                {form.phone} to confirm your test drive.
              </p>
              <button onClick={onClose} className="btn-ghost mt-6">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="td-name" className="label-field">Full Name</label>
                  <input
                    id="td-name"
                    required
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="td-phone" className="label-field">Phone Number</label>
                  <input
                    id="td-phone"
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
                <label htmlFor="td-email" className="label-field">Email</label>
                <input
                  id="td-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="td-vehicle" className="label-field">Vehicle of Interest</label>
                <select
                  id="td-vehicle"
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
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="td-date" className="label-field">Preferred Date</label>
                  <input
                    id="td-date"
                    required
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={form.preferred_date}
                    onChange={(e) => setForm({ ...form, preferred_date: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label-field">Preferred Time</label>
                  <select
                    value={form.preferred_time}
                    onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}
                    className="input-field"
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="td-message" className="label-field">Message (optional)</label>
                <textarea
                  id="td-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-field min-h-[80px] resize-none"
                  placeholder="Anything we should know?"
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
                    Booking...
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    Book Test Drive
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
