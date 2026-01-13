import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, TrendingUp, Calendar } from "lucide-react";

const DosageSection = () => {
  const clinicalIndications = [
    { specialty: "Orthopedics / GP", condition: "Osteoporosis, fractures, delayed healing", rationale: "Bone strength restoration" },
    { specialty: "Pediatrics", condition: "Rickets, delayed growth", rationale: "Growth & skeletal support" },
    { specialty: "Obstetrics", condition: "Pregnancy, lactation, fetal health", rationale: "Prevent maternal-fetal deficiency" },
    { specialty: "Geriatrics", condition: "Falls, sarcopenia, vertebral collapse", rationale: "Mobility and fracture prevention" },
    { specialty: "Psychiatry / Neuro", condition: "Depression, cognitive decline", rationale: "Neuroendocrine balance" },
    { specialty: "Endocrinology", condition: "Diabetes, PCOS", rationale: "Glucose metabolism improvement" },
    { specialty: "Cardiology", condition: "Hypertension, arterial stiffness", rationale: "Endothelial function enhancement" },
    { specialty: "Pulmonology", condition: "Post-COVID fatigue", rationale: "Recovery and immune modulation" },
    { specialty: "Gastro/Hepato", condition: "IBD, liver disease", rationale: "Correct fat-soluble deficiencies" },
    { specialty: "Immunology", condition: "RA, SLE, MS", rationale: "Autoimmune risk reduction" },
    { specialty: "Oncology", condition: "Fatigue, bone metastasis", rationale: "Bone and immune resilience" },
    { specialty: "Dentistry", condition: "Periodontitis, delayed dentition", rationale: "Oral bone health" }
  ];

  const comparisonData = [
    { factor: "Absorption", daily: "Stable, Consistent Uptake", monthly: "Unpredictable Spikes" },
    { factor: "Tolerability", daily: "Ghee Supports Gut & Liver", monthly: "Often Irritates System" },
    { factor: "Safety", daily: "Low-Dose = Low Toxicity", monthly: "High-Dose Risks Exist" },
    { factor: "Memory & Habit", daily: "Easy Daily Habit", monthly: "Easy to Skip/forget" },
    { factor: "Bioavailability", daily: "Maximized by Fat Synergy", monthly: "Rapid Clearance" }
  ];

  return (
    <section id="dosage" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Like The Sun, D₃ Must Rise Daily To Truly Nourish Within
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the optimal dosing strategy for maximum health benefits
          </p>
        </div>

        {/* Why Daily Dose */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardHeader className="bg-gradient-primary text-white">
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-6 w-6" />
                <span>Daily Dose (SuryAmrit™)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="border-b border-border/50 pb-3">
                    <div className="font-medium text-secondary mb-1">{item.factor}</div>
                    <div className="text-green-600 font-medium">{item.daily}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardHeader className="bg-gradient-secondary text-white">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Monthly High Dose</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="border-b border-border/50 pb-3">
                    <div className="font-medium text-secondary mb-1">{item.factor}</div>
                    <div className="text-red-600 font-medium">{item.monthly}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Indications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
            Clinical Indications for Supplementation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalIndications.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-secondary">{item.specialty}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div>
                      <Badge variant="outline" className="mb-2">{item.condition}</Badge>
                    </div>
                    <p className="text-sm text-primary font-medium">{item.rationale}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prescription Guidelines */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">Prescription Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Standard Dose:</h4>
                  <p className="text-foreground">600 IU/Day (RDA-Aligned)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Preferred Format:</h4>
                  <p className="text-foreground">Soft Chewable Veg Capsules of Natural Vitamin D₃-600 IU with Ghee</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Mode:</h4>
                  <p className="text-foreground">Daily SuryAmrit™ dosing preferred over weekly/monthly bolus</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-secondary">Monitoring:</h4>
                  <p className="text-foreground">Repeat serum levels in 3/6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Citation */}
        <div className="bg-gradient-secondary text-white rounded-2xl p-6 mt-8">
          <p className="text-center text-lg">
            <strong>Daily micro-dosing of Vitamin D₃ offers significantly better outcomes than large weekly or monthly doses.</strong>
          </p>
          <p className="text-center text-sm mt-2 opacity-90">
            - The Lancet, 2023 | NEJM, 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default DosageSection;