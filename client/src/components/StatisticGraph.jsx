import React, { useRef, useEffect } from "react";

const BarGraph = ({ data, labels, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);
    ctx.font = "16px Arial";

    data.forEach((value, index) => {
      ctx.fillStyle = "#a370f0";
      ctx.fillRect(0, index * 70 + 25, value * 2, 30);
      ctx.fillStyle = "#551A8B";
      ctx.fillText(labels[index], 80, index * 70 + 15);
      ctx.fillText(value, 0, index * 70 + 15);
    });
  }, [data, labels, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

const StatisticGraph = ({ pokemon }) => {
  const labels = ["HP", "Attack", "Defense", "Speed", "Height", "Weight"];

  return (
    <div>
      <BarGraph
        data={[
          pokemon.hp,
          pokemon.attack,
          pokemon.defense,
          pokemon.speed,
          pokemon.height,
          pokemon.weight,
        ]}
        labels={labels}
        width={300}
        height={400}
      />
    </div>
  );
};

export default StatisticGraph;
