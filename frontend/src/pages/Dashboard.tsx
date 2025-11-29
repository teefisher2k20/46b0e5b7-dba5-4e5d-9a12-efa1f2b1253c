import React, { useState } from 'react';
import { Sparkles, Video, Image, Hash, TrendingUp, Calendar, Zap, Brain } from 'lucide-react';
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
    } catch (error) {
      console.error('Error generating task:', error);
      setResult({ status: 'error', plan: {}, results: { error: 'Failed to generate task' } });
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
                  <span className="font-semibold">{category.name}</span>
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
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="btn btn-primary mt-3"
            style={{
              width: '100%',
              opacity: loading || !prompt.trim() ? 0.5 : 1,
              cursor: loading || !prompt.trim() ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }} />
                Generating...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Sparkles size={20} />
                Generate with AI
              </span>
            )}
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div className="glass-card fade-in">
            <h2 className="text-2xl font-semibold mb-3">Results</h2>
            
            {/* Plan */}
            {result.plan && result.plan.analysis && (
              <div className="mb-4 p-4" style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--primary)',
              }}>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Brain size={20} color="var(--primary)" />
                  AI Analysis
                </h3>
                <p className="text-secondary">{result.plan.analysis}</p>
              </div>
            )}

            {/* Tool Results */}
            {result.results && Object.keys(result.results).length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Tool Outputs</h3>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(result.results).map(([tool, data]: [string, any]) => (
                    <div
                      key={tool}
                      className="p-4"
                      style={{
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <h4 className="font-semibold mb-2 capitalize">{tool}</h4>
                      <pre className="text-sm text-secondary" style={{
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}>
                        {JSON.stringify(data, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Error State */}
            {result.status === 'error' && (
              <div className="p-4" style={{
                background: 'hsla(0, 84%, 60%, 0.1)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--error)',
              }}>
                <p className="text-error">An error occurred while processing your request.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .min-h-screen {
          min-height: 100vh;
        }

        .grid {
          display: grid;
        }

        .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }

        .grid-cols-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        textarea.input {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
