import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

export function ContactPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const { error: insertError } = await supabase.from('enquiries').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        vehicle_id: null,
        vehicle_name: null,
        message: form.message,
      });
      if (insertError) throw insertError;
      setDone(true);
      setForm({ full_name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact Us"
            title="We're here to help"
            subtitle="Visit our showroom, call us, or send a message — our team responds within 24 hours."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-4">
            <InfoCard
              icon={MapPin}
              title="Visit Us"
              lines={['14 Marine Drive, Nariman Point', 'Mumbai 400021, India']}
            />
            <InfoCard
              icon={Phone}
              title="Call Us"
              lines={['+91 80000 00000', '+91 22 4000 0000']}
              href="tel:+918000000000"
            />
            <InfoCard
              icon={Mail}
              title="Email Us"
              lines={['hello@autohub.example', 'sales@autohub.example']}
              href="mailto:hello@autohub.example"
            />
            <InfoCard
              icon={Clock}
              title="Opening Hours"
              lines={['Mon–Sat: 9:00 AM – 8:00 PM', 'Sun: 10:00 AM – 5:00 PM']}
            />
            <a
              href="https://wa.me/918000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-sm font-semibold text-white shadow-glow-sm transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="glass-strong rounded-3xl p-6 sm:p-8 lg:col-span-2">
            <h3 className="font-display text-xl font-bold text-white">Send us a message</h3>
            <p className="mt-1 text-sm text-ink-300">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {done ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/5 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                <p className="mt-4 font-display text-lg font-bold text-white">Message sent!</p>
                <p className="mt-1 text-sm text-ink-200">We&apos;ll be in touch within 24 hours.</p>
                <button onClick={() => setDone(false)} className="btn-ghost mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ct-name" className="label-field">Full Name</label>
                    <input
                      id="ct-name"
                      required
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-phone" className="label-field">Phone Number</label>
                    <input
                      id="ct-phone"
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
                  <label htmlFor="ct-email" className="label-field">Email</label>
                  <input
                    id="ct-email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="ct-message" className="label-field">Message</label>
                  <textarea
                    id="ct-message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field min-h-[140px] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-crimson-500/30 bg-crimson-500/10 px-4 py-3 text-sm text-crimson-500">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="AUTOHUB location"
            src="https://www.google.com/maps?q=Marine+Drive+Mumbai&output=embed"
            className="h-[400px] w-full grayscale invert-[0.9] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ElementType;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="glass card-hover rounded-2xl p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500/20 to-crimson-500/10 text-ember-400">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="font-display text-base font-bold text-white">{title}</h4>
      </div>
      <div className="mt-3 space-y-0.5">
        {lines.map((l) => (
          <p key={l} className="text-sm text-ink-100">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
