
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Chartly AI vs Traditional Tools</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200/10">
                <th className="p-4 text-left">Features</th>
                <th className="p-4 text-center">Chartly AI</th>
                <th className="p-4 text-center">Traditional TA Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200/10">
                <td className="p-4">Real-time Analysis</td>
                <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gray-500"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-200/10">
                <td className="p-4">AI-Powered Insights</td>
                <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gray-500"><X className="w-5 h-5 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-200/10">
                <td className="p-4">Pattern Recognition</td>
                <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gray-500"><Check className="w-5 h-5 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-200/10">
                <td className="p-4">Sentiment Analysis</td>
                <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gray-500"><X className="w-5 h-5 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4">Custom Chart Upload</td>
                <td className="p-4 text-center text-primary"><Check className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gray-500"><X className="w-5 h-5 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
