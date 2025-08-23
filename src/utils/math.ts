/**
 * Mathematical utility functions for path calculations
 */

/**
 * Convert angle from degrees to radians
 */
export const angleInRadians = (angle: number): number => (angle * Math.PI) / 180;

/**
 * Convert polar coordinates to cartesian coordinates
 */
export const polarToCartesian = (
  cx: number,
  cy: number,
  radius: number,
  angle: number
) => {
  const radians = angleInRadians(angle);
  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
};

/**
 * Get clockwise point on a circle
 */
export const clockwisePoint = (
  cx: number,
  cy: number,
  radius: number,
  angle: number
): { x: number; y: number } => {
  const a = angle - 90;
  return polarToCartesian(cx, cy, radius, a);
};

/**
 * Generate radial points around a circle
 */
export const radialPoints = (
  radius: number,
  cx: number,
  cy: number,
  numOfPoints: number,
  offsetAngle = -0.5 * Math.PI,
  vertexSkip = 1
): Array<[number, number]> => {
  radius = radius || 0.0000000001;
  const baseAngle = (2 * Math.PI * vertexSkip) / numOfPoints;
  const vertexIndices = Array.from(
    Array(numOfPoints >= 0 ? numOfPoints : 0).keys()
  );
  const precision = Math.max(0, 4 - Math.floor(Math.log10(radius)));
  return vertexIndices.map((_, index) => {
    const currentAngle = index * baseAngle + offsetAngle;
    return [
      parseFloat((cx + radius * Math.cos(currentAngle)).toFixed(precision)),
      parseFloat((cy + radius * Math.sin(currentAngle)).toFixed(precision)),
    ];
  });
};

/**
 * Position elements by array configuration
 */
export const positionByArray = (
  size: number,
  shape: any[],
  sx: number,
  sy: number
): Array<{
  size: number;
  cx: number;
  cy: number;
  ri: number;
  ci: number;
  value: any;
}> => {
  const response: Array<{
    size: number;
    cx: number;
    cy: number;
    ri: number;
    ci: number;
    value: any;
  }> = [];
  const halfSize = size / 2;
  shape.forEach((r: any[], ri: number) => {
    r.forEach((c: any, ci: number) => {
      if (c) {
        response.push({
          size,
          cx: ci * size + halfSize + sx,
          cy: ri * size + halfSize + sy,
          ri,
          ci,
          value: c,
        });
      }
    });
  });

  return response;
};
