// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [startDate, setStartDate] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [progress, setProgress] = useState('');
  const [communityPosts, setCommunityPosts] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // Save goals to MongoDB
  useEffect(() => {
    const saveGoal = async () => {
      if (startDate && goalDate && goalWeight) {
        try {
          await fetch('http://localhost:5000/api/goals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              startDate,
              goalDate,
              goalWeight,
              user: user?.email || 'anonymous',
            }),
          });
        } catch (err) {
          console.error('Failed to save goal:', err);
        }
      }
    };
    saveGoal();
  }, [startDate, goalDate, goalWeight]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-300 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-900">
        Welcome to HealthBuddy Dashboard
      </h1>
      <p className="text-center text-gray-700">
        Start tracking your health goals here.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 💡 Health Tips */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-purple-700 mb-2">💡 Health Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>💧 Drink water before meals to aid digestion.</li>
            <li>🥦 If you can't pronounce it, don't eat it.</li>
            <li>🍳 Start your day with a strong breakfast, not a craving.</li>
            <li>🥗 Practice portion control and mindful eating.</li>
            <li>🚶‍♂️ Move your body daily, even for 15 minutes.</li>
            <li>😴 Prioritize quality sleep and stress management.</li>
          </ul>
        </div>

        {/* 💬 Encouragements */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="font-semibold text-lg text-blue-700">💬 Encouragement</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
            <li>🔥 50% of people are struggling with weight loss, and 50% are winning — you can do this too!</li>
            <li>💪 Progress is progress, no matter how small.</li>
            <li>🌟 You’re stronger than you think — keep going!</li>
            <li>🧘‍♀️ Don’t chase perfection — chase consistency.</li>
            <li>🚀 Every healthy choice gets you closer to your goal.</li>
          </ul>
        </div>

        {/* 📆 Weight Goal Calendar */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-teal-700 mb-2">📆 Weight Goal Calendar</h2>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full mt-1 border p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Target Date</label>
              <input
                type="date"
                value={goalDate}
                onChange={(e) => setGoalDate(e.target.value)}
                className="w-full mt-1 border p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Weight Goal (kg)</label>
              <input
                type="number"
                value={goalWeight}
                onChange={(e) => setGoalWeight(e.target.value)}
                className="w-full mt-1 border p-2 rounded-md"
                placeholder="e.g., 65"
              />
            </div>
          </form>

          {startDate && goalDate && goalWeight && (
            <div className="mt-4 bg-blue-50 border border-blue-300 p-3 rounded-md text-blue-800">
              🎯 You aim to reach <strong>{goalWeight}kg</strong> between <strong>{startDate}</strong> and <strong>{goalDate}</strong>. Stay consistent!
            </div>
          )}
        </div>

        {/* 🌍 Community Section - Share Progress */}
        <div className="bg-white p-4 rounded-2xl shadow-md col-span-full">
          <h2 className="font-semibold text-lg text-green-700 mb-3">🌍 Community Progress Sharing</h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (progress.trim()) {
                try {
                  await fetch('http://localhost:5000/api/community', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      content: progress,
                      user: user?.email || 'anonymous',
                    }),
                  });
                  setCommunityPosts([...communityPosts, progress]);
                  setProgress('');
                } catch (err) {
                  console.error('Failed to post:', err);
                }
              }
            }}
          >
            <textarea
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Share your progress today..."
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-700"
            >
              Post
            </button>
          </form>

          <div className="mt-4 space-y-2">
            {communityPosts.length === 0 ? (
              <p className="text-gray-500 italic">No posts yet. Be the first to share!</p>
            ) : (
              communityPosts.map((post, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-md shadow text-gray-800">
                  {post}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Placeholder Sections */}
    
      </div>
    </div>
  );
};

export default Dashboard;
