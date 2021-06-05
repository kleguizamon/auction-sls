import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';

export default (handler) =>
	middy(handler).use([
		httpJsonBodyParser(),
		httpEventNormalizer(), //event object control(api gateway)
		httpErrorHandler(),
	]);
