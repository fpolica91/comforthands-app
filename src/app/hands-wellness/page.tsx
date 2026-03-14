import type { Metadata } from "next";
import { Gauge, Calendar, Ear, ShieldCheck } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import VideoModal from "@/components/shared/VideoModal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hands Wellness",
};

interface Exercise {
  name: string;
  subtitle: string;
  steps: string[];
}

const warmUpExercises: Exercise[] = [
  {
    name: "Finger Stretch",
    subtitle: "Loosens joints and increases range of motion",
    steps: [
      "Spread fingers wide and hold for 5 seconds",
      "Relax completely",
      "Repeat 5 times each hand",
    ],
  },
  {
    name: "Wrist Rotations",
    subtitle: "Warms up the wrist joint and improves circulation",
    steps: [
      "Circular wrist motions",
      "5 rotations clockwise, 5 counterclockwise",
      "Keep movements smooth and controlled",
    ],
  },
];

const strengtheningExercises: Exercise[] = [
  {
    name: "Basic Squeeze",
    subtitle: "Builds overall grip strength",
    steps: [
      "Hold ball in palm",
      "Squeeze gently with a 3-second hold",
      "Release slowly",
      "10 reps per hand",
    ],
  },
  {
    name: "Pinch Grip",
    subtitle: "Strengthens individual fingers and coordination",
    steps: [
      "Pinch between thumb and each finger",
      "3-second hold per finger",
      "Cycle through all fingers",
      "3 cycles per hand",
    ],
  },
  {
    name: "Finger Press",
    subtitle: "Builds even finger strength across all digits",
    steps: [
      "Press down using fingers only",
      "3-5 second holds",
      "5 reps per hand",
    ],
  },
  {
    name: "Thumb Opposition",
    subtitle: "Improves thumb strength and finger flexibility",
    steps: [
      "Press ball against palm with thumb",
      "Touch each fingertip in sequence",
      "3-5 cycles per hand",
    ],
  },
];

const coolDownExercises: Exercise[] = [
  {
    name: "Hand Shake",
    subtitle: "Releases built-up tension",
    steps: [
      "Gentle shaking for 10 seconds",
      "Keep wrists loose and relaxed",
    ],
  },
  {
    name: "Finger Pull",
    subtitle: "Stretches finger joints and tendons",
    steps: [
      "Gentle pulling of each finger",
      "2-3 second holds per finger",
      "Never force past comfort",
    ],
  },
  {
    name: "Wrist Flexor Stretch",
    subtitle: "Relieves forearm and wrist tightness",
    steps: [
      "Extend arm palm up",
      "Gently pull fingers down and back",
      "8-second holds",
    ],
  },
];

const tips = [
  {
    icon: Gauge,
    title: "Start slow",
    description: "Build gradually from fewer reps",
  },
  {
    icon: Calendar,
    title: "Stay consistent",
    description: "Aim for 2-4 sessions weekly",
  },
  {
    icon: Ear,
    title: "Listen to your body",
    description: "Stop if experiencing pain",
  },
  {
    icon: ShieldCheck,
    title: "Wear your gloves",
    description: "For gentle compression support",
  },
];

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{exercise.name}</CardTitle>
        <CardDescription>{exercise.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-3">
          {exercise.steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="pt-0.5 text-sm text-muted-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export default function HandsWellnessPage() {
  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Hands Wellness"
        imageSrc="/images/banners/hands-wellness.jpg"
      />

      {/* Video + Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="wrapper">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Video Modal Trigger */}
            <div className="w-full lg:w-1/2">
              <VideoModal
                src="/videos/hands-wellness.mp4"
                poster="/images/products/IMG-20251006-WA0028.jpg"
                className="w-full"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Hand Wellness Exercises
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Your hands work hard every day — hand fatigue and stiffness can
                build up over time. Our{" "}
                <span className="font-semibold text-primary">
                  Blueberry Solutions
                </span>{" "}
                therapeutic gloves are designed to support your hands during
                these simple, effective exercises that promote strength,
                flexibility, and relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            What You Will Need
          </h2>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Card className="bg-card flex-1 text-center">
              <CardContent className="py-6">
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  A pair of{" "}
                  <span className="font-semibold text-primary">
                    Blueberry Solutions
                  </span>{" "}
                  therapeutic gloves
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card flex-1 text-center">
              <CardContent className="py-6">
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  A soft or medium-firmness stress relief ball
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warm-Up Section */}
      <section className="py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Warm Up Your Hands
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {warmUpExercises.map((exercise) => (
              <ExerciseCard key={exercise.name} exercise={exercise} />
            ))}
          </div>
        </div>
      </section>

      {/* Strengthening Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Strengthening Exercises
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {strengtheningExercises.map((exercise) => (
              <ExerciseCard key={exercise.name} exercise={exercise} />
            ))}
          </div>
        </div>
      </section>

      {/* Cool Down Section */}
      <section className="py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Cool Down
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coolDownExercises.map((exercise) => (
              <ExerciseCard key={exercise.name} exercise={exercise} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Tips for Best Results
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <Card
                key={tip.title}
                className="bg-card text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center gap-4 pt-8 pb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                    <tip.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{tip.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="wrapper text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Hand Wellness Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
            Our therapeutic gloves provide the gentle compression and support
            your hands need during every exercise.
          </p>
          <a
            href="https://www.amazon.com/dp/B0G7699CR7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-flex items-center justify-center bg-secondary text-white transition-colors hover:bg-secondary/90"
          >
            Shop on Amazon
          </a>
        </div>
      </section>
    </>
  );
}
