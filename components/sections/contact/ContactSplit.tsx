"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin, Phone, Clock, Building2 } from "lucide-react";
import { site, contactServices, type ContactService } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: ContactService | "";
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactSplit() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleChange = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const subject = encodeURIComponent(
      `Enquiry from ${form.name || "website"}${form.service ? ` — ${form.service}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "—"}`,
        `Company: ${form.company || "—"}`,
        `Service: ${form.service || "General"}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
    }, 600);
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="relative w-full overflow-hidden bg-[var(--color-ms-surface)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.32] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,191,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,191,94,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/45 to-transparent"
      />

      <div className="relative w-full px-6 py-20 md:px-10 md:py-28 lg:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
            <span className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
              The Engagement Brief
            </span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ms-gold)]" />
          </div>

          <h2
            id="contact-form-heading"
            className="mt-7 font-heading text-h2-fluid font-semibold uppercase leading-[1.06] tracking-[0.015em] text-white "
          >
            Tell us about{" "}
            <span className="bg-gradient-to-b from-[var(--color-ms-gold)] via-[#F6E5A6] to-[var(--color-ms-gold-muted)] bg-clip-text text-transparent">
              the work.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base">
            A senior engineer reads every brief. Expect a reply within one
            business day with proposed next steps and a discovery slot.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:gap-10">
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] p-7 md:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-ms-gold)]/55 to-transparent"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="email" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="+91 ..."
                  className={inputClass}
                />
              </Field>
              <Field label="Company" htmlFor="company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  placeholder="Organisation"
                  className={inputClass}
                />
              </Field>
              <Field label="Service Interest" htmlFor="service" className="sm:col-span-2">
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange("service")}
                  className={`${inputClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23D7BF5E%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {contactServices.map((s) => (
                    <option key={s} value={s} className="bg-[var(--color-ms-surface)]">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Project Brief" htmlFor="message" required className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  placeholder="What is the scope, the timeline, and the constraint?"
                  className={`${inputClass} resize-y leading-relaxed`}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[12px] leading-relaxed text-white/50">
                We treat briefs as confidential. NDAs available on request.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="relative inline-flex select-none items-center justify-center gap-2 rounded-full px-7 py-3 text-eyebrow font-heading uppercase text-black bg-[linear-gradient(180deg,#EBD78A_0%,#D7BF5E_48%,#B89E4C_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(121,107,56,0.5),0_6px_14px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(215,191,94,0.75),0_0_22px_-6px_rgba(215,191,94,0.35)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-[1.5px] hover:brightness-[1.06] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "submitting" ? (
                  <>
                    Sending
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  </>
                ) : status === "sent" ? (
                  <>
                    Mail Drafted
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    Send Brief
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>

          <motion.aside
            id="contact-details"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.9, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <DetailCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <DetailCard
              icon={Phone}
              label="Phone"
              value={site.phoneDisplay}
              href={`tel:${site.phone}`}
            />
            <DetailCard
              icon={MapPin}
              label="Headquarters"
              value={site.address.full}
            />
            <DetailCard
              icon={Clock}
              label="Hours"
              value="Mon–Sat · 09:30 – 19:00 IST"
              hint="24×7 support for AMC clients"
            />
            <DetailCard
              icon={Building2}
              label="Company"
              value={site.shortName}
              hint="MSME · India"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "block w-full rounded-lg border border-[var(--color-ms-border)] bg-black/40 px-4 py-3 text-base text-white placeholder:text-white/35 transition-colors focus:border-[var(--color-ms-gold)]/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-ms-gold)]/25 sm:text-sm";

function Field({
  label,
  htmlFor,
  required,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={`flex flex-col gap-2 ${className}`}>
      <span className="text-eyebrow font-heading uppercase text-white/55">
        {label}
        {required && <span className="ml-1 text-[var(--color-ms-gold)]">*</span>}
      </span>
      {children}
    </label>
  );
}

function DetailCard({
  icon: Icon,
  label,
  value,
  href,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  hint?: string;
}) {
  const content = (
    <>
      <span
        aria-hidden
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(215,191,94,0.35)] bg-[linear-gradient(180deg,rgba(215,191,94,0.18),rgba(121,107,56,0.05))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
      >
        <Icon className="h-4 w-4 text-[var(--color-ms-gold)]" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-eyebrow font-heading uppercase text-[var(--color-ms-gold)]">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm text-white/85">{value}</p>
        {hint && <p className="mt-1 text-[12px] leading-relaxed text-white/45">{hint}</p>}
      </div>
    </>
  );

  const baseClass =
    "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[var(--color-ms-border)] bg-[linear-gradient(180deg,rgba(22,20,14,0.92)_0%,rgba(10,9,6,0.96)_100%)] px-5 py-4 transition-colors duration-300 hover:border-[rgba(215,191,94,0.55)]";

  return href ? (
    <a href={href} className={baseClass}>
      {content}
    </a>
  ) : (
    <div className={baseClass}>{content}</div>
  );
}
