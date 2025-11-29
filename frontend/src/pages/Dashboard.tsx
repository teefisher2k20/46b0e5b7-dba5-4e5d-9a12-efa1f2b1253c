import React, { useState } from 'react';
import { Sparkles, Video, Image, Hash, TrendingUp, Calendar, Zap, Brain, Upload, Search, Wrench, Cpu, ChevronDown } from 'lucide-react';
import { generateTask } from '../services/api';

const categories = [
  { id: 'ideas', name: 'Ideas', icon: Sparkles, color: 'hsl(260, 85%, 55%)' },
  { id: 'design', name: 'Design', icon: Image, color: 'hsl(320, 85%, 55%)' },
  { id: 'video', name: 'Video', icon: Video, color: 'hsl(200, 85%, 55%)' },
  { id: 'hashtags', name: 'Hashtags', icon: Hash, color: 'hsl(142, 76%, 45%)' },
  { id: 'analytics', name: 'Analytics', icon: TrendingUp, color: 'hsl(38, 92%, 50%)' },
  { id: 'schedule', name: 'Schedule', icon: Calendar, color: 'hsl(280, 85%, 55%)' },
  { id: 'automation', name: 'Automation', icon: Zap, color: 'hsl(50, 92%, 50%)' },
  { id: 'ai', name: 'AI Tools', icon: Brain, color: 'hsl(180, 85%, 55%)' },
];

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [extendedThinking, setExtendedThinking] = useState(false);
  const [selectedModel, setSelectedModel] = useState('GPT-4');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResult(null);
    
    try {
      const response = await generateTask({
        prompt,
        category: selectedCategory || undefined,
      });
      setResult(response);
    } catch (error: any) {
      console.error('Error generating task:', error);
      const errorMessage = error.response?.data?.detail || error.message || 'Failed to generate task';
      setResult({ status: 'error', plan: {}, results: { error: errorMessage } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-4 fade-in">
          <h1 className="text-6xl font-bold mb-3 gradient-text">
            AI Automation Studio
          </h1>
          <p className="text-xl text-secondary">
            Transform your ideas into reality with AI-powered automation
          </p>
        </header>

        {/* Category Selection */}
        <div className="glass-card mb-4 fade-in" style={{ animationDelay: '100ms' }}>
          <h2 className="text-2xl font-semibold mb-3">Select a Category</h2>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                  className="category-card"
                  style={{
                    background: isSelected 
                      ? `linear-gradient(135deg, ${category.color}20, ${category.color}10)`
                      : 'var(--bg-card)',
                    borderColor: isSelected ? category.color : 'var(--border)',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-base)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                  }}
                >
                  <Icon size={32} color={category.color} />
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Section */}
        <div className="glass-card mb-4 fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-semibold mb-3">What do you want to create?</h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your task... (e.g., 'Create a marketing video for a new product launch')"
            className="input"
            rows={4}
            style={{
              resize: 'vertical',
              minHeight: '120px',
            }}
          />
          
          {/* Toolbar */}
          <div className="flex items-center justify-between mt-4 px-1">
            <div className="flex items-center gap-3">
              <button 
                title="Upload Image/Video"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = 'hsl(260, 85%, 55%)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Upload size={18} color="hsl(260, 85%, 55%)" />
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Upload</span>
              </button>
              
              <button 
                title="Search Web"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = 'hsl(200, 85%, 55%)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Search size={18} color="hsl(200, 85%, 55%)" />
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Search</span>
              </button>
              
              <button 
                title="Tools"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = 'hsl(38, 92%, 50%)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0
