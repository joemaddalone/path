import { describe, it, expect } from 'vitest';
import { angleInRadians, polarToCartesian, clockwisePoint, radialPoints, positionByArray } from './math';

describe('Math Utilities', () => {
  describe('angleInRadians', () => {
    it('should convert degrees to radians', () => {
      expect(angleInRadians(0)).toBe(0);
      expect(angleInRadians(90)).toBe(Math.PI / 2);
      expect(angleInRadians(180)).toBe(Math.PI);
      expect(angleInRadians(360)).toBe(2 * Math.PI);
    });
  });

  describe('polarToCartesian', () => {
    it('should convert polar coordinates to cartesian', () => {
      const result = polarToCartesian(0, 0, 5, 0);
      expect(result.x).toBeCloseTo(5, 5);
      expect(result.y).toBeCloseTo(0, 5);

      const result2 = polarToCartesian(10, 10, 3, 90);
      expect(result2.x).toBeCloseTo(10, 5);
      expect(result2.y).toBeCloseTo(13, 5);
    });
  });

  describe('clockwisePoint', () => {
    it('should get clockwise point on circle', () => {
      const result = clockwisePoint(0, 0, 5, 0);
      expect(result.x).toBeCloseTo(0, 5);
      expect(result.y).toBeCloseTo(-5, 5);
    });
  });

  describe('radialPoints', () => {
    it('should generate correct number of points', () => {
      const points = radialPoints(5, 0, 0, 4);
      expect(points).toHaveLength(4);
    });

    it('should handle zero radius gracefully', () => {
      const points = radialPoints(0, 0, 0, 4);
      expect(points).toHaveLength(4);
      expect(points[0][0]).toBeCloseTo(0, 5);
      expect(points[0][1]).toBeCloseTo(0, 5);
    });
  });

  describe('positionByArray', () => {
    it('should position elements correctly', () => {
      const shape = [
        [1, 0],
        [0, 1]
      ];
      const result = positionByArray(10, shape, 0, 0);

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        size: 10,
        cx: 5,
        cy: 5,
        ri: 0,
        ci: 0,
        value: 1
      });
      expect(result[1]).toEqual({
        size: 10,
        cx: 15,
        cy: 15,
        ri: 1,
        ci: 1,
        value: 1
      });
    });
  });
});
