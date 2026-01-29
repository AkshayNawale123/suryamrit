import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

import { AlertTriangle, RotateCcw, Sun, ShoppingCart, Star, Shield, Sparkles, Clock, Zap } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: string;
  text: string;
  options: { label: string; value: number }[];
}

const lifestyleQuestions: Question[] = [
  {
    id: "q1",
    text: "Sun Exposure: Total time you spend in direct sunlight with arms/legs/face uncovered, without sunscreen, per day",
    options: [
      { label: "0 to 15 minutes (2 points)", value: 2 },
      { label: "15 to 30 minutes (1 point)", value: 1 },
      { label: "More than 30 minutes (0 points)", value: 0 },
    ],
  },
  {
    id: "q2",
    text: "Skin Tone: Melanin reduces the skin's ability to make Vitamin D from the sun",
    options: [
      { label: "Naturally dark or deeply pigmented skin (1 point)", value: 1 },
      { label: "Light or fair skin (0 points)", value: 0 },
    ],
  },
  {
    id: "q3",
    text: "Diet: Frequency of consuming Vitamin D-rich or fortified foods (e.g., fatty fish, fortified milk/cereal, eggs)",
    options: [
      { label: "Rarely or Never (2 points)", value: 2 },
      { label: "1-2 times per week (1 point)", value: 1 },
      { label: "3 or more times per week (0 points)", value: 0 },
    ],
  },
  {
    id: "q4",
    text: "Supplement Use: Do you take a daily Vitamin D3 supplement of at least 600 IU (15 mcg)?",
    options: [
      { label: "No (2 points)", value: 2 },
      { label: "Yes (0 points)", value: 0 },
    ],
  },
];

const symptomQuestions: Question[] = [
  {
    id: "q5",
    text: "Fatigue/Tiredness: Do you feel unusually tired, fatigued, or drained even after a full night's sleep?",
    options: [
      { label: "Yes, often/daily (2 points)", value: 2 },
      { label: "Sometimes (1 point)", value: 1 },
      { label: "Rarely/Never (0 points)", value: 0 },
    ],
  },
  {
    id: "q6",
    text: "Pain/Aches: Have you experienced unexplained, persistent bone, back, or muscle aches/pain in the last few months?",
    options: [
      { label: "Yes, often (2 points)", value: 2 },
      { label: "Yes, occasionally (1 point)", value: 1 },
      { label: "No (0 points)", value: 0 },
    ],
  },
  {
    id: "q7",
    text: "Mood: Have you noticed an unexplained change in mood, such as increased feelings of sadness or depression?",
    options: [
      { label: "Yes, often (2 points)", value: 2 },
      { label: "Yes, occasionally (1 point)", value: 1 },
      { label: "No (0 points)", value: 0 },
    ],
  },
  {
    id: "q8",
    text: "Immunity: Do you catch colds or infections more frequently than others?",
    options: [
      { label: "Yes (1 point)", value: 1 },
      { label: "No (0 points)", value: 0 },
    ],
  },
];

type RiskLevel = "low" | "moderate" | "high";

interface ResultData {
  riskLevel: RiskLevel;
  statusLabel: string;
  hook: string;
  actionPlan: string;
  theFix: string;
  whySuryAmrit?: string;
  timelineOrResult: string;
  timelineLabel: string;
  lifestyleTips: string[];
}

