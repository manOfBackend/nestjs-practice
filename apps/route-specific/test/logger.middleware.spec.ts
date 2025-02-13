import { LoggerMiddleware } from '../src/logger.middleware';
import { Request, Response, NextFunction } from 'express';

describe('LoggerMiddleware (Route-Specific)', () => {
  let middleware: LoggerMiddleware;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    middleware = new LoggerMiddleware();
    mockRequest = { method: 'GET', url: '/users' };
    mockResponse = {} as Response;
    nextFunction = jest.fn();
  });

  it('should log request when hitting /users route', () => {
    console.log = jest.fn();
    middleware.use(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringMatching(/\[Route-Specific Middleware\] GET \/users/),
    );
    expect(nextFunction).toHaveBeenCalled();
  });

});
