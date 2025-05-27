import React, { useRef, useEffect } from 'react';

interface BarChartProps {
  width?: number;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ width = 600, height = 400 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Completed',
        data: [3, 5, 2, 4, 6, 1, 2],
        color: '#4CAF50'
      },
      {
        label: 'Pending',
        data: [1, 0, 2, 1, 0, 0, 1],
        color: '#E5E7EB'
      }
    ]
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set dimensions
    const padding = 40;
    const barWidth = 30;
    const gap = 20;
    const groupGap = 10;
    const totalGroups = data.labels.length;
    const groupWidth = (barWidth + gap) * data.datasets.length + groupGap;
    const availableWidth = canvas.width - padding * 2;
    const startX = padding;
    const startY = padding;

    // Calculate scales
    const maxValue = Math.max(...data.datasets.flatMap(dataset => dataset.data));
    const yScale = (canvas.height - padding * 2) / maxValue;

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;

    // X axis
    ctx.beginPath();
    ctx.moveTo(startX, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Y axis
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, canvas.height - padding);
    ctx.stroke();

    // Draw y-axis labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const y = canvas.height - padding - (i * (canvas.height - padding * 2) / yTicks);
      const value = Math.round(maxValue * (i / yTicks));

      ctx.fillText(value.toString(), startX - 10, y);

      // Draw grid lines
      ctx.beginPath();
      ctx.strokeStyle = '#eee';
      ctx.moveTo(startX, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
    }

    // Draw x-axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    data.labels.forEach((label, i) => {
      const x = startX + i * groupWidth + groupWidth / 2 - barWidth / 2;
      ctx.fillText(label, x, canvas.height - padding + 15);
    });

    // Draw legend
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    data.datasets.forEach((dataset, i) => {
      ctx.fillStyle = dataset.color;
      ctx.fillRect(startX, startY + i * 30, 20, 20);
      ctx.fillStyle = '#333';
      ctx.fillText(dataset.label, startX + 30, startY + i * 30 + 10);
    });

    // Draw bars
    data.datasets.forEach((dataset, datasetIndex) => {
      dataset.data.forEach((value, i) => {
        const x = startX + i * groupWidth + datasetIndex * (barWidth + gap);
        const barHeight = value * yScale;
        const y = canvas.height - padding - barHeight;

        // Draw bar
        ctx.fillStyle = dataset.color;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 4);
        ctx.fill();

        // Add value label
        if (barHeight > 20) {
          ctx.fillStyle = '#fff';
          ctx.font = '10px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(value.toString(), x + barWidth / 2, y + barHeight - 5);
        }
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

export default BarChart;