const getResultData = (total: number): ResultData => {
  if (total <= 3) {
    return {
      riskLevel: "low",
      statusLabel: "Sun-Kissed & Strong",
      hook: "Lock in your levels.",
      actionPlan: "You are living a healthy life! But in the modern world, D3 levels drop fast during stress or office weeks.",
      theFix: "Take 1 SuryAmrit Ghee Softgel daily to \"Lock In\" your status.",
      timelineOrResult: "Prevents future fatigue and keeps your immunity shield active.",
      timelineLabel: "The Result",
      lifestyleTips: [
        "Maintain current sun exposure",
        "Keep eating healthy fats",
      ],
    };
  } else if (total <= 7) {
    return {
      riskLevel: "moderate",
      statusLabel: "The Office Fatigue Zone",
      hook: "Bridge the gap.",
      actionPlan: "You aren't sick, but you aren't efficient either. Your current lifestyle is draining your battery faster than you are recharging it.",
      theFix: "Start the SuryAmrit Daily Habit. It absorbs better than tablets and fills this gap naturally.",
      timelineOrResult: "It takes time to rebuild. Stick to it for 45 Days to feel the real shift in your energy and sleep quality.",
      timelineLabel: "The Timeline",
      lifestyleTips: [
        "Add 15 mins of morning sun",
        "Add 1 spoon of Ghee to meals",
        "Try to get sunlight on your balcony",
      ],
    };
  } else {
    return {
      riskLevel: "high",
      statusLabel: "Needs Restoration",
      hook: "Start the Restoration Cycle.",
      actionPlan: "Your inputs (Sun/Diet) are significantly lower than your body's demand.",
      whySuryAmrit: "Instead of shocking your body with high-dose chemical injections (which can be harsh), we recommend Gentle, Consistent Restoration.",
      theFix: "Take SuryAmrit Daily without fail. Our Ghee matrix ensures steady absorption that is safe for long-term use.",
      timelineOrResult: "You didn't lose your levels in a day, and you won't fix them in a day. Give us 45 Days of consistency, and you will see the change.",
      timelineLabel: "The Promise",
      lifestyleTips: [
        "Mandatory: 20 mins Sun daily",
        "Diet: More Fatty Fish/Dairy",
        "Consistency is key",
      ],
    };
  }
};

