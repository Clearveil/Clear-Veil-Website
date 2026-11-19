// Shared: connect to a headless Edge/Chrome started with --remote-debugging-port=9444 (see README).
import puppeteer from 'puppeteer-core';
export const connect = () => puppeteer.connect({ browserURL: 'http://127.0.0.1:9444' });
export const BASE = process.env.BASE_URL || 'http://localhost:4321';
