import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Statistics() {
  const data = useLoaderData();

  const countPartsOfSpeech = () => {
    const counts = data.reduce((acc, item) => {
      const part = item.part_of_speech;
      acc[part] = (acc[part] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const partsOfSpeechCounts = countPartsOfSpeech();

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F5A623"];

  return (
    <div className="w-10/12 mx-auto px-4 py-12">
      <Helmet>
        <title>Statistics</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Parts of Speech Statistics
      </h2>

      {partsOfSpeechCounts.length > 0 ? (
        <div className="flex justify-center mb-8">
          <PieChart width={500} height={500}>
            <Pie
              data={partsOfSpeechCounts}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {partsOfSpeechCounts.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading chart...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partsOfSpeechCounts.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <h3 className="text-4xl font-semibold text-blue-600">
              {item.value}
            </h3>
            <p className="text-gray-600 mt-2 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