const SelfAssessment = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = lifestyleQuestions.length + symptomQuestions.length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateResults = () => {
    if (answeredQuestions < totalQuestions) {
      toast.error("Please answer all questions before calculating your risk.");
      return;
    }
    setShowResults(true);
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const section1Score = (answers.q1 || 0) + (answers.q2 || 0) + (answers.q3 || 0) + (answers.q4 || 0);
  const section2Score = (answers.q5 || 0) + (answers.q6 || 0) + (answers.q7 || 0) + (answers.q8 || 0);
  const totalScore = section1Score + section2Score;
  const resultData = getResultData(totalScore);

  // Risk level styling helpers
  const getRiskBgStyle = (level: RiskLevel) => {
    switch (level) {
      case "low":
        return "bg-green-50 border-green-200";
      case "moderate":
        return "bg-amber-50 border-amber-200";
      case "high":
        return "bg-red-50 border-red-200";
    }
  };

  const getRiskIcon = (level: RiskLevel) => {
    switch (level) {
      case "low":
        return <Star className="h-10 w-10 text-green-600" />;
      case "moderate":
        return <AlertTriangle className="h-10 w-10 text-amber-600" />;
      case "high":
        return <Shield className="h-10 w-10 text-primary" />;
    }
  };


  const QuestionCard = ({ question, index }: { question: Question; index: number }) => (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="pt-6">
        <p className="font-semibold text-foreground mb-4">
          {index}. {question.text}
        </p>
        <RadioGroup
          value={answers[question.id]?.toString()}
          onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option, optIndex) => (
            <div
              key={optIndex}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all cursor-pointer hover:border-primary hover:bg-primary/5 ${
                answers[question.id] === option.value ? "border-primary bg-primary/10" : "border-border"
              }`}
              onClick={() => handleAnswer(question.id, option.value)}
            >
              <RadioGroupItem value={option.value.toString()} id={`${question.id}-${optIndex}`} />
              <Label htmlFor={`${question.id}-${optIndex}`} className="cursor-pointer flex-1">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Vitamin D3 Self Assessment - Check Your Deficiency Risk | SuryAmrit™"
        description="Take our free Vitamin D3 deficiency risk assessment. Answer 8 simple questions to understand your risk level and get personalized recommendations."
        keywords="vitamin d3 assessment, deficiency test, risk calculator, self assessment, vitamin d quiz, health check"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Sun className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vitamin D3 Deficiency Risk Assessment</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For Office Workers & Indoor Professionals (9am-5pm in Air-Conditioned Spaces)
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Disclaimer */}
        <Card className="mb-8 border-l-4 border-l-amber-500 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Important Disclaimer</p>
                <p className="text-sm text-amber-700">
                  This is a screening tool and NOT a substitute for a medical diagnosis, which requires a blood test
                  (25-Hydroxyvitamin D test). Always consult healthcare providers for interpretation of lab results.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progress</span>
              <span className="text-sm font-medium text-primary">
                {answeredQuestions} / {totalQuestions} questions
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        {!showResults ? (
          <>
            {/* Intro */}
            <Card className="mb-8 border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="pt-6">
                <p className="text-sm text-blue-800">
                  <strong>How this works:</strong> Answer each question below and the calculator will sum up the points
                  to give you a total risk score. This questionnaire is designed specifically for laypersons with
                  typical indoor office environments to estimate their risk of Vitamin D3 deficiency.
                </p>
              </CardContent>
            </Card>

            {/* Section 1: Lifestyle */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2 pb-2 border-b-2 border-primary">
                Part 1: Lifestyle & Risk Factors
              </h2>
              <p className="text-muted-foreground text-sm mb-6 italic">
                These factors relate to your body's ability to produce or acquire Vitamin D3, especially for someone
                working indoors.
              </p>
              <div className="space-y-4">
                {lifestyleQuestions.map((q, i) => (
                  <QuestionCard key={q.id} question={q} index={i + 1} />
                ))}
              </div>
            </div>

            {/* Section 2: Symptoms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2 pb-2 border-b-2 border-primary">
                Part 2: Common Symptoms
              </h2>
              <p className="text-muted-foreground text-sm mb-6 italic">
                These symptoms are often linked to low Vitamin D levels.
              </p>
              <div className="space-y-4">
                {symptomQuestions.map((q, i) => (
                  <QuestionCard key={q.id} question={q} index={i + 5} />
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <Button onClick={calculateResults} className="w-full py-6 text-lg" size="lg" variant="hero">
              📊 Calculate My Vitamin D3 Status
            </Button>
          </>
        ) : (
          /* Results Section - SuryAmrit Safety Protocol */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Status Card */}
            <Card className={`border-2 ${getRiskBgStyle(resultData.riskLevel)}`}>
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{getRiskIcon(resultData.riskLevel)}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {resultData.riskLevel === "low" && "🌟 "}
                    {resultData.riskLevel === "moderate" && "⚠️ "}
                    {resultData.riskLevel === "high" && "🛡️ "}
                    {resultData.statusLabel}
                  </h2>
                  <p className="text-lg italic text-muted-foreground mb-4">"{resultData.hook}"</p>
                  <div className="text-sm text-muted-foreground">
                    Score: <span className="font-semibold text-foreground">{totalScore} / 14 Points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Action Plan */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase tracking-wide text-foreground">
                  Your Action Plan
                </h3>
                <p className="text-muted-foreground leading-relaxed">{resultData.actionPlan}</p>
              </CardContent>
            </Card>

            {/* The Fix - SuryAmrit Solution */}
            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase tracking-wide text-primary">
                  <Zap className="h-5 w-5" />
                  The Fix
                </h3>
                <p className="text-foreground font-medium mb-4">{resultData.theFix}</p>
                
                {resultData.whySuryAmrit && (
                  <div className="bg-background/60 rounded-lg p-4 mb-4">
                    <p className="text-sm text-muted-foreground italic">
                      <strong className="text-foreground">Why SuryAmrit?</strong> {resultData.whySuryAmrit}
                    </p>
                  </div>
                )}

                <Button asChild className="w-full" size="lg" variant="hero">
                  <Link to="/buy">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Order SuryAmrit™ Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* The Result/Timeline/Promise */}
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase tracking-wide text-foreground">
                  <Clock className="h-5 w-5 text-amber-600" />
                  {resultData.timelineLabel}
                  {resultData.riskLevel !== "low" && (
                    <span className="text-sm font-normal normal-case text-amber-600">(45 Days)</span>
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{resultData.timelineOrResult}</p>
              </CardContent>
            </Card>

            {/* Lifestyle Add-ons */}
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wide text-foreground">
                  <Sparkles className="h-5 w-5 text-green-600" />
                  Lifestyle Add-ons
                </h3>
                <ul className="space-y-3">
                  {resultData.lifestyleTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Sun className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Safety Disclaimer */}
            <Card className="bg-muted/30 border-muted">
              <CardContent className="pt-4 pb-4">
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  <strong>Disclaimer:</strong> SuryAmrit is a daily nutritional supplement to support healthy Vitamin D levels. 
                  It is not a prescription drug or a cure for acute diseases. If you have existing liver/kidney conditions 
                  or are on specific medication, please share this ingredient list with your physician before starting.
                </p>
              </CardContent>
            </Card>

            {/* Reset Button */}
            <div className="flex justify-center pt-4">
              <Button onClick={resetAssessment} variant="outline" size="lg">
                <RotateCcw className="mr-2 h-4 w-4" />
                Start New Assessment
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SelfAssessment;
