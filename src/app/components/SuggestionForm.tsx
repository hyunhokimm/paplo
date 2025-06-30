'use client';

import { useState, FormEvent } from 'react';

export default function SuggestionForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const form = e.currentTarget;
      
      // Netlify Forms로 데이터 전송
      fetch("/", {
        method: "POST",
        body: new FormData(form),
      })
        .then(() => {
          setStatus('success');
          setMessage('제안해 주셔서 감사합니다! / Thank you for your suggestion!');
          setSelectedFile('');
          form.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
          setStatus('error');
          setMessage('제출 중 오류가 발생했습니다. 다시 시도해 주세요. / An error occurred. Please try again.');
        });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setMessage('제출 중 오류가 발생했습니다. 다시 시도해 주세요. / An error occurred. Please try again.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB in bytes
        setMessage('파일 크기는 10MB를 초과할 수 없습니다. / File size cannot exceed 10MB.');
        setStatus('error');
        e.target.value = '';
        setSelectedFile('');
        return;
      }
      setSelectedFile(file.name);
      setMessage('');
      setStatus('idle');
    } else {
      setSelectedFile('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Hidden Netlify Form */}
      <form name="suggestions" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <select name="occupation" />
        <select name="category" />
        <textarea name="suggestion" />
        <input type="file" name="attachment" />
      </form>

      <form
        name="suggestions"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        {/* Netlify Forms 필수 필드 */}
        <input type="hidden" name="form-name" value="suggestions" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름 / Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="홍길동 / John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일 / Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
            직업 / Occupation
          </label>
          <select
            name="occupation"
            id="occupation"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">선택해주세요 / Select your occupation</option>
            <option value="cafe_owner">카페 운영자 / Cafe Owner</option>
            <option value="barista">바리스타 / Barista</option>
            <option value="manager">매장 관리자 / Store Manager</option>
            <option value="manufacturer">제조업체 / Manufacturer</option>
            <option value="designer">디자이너 / Designer</option>
            <option value="other">기타 / Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            카테고리 / Category
          </label>
          <select
            name="category"
            id="category"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">선택해주세요 / Select a category</option>
            <option value="design">디자인 개선 / Design Improvement</option>
            <option value="function">기능 개선 / Function Improvement</option>
            <option value="usability">사용성 개선 / Usability Improvement</option>
            <option value="other">기타 / Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
            개선 제안 내용 / Suggestion
          </label>
          <textarea
            name="suggestion"
            id="suggestion"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="개선 제안 내용을 자유롭게 작성해주세요. / Please write your suggestion freely."
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            파일 첨부 / Attach File
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-purple-500 transition-colors">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col items-center text-sm text-gray-600">
                <label
                  htmlFor="attachment"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                >
                  <span>파일 선택 / Choose file</span>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
                  />
                </label>
                {selectedFile && (
                  <p className="mt-2 text-sm text-gray-600">
                    선택된 파일 / Selected file: {selectedFile}
                  </p>
                )}
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF, PDF, DOC (최대 10MB / Max 10MB)
              </p>
            </div>
          </div>
        </div>

        {message && (
          <div 
            className={`p-4 rounded-lg ${
              status === 'success' 
                ? 'bg-green-50 text-green-800' 
                : status === 'error' 
                  ? 'bg-red-50 text-red-800'
                  : ''
            }`}
          >
            {message}
          </div>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50"
        >
          {status === 'loading' ? '제출 중... / Submitting...' : '제안하기 / Submit'}
        </button>
      </form>
    </div>
  );
} 