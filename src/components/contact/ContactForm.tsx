"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.literal(true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      privacyConsent: false as unknown as true,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully!",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-card border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-secondary">
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Name / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="First Name"
                className="h-11"
                {...register("firstName")}
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="lastName">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="Last Name"
                className="h-11"
                {...register("lastName")}
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                className="h-11"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">
                Phone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="h-11"
                {...register("phone")}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="space-y-1.5">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Address (optional)"
              className="h-11"
              {...register("address")}
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              className="min-h-[120px]"
              {...register("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Privacy Consent */}
          <div className="space-y-1.5">
            <Controller
              name="privacyConsent"
              control={control}
              render={({ field }) => (
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacyConsent"
                    checked={field.value === true}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-invalid={!!errors.privacyConsent}
                  />
                  <Label
                    htmlFor="privacyConsent"
                    className="text-sm font-normal leading-snug cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link
                      href="/privacy-notice"
                      className="text-secondary underline underline-offset-2 hover:text-secondary/80"
                    >
                      Privacy Policy
                    </Link>{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                </div>
              )}
            />
            {errors.privacyConsent && (
              <p className="text-sm text-destructive">
                {errors.privacyConsent.message}
              </p>
            )}
          </div>

          {/* reCAPTCHA placeholder */}
          {/* TODO: Integrate reCAPTCHA v3 here */}

          {/* Submit Status */}
          {submitStatus && (
            <p
              className={cn(
                "text-sm font-medium",
                submitStatus.type === "success"
                  ? "text-accent"
                  : "text-destructive"
              )}
            >
              {submitStatus.message}
            </p>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              className="btn-pill w-full sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
