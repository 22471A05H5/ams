import { MessageCircle, Phone } from "lucide-react";

const FloatingContactButtons = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/916281855705", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+916281855705";
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={handleWhatsApp}
          aria-label="Chat on WhatsApp"
          className="fab-btn h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleCall}
          aria-label="Call us"
          className="fab-btn h-12 w-12 rounded-full bg-primary hover:opacity-90 text-white shadow-lg flex items-center justify-center"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default FloatingContactButtons;
