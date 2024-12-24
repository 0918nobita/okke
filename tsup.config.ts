import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/obj.ts', 'src/str.ts'],
    format: ['esm', 'cjs'],
    clean: true,
    dts: true,
    platform: 'neutral',
    sourcemap: true,
    minify: true,
});
