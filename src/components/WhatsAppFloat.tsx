import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/918303361848"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
