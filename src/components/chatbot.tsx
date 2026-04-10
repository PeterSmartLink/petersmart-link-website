'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { chat } from '@/ai/flows/chat';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSheetChange = (open: boolean) => {
    setIsOpen(open);
    if (open && messages.length === 0) {
        setIsLoading(true);
        // Initial message from bot
        setTimeout(() => {
            setMessages([
                { role: 'model', content: "Hello! I'm Next, your virtual assistant for PeterSmart Link. How can I help you today?" }
            ]);
            setIsLoading(false);
        }, 1000);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat({
          history: messages,
          message: input
      });
      const botMessage: Message = { role: 'model', content: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'model',
        content: 'Sorry, I seem to be having some trouble right now. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Chatbot error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleSheetChange}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 left-6 z-50 h-16 w-16 rounded-full shadow-lg"
          aria-label="Open chatbot"
        >
          <Bot className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Bot />
            Chat with Next
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 pr-4 -mr-6" ref={scrollAreaRef}>
            <div className="flex-1 space-y-4 p-4">
            {messages.map((message, index) => (
                <div
                key={index}
                className={cn(
                    'flex items-end gap-2',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
                >
                {message.role === 'model' && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>
                            <Logo />
                        </AvatarFallback>
                    </Avatar>
                )}
                <div
                    className={cn(
                    'max-w-xs rounded-lg px-4 py-2 text-sm md:max-w-sm',
                    message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary'
                    )}
                >
                    {message.content}
                </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                     <Avatar className="h-8 w-8">
                        <AvatarFallback>
                           <Logo />
                        </AvatarFallback>
                    </Avatar>
                    <div className="max-w-xs rounded-lg px-4 py-2 text-sm md:max-w-sm bg-secondary">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <SheetFooter>
            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                </Button>
            </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
