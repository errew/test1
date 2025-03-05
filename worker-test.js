import { CONFIG } from './config.js';

export default {
    async fetch(request, env, ctx) {
        return new Response(`Worker is running. Config version: ${CONFIG.version}, Node name: ${CONFIG.nodeName}`);
    }
};
