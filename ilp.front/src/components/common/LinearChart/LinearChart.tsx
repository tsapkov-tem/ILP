import React, { useRef, useEffect } from 'react';

interface LinearChartProps {
  width?: number;
  height?: number;
}

const LinearChart: React.FC<LinearChartProps> = ({ width = 600, height = 400 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const data = {
    labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь'],
    datasets: [{
      label: 'Course Progress',
      data: [10, 25, 42, 55, 70, 75],
      lineColor: '#4CAF50',
      fillColor: 'rgba(76, 175, 80, 0.1)',
      lineWidth: 2,
      tension: 0.3
    }]
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
    const pointRadius = 4;
    const availableWidth = canvas.width - padding * 2;
    const availableHeight = canvas.height - padding * 2;
    const startX = padding;
    const startY = padding;

    // Calculate scales
    const maxValue = 100; // Fixed max for percentage
    const yScale = availableHeight / maxValue;
    const xScale = availableWidth / (data.labels.length - 1);

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

    // Draw y-axis labels with percentage
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const y = canvas.height - padding - (i * availableHeight / yTicks);
      const value = Math.round(maxValue * (i / yTicks));

      ctx.fillText(value + '%', startX - 10, y);

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
      const x = startX + i * xScale;
      ctx.fillText(label, x, canvas.height - padding + 15);
    });

    // Draw the line chart
    const dataset = data.datasets[0];

    // Draw the filled area
    ctx.beginPath();
    ctx.moveTo(startX, canvas.height - padding);

    dataset.data.forEach((value, i) => {
      const x = startX + i * xScale;
      const y = canvas.height - padding - (value * yScale);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        // Apply tension (cubic bezier curve)
        const prevX = startX + (i - 1) * xScale;
        const prevY = canvas.height - padding - (dataset.data[i - 1] * yScale);
        const nextX = startX + (i + 1) * xScale;
        const nextY = canvas.height - padding - (dataset.data[i + 1] * yScale);

        const cp1x = prevX + (x - prevX) * dataset.tension;
        const cp1y = prevY;
        const cp2x = x - (nextX - x) * dataset.tension;
        const cp2y = y;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      }
    });

    // Line to bottom right
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    // Line to bottom left
    ctx.lineTo(startX, canvas.height - padding);
    // Close path
    ctx.closePath();

    // Fill the area
    ctx.fillStyle = dataset.fillColor;
    ctx.fill();

    // Draw the line
    ctx.beginPath();
    dataset.data.forEach((value, i) => {
      const x = startX + i * xScale;
      const y = canvas.height - padding - (value * yScale);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        // Apply tension (cubic bezier curve)
        const prevX = startX + (i - 1) * xScale;
        const prevY = canvas.height - padding - (dataset.data[i - 1] * yScale);
        const nextX = startX + (i + 1) * xScale;
        const nextY = canvas.height - padding - (dataset.data[i + 1] * yScale);

        const cp1x = prevX + (x - prevX) * dataset.tension;
        const cp1y = prevY;
        const cp2x = x - (nextX - x) * dataset.tension;
        const cp2y = y;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      }
    });

    ctx.strokeStyle = dataset.lineColor;
    ctx.lineWidth = dataset.lineWidth;
    ctx.stroke();

    // Draw points
    dataset.data.forEach((value, i) => {
      const x = startX + i * xScale;
      const y = canvas.height - padding - (value * yScale);

      ctx.beginPath();
      ctx.fillStyle = dataset.lineColor;
      ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
      ctx.fill();

      // Add value label
      ctx.fillStyle = '#333';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(value + '%', x, y - 10);
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

export default LinearChart;
