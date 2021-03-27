const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://fervent-montalcini-1d9d16.netlify.app';
