"use client"
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { useOrderStore } from "../store/store";






const COLORS = ["#1d4ed8","#ef4444","#048c75"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
  value,
}) => {
  const radius = outerRadius + 10; // label outside
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#1e293b"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="middle"
      fontSize={14}
      fontFamily="Inter,sans-serif"
      
    >
      {`${name}: ${value.toLocaleString()} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

export default function DonutChart({users}) {
  
  const order = useOrderStore.getState().orderList
  console.log(users?.length);
  
  const data = [
    {name:"user" , value:users?.length},
    {name:"order", value:order?.length},
    {name:'others', value:10 },
    
    
    
  ]
  return (
    <div className="w-full h-full relative ">
      <ResponsiveContainer width="100%" height="100%"  aspect={1}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}   
            outerRadius={100}
            paddingAngle={1}
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
            cornerRadius={10}
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive
            animationDuration={900}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
           contentStyle={{ backgroundColor: "#f1f5f9", borderRadius: "8px", border: "none" }}
           itemStyle={{ color: "#1e40af", fontWeight: "bold" }}
           />
             <Legend
              layout="vertical"     
              verticalAlign="bottom"    
              align="start"            
              iconType="circle" 
              iconSize={7}   
              wrapperStyle={{ marginTop: "40px", fontFamily: "Inter, sans-serif", fontSize: 20, lineHeight:'40px'}}
            />

        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
}