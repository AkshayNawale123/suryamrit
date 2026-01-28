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
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle, RotateCcw, Sun, ShoppingCart } from "lucide-react";
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
  title: string;
  description: string;
  recommendations: string[];
  medicalStatus: string;
}

const getResultData = (total: number): ResultData => {
  if (total <= 3) {
    return {
      riskLevel: "low",
      title: "Low Risk",
      description:
        "Sufficiency/Optimal Status (Likely > 30 ng/mL) - Your lifestyle and symptoms suggest you likely have sufficient Vitamin D levels. Great job maintaining healthy habits!",
      medicalStatus: "Sufficiency/Optimal (Likely > 30 ng/mL)",
      recommendations: [
        "Continue current lifestyle: Your practices are working well to maintain adequate Vitamin D levels",
        "Maintain habits: Keep up your current sun exposure and dietary practices",
        "Optional maintenance: Consider 800-2,000 IU daily for ongoing maintenance",
        "Annual monitoring: Check your levels during routine health check-ups",
      ],
    };
  } else if (total <= 7) {
    return {
      riskLevel: "moderate",
      title: "Moderate Risk",
      description:
        "Insufficiency Status (Likely 20-30 ng/mL) - Your responses suggest possible Vitamin D insufficiency. Some lifestyle modifications are recommended.",
      medicalStatus: "Insufficiency (Likely 20-30 ng/mL)",
      recommendations: [
        "Increase sun exposure: Aim for 15-30 minutes of direct sunlight daily with arms, legs, and face uncovered",
        "Improve dietary intake: Consume more Vitamin D-rich foods like fatty fish, fortified milk, eggs, and mushrooms",
        "Consider supplementation: Vitamin D3 supplement of 2,000-4,000 IU daily",
        "Consult a doctor: Schedule an appointment to discuss getting a blood test (25-Hydroxyvitamin D test)",
        "Re-test in 3 months: Check your levels after implementing these changes",
      ],
    };
  } else {
    return {
      riskLevel: "high",
      title: "High Risk",
      description:
        "Deficiency/Severe Deficiency Status (Likely < 20 ng/mL) - Your responses strongly suggest Vitamin D deficiency. Medical consultation is strongly recommended.",
      medicalStatus: "Deficiency/Severe Deficiency (Likely < 20 ng/mL)",
      recommendations: [
        "SEE A HEALTHCARE PROVIDER: Strongly recommended to schedule an appointment immediately for a blood test",
        "Blood test required: Only a medical professional can confirm deficiency and prescribe appropriate treatment",
        "Likely supplementation protocol: 4,000-6,000 IU daily, OR 50,000 IU weekly for 6-8 weeks (as prescribed)",
        "Increase sun exposure: Aim for 15-30 minutes of direct sunlight daily when possible",
        "Dietary improvements: Prioritize Vitamin D-rich foods in your daily meals",
        "⚠️ Important: Do NOT self-prescribe high-dose supplements without medical supervision",
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

  const getRiskBadgeStyle = (level: RiskLevel) => {
    switch (level) {
      case "low":
        return "bg-green-100 text-green-800 border-green-300";
      case "moderate":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "high":
        return "bg-red-100 text-red-800 border-red-300";
    }
  };

  const getRiskIcon = (level: RiskLevel) => {
    switch (level) {
      case "low":
        return <CheckCircle className="h-8 w-8 text-green-600" />;
      case "moderate":
        return <AlertTriangle className="h-8 w-8 text-amber-600" />;
      case "high":
        return <XCircle className="h-8 w-8 text-red-600" />;
    }
  };

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
          /* Results Section */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className={`border-2 ${getRiskBgStyle(resultData.riskLevel)}`}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{getRiskIcon(resultData.riskLevel)}</div>
                <CardTitle className="text-2xl">Your Vitamin D3 Status Assessment</CardTitle>
                <div className="text-5xl font-bold text-foreground mt-4">{totalScore} / 14 Points</div>
              </CardHeader>
              <CardContent>
                <div className="bg-card rounded-lg overflow-hidden mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left p-3 font-semibold">Category</th>
                        <th className="text-left p-3 font-semibold">Your Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3">Section 1 (Q1-4): Lifestyle & Risk Factors</td>
                        <td className="p-3 font-medium">{section1Score} points</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Section 2 (Q5-8): Common Symptoms</td>
                        <td className="p-3 font-medium">{section2Score} points</td>
                      </tr>
                      <tr className="bg-muted/50 font-bold">
                        <td className="p-3">GRAND TOTAL SCORE</td>
                        <td className="p-3">{totalScore} points</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Risk Assessment */}
                <div className="bg-card rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`text-base px-3 py-1 ${getRiskBadgeStyle(resultData.riskLevel)}`}>
                      {resultData.title}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{resultData.description}</p>
                </div>

                {/* Recommendations */}
                <div className="bg-card rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Recommended Actions:</h3>
                  <ul className="space-y-3">
                    {resultData.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interpretation Guide */}
                <div className="bg-card rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-4">📋 Complete Score Interpretation Guide</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-2 text-left border-b border-border">Total Score</th>
                          <th className="p-2 text-left border-b border-border">Risk Assessment</th>
                          <th className="p-2 text-left border-b border-border">Medical Status</th>
                          <th className="p-2 text-left border-b border-border">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-2">0 - 3 Points</td>
                          <td className="p-2">Low Risk</td>
                          <td className="p-2">Likely &gt; 30 ng/mL</td>
                          <td className="p-2">Continue current lifestyle</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-2">4 - 7 Points</td>
                          <td className="p-2">Moderate Risk</td>
                          <td className="p-2">Likely 20-30 ng/mL</td>
                          <td className="p-2">Increase sun & diet, consider supplement</td>
                        </tr>
                        <tr>
                          <td className="p-2">8 - 14 Points</td>
                          <td className="p-2">High Risk</td>
                          <td className="p-2">Likely &lt; 20 ng/mL</td>
                          <td className="p-2">See healthcare provider</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    <strong>Maximum Possible Score:</strong> 14 Points
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            {resultData.riskLevel !== "low" && (
              <Card className="bg-gradient-primary text-white">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Start Your Vitamin D Journey Today</h3>
                  <p className="text-white/90 mb-4">
                    SuryAmrit™ provides 600 IU of plant-based Vitamin D3 in a traditional ghee base for optimal
                    absorption.
                  </p>
                  <Button asChild variant="outline" className="bg-white text-primary hover:bg-white/90">
                    <Link to="/buy">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Order SuryAmrit™ Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Reset Button */}
            <div className="flex justify-center">
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
