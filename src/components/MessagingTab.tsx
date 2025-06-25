
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, User } from "lucide-react";

export function MessagingTab() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "John Smith",
      role: "Player",
      lastMessage: "Thanks for the update on training schedule",
      timestamp: "2 min ago",
      unread: 0,
      online: true
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Coach",
      lastMessage: "Can we discuss the new training methods?",
      timestamp: "1 hour ago",
      unread: 2,
      online: false
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Player",
      lastMessage: "When is the next team meeting?",
      timestamp: "3 hours ago",
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "John Smith",
      content: "Hi, I wanted to ask about the training schedule changes.",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      content: "Sure! The new schedule will be effective from next Monday. Training will start at 6 PM instead of 7 PM.",
      timestamp: "10:32 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "John Smith",
      content: "Thanks for the update on training schedule",
      timestamp: "10:35 AM",
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // TODO: Implement send message logic
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Conversations List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Messages</span>
            <Badge variant="outline">{conversations.length}</Badge>
          </CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 border-b transition-colors ${
                  selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        {conversation.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium truncate">{conversation.name}</h4>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600">{conversation.role}</p>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="lg:col-span-2 flex flex-col">
        {selectedConversation ? (
          <>
            <CardHeader className="border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">
                    {conversations.find(c => c.id === selectedConversation)?.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {conversations.find(c => c.id === selectedConversation)?.role}
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 min-h-[40px] max-h-[120px]"
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                />
                <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <CardContent className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Select a conversation to start messaging</p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
