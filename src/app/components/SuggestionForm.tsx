'use client';

import { useState } from 'react';

export default function SuggestionForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      category: formData.get('category'),
      suggestion: formData.get('suggestion'),
    };

    try {
      const response = await fetch('/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('제안 제출 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름 / Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일 / Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              카테고리 / Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            >
              <option value="">선택해주세요 / Select a category</option>
              <option value="design">디자인 / Design</option>
              <option value="structure">구조 / Structure</option>
              <option value="material">재질 / Material</option>
              <option value="other">기타 / Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
              개선 제안 내용 / Suggestion
            </label>
            <textarea
              id="suggestion"
              name="suggestion"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="개선 제안 내용을 자유롭게 작성해주세요. / Please write your suggestion freely."
            ></textarea>
          </div>

          {message && (
            <div className={`p-4 rounded-lg ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/30 font-semibold ${
              status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {status === 'submitting' ? '제출 중... / Submitting...' : '제안하기 / Submit'}
          </button>
        </form>
      </div>
    </div>
  );
} 