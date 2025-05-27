import React, { useRef, useEffect } from 'react';

interface RadarChartProps {
  width?: number;
  height?: number;
}

const RadarChart: React.FC<RadarChartProps> = ({ width = 600, height = 600 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const data = {
    labels: ['Variables', 'Functions', 'Loops', 'Arrays', 'Objects', 'DOM'],
    datasets: [
      {
        label: 'Your Performance',
        data: [85, 78, 92, 65, 70, 80],
        fillColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: '#4CAF50',
        pointColor: '#4CAF50',
        pointRadius: 4
      },
      {
        label: 'Class Average',
        data: [75, 68, 82, 70, 65, 75],
        fillColor: 'rgba(156, 163, 175, 0.2)',
        borderColor: '#9CA3AF',
        pointColor: '#9CA3AF',
        pointRadius: 4
      }
    ],
    minValue: 50,
    maxValue: 100,
    stepSize: 20
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set dimensions
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    const numAxes = data.labels.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // Draw grid circles
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 1;

    const numGridLevels = (data.maxValue - data.minValue) / data.stepSize;
    for (let i = 0; i <= numGridLevels; i++) {
      const gridRadius = (i / numGridLevels) * radius;

      ctx.beginPath();
      for (let j = 0; j < numAxes; j++) {
        const angle = j * angleStep;
        const x = centerX + gridRadius * Math.cos(angle);
        const y = centerY + gridRadius * Math.sin(angle);

        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Add value labels
      const value = data.minValue + i * data.stepSize;
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(value.toString(), centerX, centerY - gridRadius - 10);
    }

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;

    data.labels.forEach((label, i) => {
      const angle = i * angleStep;
      const endX = centerX + radius * Math.cos(angle);
      const endY = centerY + radius * Math.sin(angle);

      // Draw axis line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Draw label
      const labelRadius = radius * 1.1;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, labelX, labelY);
    });

    // Draw legend
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    data.datasets.forEach((dataset, i) => {
      ctx.fillStyle = dataset.borderColor;
      ctx.fillRect(centerX - radius, centerY - radius + i * 30, 20, 20);
      ctx.fillStyle = '#333';
      ctx.fillText(dataset.label, centerX - radius + 30, centerY - radius + i * 30 + 10);
    });

    // Draw radar areas
    data.datasets.forEach(dataset => {
      ctx.beginPath();

      dataset.data.forEach((value, i) => {
        const angle = i * angleStep;
        const normalizedValue = (value - data.minValue) / (data.maxValue - data.minValue);
        const pointRadius = normalizedValue * radius;
        const x = centerX + pointRadius * Math.cos(angle);
        const y = centerY + pointRadius * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.closePath();
      ctx.fillStyle = dataset.fillColor;
      ctx.fill();
      ctx.strokeStyle = dataset.borderColor;
      ctx.lineWidth = dataset.pointRadius;
      ctx.stroke();

      // Draw points
      dataset.data.forEach((value, i) => {
        const angle = i * angleStep;
        const normalizedValue = (value - data.minValue) / (data.maxValue - data.minValue);
        const pointRadius = normalizedValue * radius;
        const x = centerX + pointRadius * Math.cos(angle);
        const y = centerY + pointRadius * Math.sin(angle);

        ctx.beginPath();
        ctx.fillStyle = dataset.pointColor;
        ctx.arc(x, y, dataset.pointRadius, 0, Math.PI * 2);
        ctx.fill();

        // Add value label
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(value.toString(), x, y - 10);
      });
    });
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default RadarChart;
