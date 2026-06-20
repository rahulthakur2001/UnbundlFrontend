import { FiPrinter, FiTrendingUp, FiDollarSign } from "react-icons/fi";

import gapBefore from "../images/367f29a87c880c1eed39823ae5af2faa16ef29a9.jpg";
import gapAfter from "../images/8b3f2baaa558ae86e87fbafda0087718f7cfcea6.jpg";
import crookedBefore from "../images/6109cfeba9aa69178af147d9d99bb7074b1567bb.jpg";
import crookedAfter from "../images/999a2c1a279454004eaf0be2cae689080a05af63.jpg";
import biteBefore from "../images/c2a6edee241d59f17dd93df420d4479dc554ecd2.jpg";
import biteAfter from "../images/f8fa5fd1e9d0d1f29b3107f691707ae05756fb5f.jpg";
import protrudeBefore from "../images/fc7589835919a2d708e1f730e7a38ef281829490.jpg";
import protrudeAfter from "../images/f85ad13487aeff29db891a8f938f9d4bb42a32d9.jpg";

import customMadeImg from "../images/a47e0e1aab468217aa391070c1cb6c8f504da33a.png";
import predictableImg from "../images/c9da863cb9a02211073260347aea60c0d541ff16.png";
import cloveImg from "../images/e7a2638397e054fe1ac9d85ab66cd769686ec886.png";
import unlimitedImg from "../images/453963cddca318d8c6490a0819e27b2bdc123d43.png";

export const resultsData = [
  {
    before: gapBefore,
    after: gapAfter,
    concern: "Gaps",
    duration: "8 months",
  },
  {
    before: crookedBefore,
    after: crookedAfter,
    concern: "Crooked Teeth",
    duration: "8 months",
  },
  {
    before: biteBefore,
    after: biteAfter,
    concern: "Open Bite",
    duration: "8 months",
  },
  {
    before: protrudeBefore,
    after: protrudeAfter,
    concern: "Protruding Teeth",
    duration: "8 months",
  },
];



export const diffData = [
  {
    title: "Next-Gen",
    desc: "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.",
    Icon: FiPrinter,
  },
  {
    title: "Hassle-Free",
    desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
    Icon: FiTrendingUp,
  },
  {
    title: "Transparent Pricing",
    desc: "Everything's included \u2013 from scans to aligners, doctor consults, and retainers \u2013 no hidden costs.",
    Icon: FiDollarSign,
  },
];

export const compareData = [
  {
    label: "Easy to complex cases",
    whistle: "Yes, mild to complex",
    other: "No, only mild to moderate",
    type: "text",
  },
  { label: "Clear-cut Pricing", whistle: true, other: false, type: "check" },
  {
    label: "Aligner Change",
    whistle: "Every 10 days",
    other: "Every 2 weeks",
    type: "text",
  },
  { label: "Clinical Partnership", whistle: true, other: false, type: "check" },
  {
    label: "Movement Between Cities",
    whistle: true,
    other: false,
    type: "check",
  },
  {
    label: "Complimentary Teeth Scaling",
    whistle: true,
    other: false,
    type: "check",
  },
];

export const stepsData = [
  {
    n: 1,
    title: "Scan",
    desc: "We use an AI-powered scanner to take a detailed 3D image of your teeth.",
  },
  {
    n: 2,
    title: "Plan",
    desc: "Our Orthodontists design your customized smile enhancement plan using highly advanced software",
  },
  {
    n: 3,
    title: "Fabricate",
    desc: "We manufacture your custom aligners leveraging 3D printing & laser technology",
  },
  {
    n: 4,
    title: "Wear",
    desc: "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey",
  },
];

export const faqData = [
  {
    q: "What are Aligners?",
    a: "Aligners are custom-made, clear, removable trays that gradually shift your teeth into the desired position, offering a discreet alternative to traditional braces.",
  },
  {
    q: "How do Aligners work?",
    a: "Each aligner is designed to apply gentle pressure to specific teeth. You change to a new aligner every 10 days, and over time your teeth move step-by-step into their final position.",
  },
  {
    q: "Can any dentist do irregular teeth treatment?",
    a: "No, irregular and complex teeth movements should only be planned and monitored by an experienced orthodontist. All Whistle cases are handled by qualified Clove Dental orthodontists.",
  },
  {
    q: "Are there any restriction on eating or drinking?",
    a: "You should remove your aligners before eating or drinking anything other than water, and brush your teeth before putting them back in.",
  },
  {
    q: "How long does the treatment take?",
    a: "Treatment duration depends on case complexity, but most Whistle patients complete their treatment in 6 to 10 months.",
  },
];
