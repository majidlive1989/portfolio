"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const MAX = 300;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const message = watch("message") || "";
  const count = message.length;

  const onSubmit = async (data: FormValues) => {
    // TODO: connect to API / email service
    alert("Message submitted (demo)");
    console.log(data);
  };

  return (
    <section id="contact" className="relative bg-black py-20 sm:py-24">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Do you like my work?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/65">
            Have a{" "}
            <span className="text-[#FFCC4D] font-semibold">
              project in mind
            </span>
            , a <span className="text-[#FFCC4D] font-semibold">question</span>,
            or just want to{" "}
            <span className="text-[#FFCC4D] font-semibold">say hello</span>?
          </p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 max-w-2xl space-y-7"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-xs text-white/80">Name *</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#FFCC4D]/60 focus:ring-2 focus:ring-[#FFCC4D]/15"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs text-white/80">E-mail *</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your e-mail"
              className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#FFCC4D]/60 focus:ring-2 focus:ring-[#FFCC4D]/15"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="mb-2 flex justify-between">
              <label className="text-xs text-white/80">Message *</label>
              <span
                className={`text-xs ${
                  count > MAX ? "text-red-400" : "text-white/55"
                }`}
              >
                {count} / {MAX}
              </span>
            </div>

            <textarea
              {...register("message", {
                required: "Message is required",
                maxLength: {
                  value: MAX,
                  message: "Message is too long",
                },
              })}
              rows={6}
              placeholder="Your message"
              className="w-full resize-none rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#FFCC4D]/60 focus:ring-2 focus:ring-[#FFCC4D]/15"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="ml-auto flex items-center gap-2 rounded-lg bg-[#FFCC4D] px-5 py-3 text-xs font-semibold text-[#1C160A] disabled:opacity-40"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
