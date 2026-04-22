import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Halo! Saya Asisten Pintar Kriya Nusantara. Ada yang bisa saya bantu mengenai koleksi kerajinan tangan kami hari ini?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) setShowTooltip(false);
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const text = textOverride || inputValue;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await getChatResponse(userMsg.text);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const quickActions = [
    "Cek harga vas keramik",
    "Katalog furniture",
    "Cara pemesanan"
  ];

  return (
    <>
      {/* Trigger Button & Tooltip */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white px-4 py-2 rounded-xl shadow-xl border border-stone-100 text-stone-800 text-sm font-bold flex items-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="text-primary-600" size={16} />
              Tanya Asisten AI
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className={`p-4 rounded-2xl shadow-[0_20px_50px_rgba(194,65,12,0.3)] transition-all duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'bg-primary-700 text-white hover:bg-primary-800'
          }`}
        >
          <MessageCircle size={28} />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] md:w-[400px] bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-stone-200 overflow-hidden flex flex-col h-[600px] max-h-[85vh]"
          >
            {/* Header */}
            <div className="bg-stone-900 p-6 flex justify-between items-center text-white relative overflow-hidden">
               {/* Decorative background for header */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="bg-primary-600 p-2.5 rounded-xl">
                    <Bot size={24} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-stone-900 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base flex items-center gap-2">
                    Asisten Kriya
                    <span className="text-[10px] bg-primary-600 px-2 py-0.5 rounded-full uppercase tracking-tighter font-black">AI</span>
                  </h3>
                  <p className="text-xs text-stone-400 font-medium">Aktif • Siap Membantu</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors relative z-10">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-stone-50 space-y-6">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-primary-700 text-white rounded-br-none'
                          : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-stone-400 mt-1.5 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-stone-200 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-primary-600 animate-spin" />
                    <span className="text-xs text-stone-400 font-bold uppercase tracking-widest">Asisten Mengetik...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-stone-100">
              {/* Quick Actions */}
              {!isLoading && messages.length < 3 && (
                <div className="flex flex-wrap gap-2 mb-4">
                   {quickActions.map(action => (
                     <button
                        key={action}
                        onClick={() => handleSend(action)}
                        className="text-[11px] font-bold py-1.5 px-3 bg-stone-100 text-stone-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all"
                     >
                       {action}
                     </button>
                   ))}
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Tanyakan sesuatu..."
                    className="w-full pl-4 pr-12 py-3.5 bg-stone-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all border-none"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !inputValue.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary-700 text-white rounded-xl hover:bg-primary-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary-700/20 active:scale-90"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <button className="p-3 bg-stone-100 text-stone-400 rounded-2xl hover:text-primary-700 hover:bg-primary-50 transition-all">
                  <Phone size={20} />
                </button>
              </div>
              <p className="text-[10px] text-center text-stone-400 mt-4">
                Didukung oleh <span className="font-bold text-stone-600">Gemini AI</span> • Kriya Nusantara v1.0
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
