import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2, MessageCircle, User, Phone, Building2, FileText, MapPin } from "lucide-react";

// Zod schema with conditional validation
const partnerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  partnerType: z.enum(["doctor", "distributor"], {
    required_error: "Please select your partner type",
  }),
  // Doctor fields
  registrationNumber: z.string().optional(),
  clinicName: z.string().optional(),
  // Distributor fields
  gstNumber: z.string().optional(),
  territory: z.string().optional(),
}).refine((data) => {
  if (data.partnerType === "doctor") {
    return data.registrationNumber && data.registrationNumber.length >= 3;
  }
  return true;
}, {
  message: "Medical Registration Number is required",
  path: ["registrationNumber"],
}).refine((data) => {
  if (data.partnerType === "distributor") {
    return data.territory && data.territory.length >= 2;
  }
  return true;
}, {
  message: "Territory/Region is required",
  path: ["territory"],
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

interface PartnerFormProps {
  whatsappNumber?: string;
}

const PartnerForm = ({ whatsappNumber = "918001234567" }: PartnerFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      registrationNumber: "",
      clinicName: "",
      gstNumber: "",
      territory: "",
    },
  });

  const partnerType = watch("partnerType");

  const onSubmit = async (data: PartnerFormData) => {
    // Build WhatsApp message with all form data
    let message = `🏥 NEW PARTNER APPLICATION\n\n`;
    message += `👤 Name: ${data.name}\n`;
    message += `📱 Phone: ${data.phone}\n`;
    message += `🏷️ Type: ${data.partnerType === "doctor" ? "Doctor / Clinic" : "Distributor / Stockist"}\n\n`;

    if (data.partnerType === "doctor") {
      message += `📋 Medical Reg No: ${data.registrationNumber}\n`;
      if (data.clinicName) {
        message += `🏥 Clinic Name: ${data.clinicName}\n`;
      }
    } else {
      if (data.gstNumber) {
        message += `📋 GST Number: ${data.gstNumber}\n`;
      }
      message += `📍 Territory: ${data.territory}\n`;
    }

    message += `\n---\nPlease verify and approve this partner application.`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Set submitted state first
    setSubmittedName(data.name);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  if (isSubmitted) {
    return (
      <Card className="border-2 border-secondary/30 shadow-sage bg-gradient-sage">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-secondary" />
          </div>
          
          <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
            Thank you, {submittedName}!
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6">
            Your Partner Application is<br />
            <span className="font-semibold text-primary">Under Review</span>
          </p>
          
          <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
            Our team will verify your credentials and activate your wholesale account within <strong>2 hours</strong>.
          </p>

          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I just submitted my partner application. Can you help expedite the approval?")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Get Faster Approval
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20 shadow-golden">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-serif">Register as Partner</CardTitle>
        <CardDescription>
          Join the Lokarth Alliance for exclusive access
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Dr. Sharma / Raj Distributors"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              Mobile Number (WhatsApp)
            </Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                +91
              </span>
              <Input
                id="phone"
                placeholder="9876543210"
                {...register("phone")}
                className={`rounded-l-none ${errors.phone ? "border-destructive" : ""}`}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Partner Type Dropdown */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              I am joining as...
            </Label>
            <Select
              onValueChange={(value: "doctor" | "distributor") => setValue("partnerType", value)}
            >
              <SelectTrigger className={errors.partnerType ? "border-destructive" : ""}>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctor">Doctor / Clinic</SelectItem>
                <SelectItem value="distributor">Distributor / Stockist</SelectItem>
              </SelectContent>
            </Select>
            {errors.partnerType && (
              <p className="text-sm text-destructive">{errors.partnerType.message}</p>
            )}
          </div>

          {/* Conditional Fields - Doctor */}
          {partnerType === "doctor" && (
            <div className="space-y-4 p-4 bg-accent/30 rounded-lg border border-accent animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-2">
                <Label htmlFor="registrationNumber" className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Medical Registration Number *
                </Label>
                <Input
                  id="registrationNumber"
                  placeholder="MCI/State Medical Council Reg No."
                  {...register("registrationNumber")}
                  className={errors.registrationNumber ? "border-destructive" : ""}
                />
                {errors.registrationNumber && (
                  <p className="text-sm text-destructive">{errors.registrationNumber.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="clinicName" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  Clinic / Hospital Name (Optional)
                </Label>
                <Input
                  id="clinicName"
                  placeholder="City Health Clinic"
                  {...register("clinicName")}
                />
              </div>
            </div>
          )}

          {/* Conditional Fields - Distributor */}
          {partnerType === "distributor" && (
            <div className="space-y-4 p-4 bg-accent/30 rounded-lg border border-accent animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="space-y-2">
                <Label htmlFor="gstNumber" className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  GST Number (Optional)
                </Label>
                <Input
                  id="gstNumber"
                  placeholder="22AAAAA0000A1Z5"
                  {...register("gstNumber")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="territory" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Territory / Region *
                </Label>
                <Input
                  id="territory"
                  placeholder="Mumbai, Maharashtra"
                  {...register("territory")}
                  className={errors.territory ? "border-destructive" : ""}
                />
                {errors.territory && (
                  <p className="text-sm text-destructive">{errors.territory.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-golden transition-all duration-300 text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>

          {/* Teaser Text */}
          <p className="text-center text-sm text-muted-foreground pt-2">
            Register to unlock <span className="font-semibold text-primary">Wholesale Pricing</span> & Clinical Pack (66 Strips) availability.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default PartnerForm;
