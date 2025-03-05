import { CONFIG } from './myconfig.js';

export 默认 {
    async fetch(request， env， ctx) {
        return new Response(`Worker is running. Config version: ${CONFIG。version}, Node name: ${CONFIG。nodeName}`);
    }
};
