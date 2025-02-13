import { LoggerMiddleware } from '../src/logger.middleware';
import { Request, Response, NextFunction } from 'express';

describe('LoggerMiddleware', () => {
  let middleware: LoggerMiddleware;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    middleware = new LoggerMiddleware();
    mockRequest = { method: 'GET', url: '/test' };
    mockResponse = {} as Response;
    nextFunction = jest.fn();
  });

  it('should log request method and url', () => {
    console.log = jest.fn();

    middleware.use(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(/\[Basic\] GET \/test/),
    );
    expect(nextFunction).toHaveBeenCalled();
  });
});
