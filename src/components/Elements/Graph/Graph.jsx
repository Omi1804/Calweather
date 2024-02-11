import "./graph.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const getDateBefore = (days) => {
    const today = new Date();
    const dateBefore = new Date(today);
    dateBefore.setDate(today.getDate() - days);
    return dateBefore.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    }); // Return date in format DD/MM
  };

  const getRandomValues = () => {
    const random = Math.random() * 10 + 20;
    return Math.ceil(random);
  };

  const data = [
    { name: getDateBefore(6), temperature: getRandomValues() },
    { name: getDateBefore(5), temperature: getRandomValues() },
    { name: getDateBefore(4), temperature: getRandomValues() },
    { name: getDateBefore(3), temperature: getRandomValues() },
    { name: getDateBefore(2), temperature: getRandomValues() },
    { name: getDateBefore(1), temperature: getRandomValues() },
    { name: getDateBefore(0), temperature: getRandomValues() },
  ];

  return (
    <div className="tempGraph">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: -20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 15, dy: 10, textAnchor: "middle" }}
            stroke="white"
          />
          <YAxis stroke="white" />

          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="white"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
