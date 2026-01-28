import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, TrendingUp, Calendar, CheckCircle, XCircle, Sun } from "lucide-react";

const DosageSection = () => {
  const clinicalIndications = [
    {
      specialty: "Orthopedics / GP",
      condition: "Osteoporosis, fractures, delayed healing",
      rationale: "Bone strength restoration",
    },
    { specialty: "Pediatrics", condition: "Rickets, delayed growth", rationale: "Growth & skeletal support" },
    {
      specialty: "Obstetrics",
      condition: "Pregnancy, lactation, fetal health",
      rationale: "Prevent maternal-fetal deficiency",
    },
    {
      specialty: "Geriatrics",
      condition: "Falls, sarcopenia, vertebral collapse",
      rationale: "Mobility and fracture prevention",
    },
    {
      specialty: "Psychiatry / Neuro",
      condition: "Depression, cognitive decline",
      rationale: "Neuroendocrine balance",
    },
    { specialty: "Endocrinology", condition: "Diabetes, PCOS", rationale: "Glucose metabolism improvement" },
    {
      specialty: "Cardiology",
      condition: "Hypertension, arterial stiffness",
      rationale: "Endothelial function enhancement",
    },
    { specialty: "Pulmonology", condition: "Post-COVID fatigue", rationale: "Recovery and immune modulation" },
    { specialty: "Gastro/Hepato", condition: "IBD, liver disease", rationale: "Correct fat-soluble deficiencies" },
    { specialty: "Immunology", condition: "RA, SLE, MS", rationale: "Autoimmune risk reduction" },
    { specialty: "Oncology", condition: "Fatigue, bone metastasis", rationale: "Bone and immune resilience" },
    { specialty: "Dentistry", condition: "Periodontitis, delayed dentition", rationale: "Oral bone health" },
  ];

  const comparisonData = [
    { factor: "Absorption", daily: "Stable, Consistent Uptake", monthly: "Unpredictable Spikes" },
    { factor: "Tolerability", daily: "Ghee Supports Gut & Liver", monthly: "Often Irritates System" },
    { factor: "Safety", daily: "Low-Dose = Low Toxicity", monthly: "High-Dose Risks Exist" },
    { factor: "Memory & Habit", daily: "Easy Daily Habit", monthly: "Easy to Skip/forget" },
    { factor: "Bioavailability", daily: "Maximized by Fat Synergy", monthly: "Rapid Clearance" },
  ];

  return (
    <section id="dosage" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Sun className="w-4 h-4 mr-2 inline" />
            Daily Nourishment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Like The Sun, D₃ Must Rise Daily</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the optimal dosing strategy for maximum health benefits
          </p>
        </div>

        {/* Daily vs Monthly Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-none bg-white shadow-warm overflow-hidden">
            <CardHeader className="bg-gradient-warm">
              <CardTitle className="flex items-center space-x-3 text-secondary">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <span>Daily Dose (SuryAmrit™)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-primary/10 last:border-0">
                    <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-secondary mb-1">{item.factor}</div>
                      <div className="text-secondary font-medium">{item.daily}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-white shadow-lg overflow-hidden opacity-80">
            <CardHeader className="bg-muted">
              <CardTitle className="flex items-center space-x-3 text-muted-foreground">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-muted-foreground" />
                </div>
                <span>Monthly High Dose</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <XCircle className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground mb-1">{item.factor}</div>
                      <div className="text-destructive/70 font-medium">{item.monthly}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Indications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-secondary mb-10 text-center">
            Clinical Indications for Supplementation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalIndications.map((item, index) => (
              <Card
                key={index}
                className="border-none bg-white shadow-warm hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-secondary flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-warm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    {item.specialty}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <Badge variant="outline" className="mb-2 border-primary/20 text-primary bg-primary/5">
                      {item.condition}
                    </Badge>
                    <p className="text-sm text-secondary font-medium">{item.rationale}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prescription Guidelines */}
        <div className="bg-white rounded-3xl p-10 shadow-warm mb-10">
          <h3 className="text-3xl font-bold text-secondary mb-10 text-center">Prescription Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gradient-warm rounded-xl p-5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Standard Dose:</h4>
                  <p className="text-muted-foreground">600 IU/Day (RDA-Aligned)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gradient-natural rounded-xl p-5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Preferred Format:</h4>
                  <p className="text-muted-foreground">Soft Chewable Veg Capsules with Ghee</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gradient-warm rounded-xl p-5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Mode:</h4>
                  <p className="text-muted-foreground">Daily SuryAmrit™ dosing preferred</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gradient-natural rounded-xl p-5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Monitoring:</h4>
                  <p className="text-muted-foreground">Repeat serum levels in 3/6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Citation */}
        <div className="bg-gradient-natural text-white rounded-2xl p-8 shadow-natural">
          <p className="text-center text-xl font-medium">
            Daily micro-dosing of Vitamin D₃ offers significantly better outcomes than large weekly or monthly doses.
          </p>
          <p className="text-center text-sm mt-3 opacity-80">- The Lancet, 2023 | NEJM, 2022</p>
        </div>
      </div>
    </section>
  );
};

export default DosageSection;
