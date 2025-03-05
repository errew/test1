const MutableCONFIG = {
    version: '1.0.0',
    nodeName: 'test-worker'
};
export const MutableConfigInstance = MutableCONFIG; // 修改后的导出名
export const CONFIG = Object.freeze(MutableCONFIG);
