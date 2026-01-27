import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
}

const WhatsAppFloatingButton = ({
  phoneNumber = "918001234567",
  message = "I am a Doctor/Partner interested in bulk buying. Please share details.",
  label = "Need Instant Access? Chat with our B2B Manager"
}: WhatsAppFloatingButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip label */}
      <div className="hidden md:block bg-foreground text-background text-sm px-3 py-2 rounded-lg shadow-lg max-w-[200px] text-right animate-pulse">
        {label}
      </div>
      
      {/* WhatsApp Button */}
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloatingButton;
