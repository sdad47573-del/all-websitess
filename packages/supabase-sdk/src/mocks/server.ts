let server: any = null;

const { setupServer } = await import('msw/node');
const { handlers } = await import('./handlers.js');
server = setupServer(...handlers);

export { server };
